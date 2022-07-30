/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.nums = nums.sort(sorter);
    }
};

function sorter(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.nums = this.nums.sort(sorter);
    return this.nums[this.nums.length - this.k]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
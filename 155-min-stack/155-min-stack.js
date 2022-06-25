var MinStack = function() {
    this.storage = [];    
    this.length = 0;
    this.min;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.min = this.storage.length === 0 ? val : Math.min(val, this.min)
    this.storage.splice(0,0,{ val: val, min: this.min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.storage[0].val === this.storage[0].val && this.storage[1] !== undefined) {
        this.min = this.storage[1].min;
    }
    this.storage.splice(0,1)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage[0].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.storage[0].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
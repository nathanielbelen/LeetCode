/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let nodes = [head];
    let curr = head;
    while (curr.next) {
        nodes.push(curr.next);
        curr = curr.next;
    }
    if (nodes.length === 1) return null;
    let middle = Math.ceil((nodes.length - 1)/2)
    nodes[middle-1].next = nodes[middle + 1] || null;
    return head;
};
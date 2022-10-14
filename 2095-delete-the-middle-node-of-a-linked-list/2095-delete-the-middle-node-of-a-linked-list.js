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
    // count nodes in list
    if (head.next === null) return null;
    let counter = 0;
    let pass1 = head;
    let pass2 = head;
    while (pass1) {
        counter++
        pass1 = pass1.next;
    }
    let middle = Math.floor(counter/2)
    // counter should have counted all the nodes by this point
    for (let i = 0; i < middle - 1; i++) {
        pass2 = pass2.next;
    }
    pass2.next = pass2.next.next
    return head
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let first = list1;
    let second = list2;
    let tail = new ListNode(0);
    let head = tail;
    while (first && second) {
        if (first.val < second.val) {
            tail.next = first;
            first = first.next;
            tail = tail.next;
        } else {
            tail.next = second;
            second = second.next;
            tail = tail.next; 
        }
    }
    if (first) {
        tail.next = first;
    }
    if (second) {
        tail.next = second;
    }
    return head.next;
};
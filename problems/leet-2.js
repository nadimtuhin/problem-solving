// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


function ListNode(val, next = null) {
    return {
        val,
        next
    };
}

function addTwoNumbers(l1, l2, onHand=0) {
    let v1 = l1 && l1.val;
    let v2 = l2 && l2.val;
    let val = v1 + v2 + onHand;

    onHand  = 0

    if (val >= 10) {
        val = val - 10;
        onHand = 1;
    }

    let next1 = l1 && l1.next;
    let next2 = l2 && l2.next;
    if((next1) || (next2) || onHand) {
        return ListNode(val, addTwoNumbers(next1, next2, onHand));
    }

    return ListNode(val);
}


function altAddTwoNumbers(l1, l2, ln) {
    let c = l1, d = l2;

    let nodes = [];
    let onHand = 0;

    while(c || d) {
        let val = (c && c.val) + (d && d.val);

        if (onHand) val+=onHand;

        if (val >= 10) {
            onHand = 1;
            val = val - 10;
        } else {
            onHand = 0;
        }

        nodes.push(ListNode(val));
        c = c && c.next, d = d && d.next;
    }

    if(onHand) {
        nodes.push(ListNode(1));
    }

    let node;
    for(let ii=nodes.length -1; ii>=0; ii--) {
        if(!node) node = nodes[ii];
        else node = ListNode(nodes[ii].val, node);
    }

    return node;
};


module.exports = { addTwoNumbers, altAddTwoNumbers, ListNode };

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
// k is a positive integer and is less than or equal to the length of the linked list. 
// If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// Example:

// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5

// Note:

// Only constant extra memory is allowed.
// You may not alter the values in the list's nodes, only nodes itself may be changed.

function serializeLinkedList(node) {
    if (node.next) {
        return node.val + "->" + serializeLinkedList(node.next);
    }

    if (!node.val) {
        return null;
    }

    return node.val;
}

function getLength(list) {
    let node = list;
    let length = 0;

    while(node) {
        length++;
        node = node.next;
    }

    return length;
}

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

ListNode.prototype.toString = function() {
    return serializeLinkedList.call(null, this);
};

function arrayToLinkedList(listArr) {
    let head = new ListNode(0);
    let latestHead = head;

    for(let ii=0; ii<listArr.length; ii++) {
        latestHead.next = listArr[ii];
        latestHead = latestHead.next;
    }

    return head.next;
}

function reverseLinkedList(arr) {
    arr = arr.slice();

    const reversedArr = arr.reverse();

    arr[arr.length-1].next = arr[0].next;

    const reversedLL = arrayToLinkedList(reversedArr);

    return reversedLL;
}

function reverseKGroup(node, k) {
    let length = getLength(node);
    let head = new ListNode(0);
    head.next = node;

    let tempHeadII = head;
    let tempHeadJJ = head;

    for(let ii=0; ii<length; ii=ii+k) {
        let tempArr = [];
        for(let jj=0; jj<k; jj++) {
            if(tempHeadJJ) {
                tempHeadJJ = tempHeadJJ.next;
            } else {
                break;
            }

            if(tempHeadJJ) {
                tempArr.push(tempHeadJJ);
            } else {
                break;
            }
        }

        if(tempArr.length != k) break;

        let ll = reverseLinkedList(tempArr);
        tempHeadII.next = ll;

        tempHeadII = tempArr[0];
        tempHeadJJ = tempArr[0];
    }

    return head.next;
}

module.exports = { 
    Node: ListNode, 
    getLength, 
    serializeLinkedList, 
    solution: reverseKGroup,
    reverseLinkedList
};

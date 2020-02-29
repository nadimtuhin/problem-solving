// This problem was asked by Google.

// Given the root to a binary tree, 
// implement serialize(root), which serializes the tree into a string, and deserialize(s), 
// which deserializes the string back into the tree.

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right


// For example, given the following Node class

// The following test should pass:
// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

function Node(val, left=null, right=null) {
    return { val, left, right };
}

function getLeftIndex(rootIndex) {
    return 2*rootIndex;
}

function getRightIndex(rootIndex) {
    return 2*rootIndex+1;
}

function serialize(node, arr=[], rootIndex=1) {
    if (!node) return arr;

    arr[rootIndex] = node.val;

    if (node.left) {
        let leftIndex = getLeftIndex(rootIndex);
        arr[leftIndex] = node.left.val;
        serialize(node.left, arr, leftIndex);
    }

    if(node.right) {
        let rightIndex = getRightIndex(rootIndex);
        arr[rightIndex] = node.right.val;
        serialize(node.right, arr, rightIndex);
    }

    return arr;
}


function deserialize(serializedNode, rootIndex=1) {
    if (typeof serializedNode[rootIndex] === 'undefined') return null;

    return Node(
        serializedNode[rootIndex], 
        deserialize(serializedNode, getLeftIndex(rootIndex)),
        deserialize(serializedNode, getRightIndex(rootIndex))
    )
}

module.exports = { serialize, deserialize, Node };
const { solution, Node, serializeLinkedList, getLength } = require('./leet-25');
let l = sol = 10;

it('should test 1 2 3 4 on 2', function() {
    const node = new Node(1, new Node(2, new Node(3, new Node(4))));

    expect(solution(node, 2).toString()).toEqual('2->1->4->3');
});

it('should test 1 2 3 4 on 3', function() {
    const node = new Node(1, new Node(2, new Node(3, new Node(4))));

    expect(solution(node, 3).toString()).toEqual('3->2->1->4');
});

it('should test 1 2 3 4 5', function() {
    const node = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

    expect(solution(node, 2).toString()).toEqual('2->1->4->3->5');
});

it('should test 1 2 3 4 5', function() {
    const node = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

    expect(solution(node, 3).toString()).toEqual('3->2->1->4->5');
});

const node = new Node(1, new Node(2, new Node(3)));

it('should test getLength', function() {
    expect(getLength(node)).toEqual(3);
});

it('should serialize linkedList', () => {
    expect(serializeLinkedList(node)).toEqual('1->2->3');
})


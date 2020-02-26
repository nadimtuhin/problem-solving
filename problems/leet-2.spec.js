const { addTwoNumbers, altAddTwoNumbers, ListNode } = require('./leet-2');
     
it('should test for addTwoNumbers 3 numbers', function() {
    let l1 = ListNode(2, ListNode(4, ListNode(3)));
    let l2 = ListNode(5, ListNode(6, ListNode(4)));
    let sol = ListNode(7, ListNode(0, ListNode(8)));

    let l = addTwoNumbers(l1, l2);

    expect(l).toEqual(sol);
});

it('should test for addTwoNumbers [5] [5]', function() {
    let l1 = ListNode(5);
    let l2 = ListNode(5);
    let sol = ListNode(0, ListNode(1));

    let l = addTwoNumbers(l1, l2); 

    expect(l).toEqual(sol);
});

it('should test for addTwoNumbers [1, 8] [0]', function() {
    let l1 = ListNode(1, ListNode(8));
    let l2 = ListNode(0);
    let sol = ListNode(1, ListNode(8));

    let l = addTwoNumbers(l1, l2); 

    expect(l).toEqual(sol);
});     

it('should test for altAddTwoNumbers 3 numbers', function() {
    let l1 = ListNode(2, ListNode(4, ListNode(3)));
    let l2 = ListNode(5, ListNode(6, ListNode(4)));
    let sol = ListNode(7, ListNode(0, ListNode(8)));

    let l = altAddTwoNumbers(l1, l2);

    expect(l).toEqual(sol);
});

it('should test for altAddTwoNumbers [5] [5]', function() {
    let l1 = ListNode(5);
    let l2 = ListNode(5);
    let sol = ListNode(0, ListNode(1));

    let l = altAddTwoNumbers(l1, l2); 

    expect(l).toEqual(sol);
});

it('should test for altAddTwoNumbers [1, 8] [0]', function() {
    let l1 = ListNode(1, ListNode(8));
    let l2 = ListNode(0);
    let sol = ListNode(1, ListNode(8));

    let l = altAddTwoNumbers(l1, l2); 

    expect(l).toEqual(sol);
});


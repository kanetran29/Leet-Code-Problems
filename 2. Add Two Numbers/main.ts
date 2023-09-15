function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let head = new ListNode();
    let current = head;
    while (true) {
        let v1 = l1?.val ?? 0;
        let v2 = l2?.val ?? 0;
        current.val = v1 + v2 + carry;
        carry = Math.floor(current.val / 10);

        if(current.val > 9) {
            current.val -= 10;
        }

        if(l1) {
            l1 = l1.next;
        }

        if(l2) {
            l2 = l2.next;
        }
        
        if(!l1 && !l2) {
            if(carry !== 0) {
                current.next = new ListNode();
                current = current.next;
                current.val = carry;
            }
            break;
        }

        current.next = new ListNode();
        current = current.next;
    }
    return head;
};
class LinkedListNode {
    data: number;
    next: LinkedListNode | undefined;

    constructor (val:number, nextNode?:LinkedListNode) {
        this.data = val;
        this.next = nextNode;
    }

    print () {
        let n: LinkedListNode | undefined  = this;
        
        while (n !== undefined) {
            console.log(n.data);
            n = n.next;
        }
        
    }
}

let node1 = new LinkedListNode(5, undefined);
let node2 = new LinkedListNode(6, node1);
node2.print();
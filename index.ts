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

    copy () : LinkedListNode {
        return new LinkedListNode(this.data, undefined);
    }

    reversed () : LinkedListNode | undefined  {
        if (this.next === undefined) {
            return this;
        }
        else {
            let thisNodeCopy : LinkedListNode =  this.copy();
            let thisNode: LinkedListNode = this;
            while (thisNode.next !== undefined) {
                let next = thisNode.next;
                let nextNodeCopy = next.copy();
                nextNodeCopy.next = thisNodeCopy;
                thisNodeCopy = nextNodeCopy;
                thisNode = next;
            }
            return thisNodeCopy;
        }
    }
}
let node0 = new LinkedListNode(6, undefined);
let node1 = new LinkedListNode(5, node0);
let node2 = new LinkedListNode(4, node1);
node2.print();
node2.reversed()?.print();

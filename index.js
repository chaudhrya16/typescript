var _a;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(val, nextNode) {
        this.data = val;
        this.next = nextNode;
    }
    LinkedListNode.prototype.print = function () {
        var n = this;
        while (n !== undefined) {
            console.log(n.data);
            n = n.next;
        }
    };
    LinkedListNode.prototype.copy = function () {
        return new LinkedListNode(this.data, undefined);
    };
    LinkedListNode.prototype.reversed = function () {
        if (this.next === undefined) {
            return this;
        }
        else {
            var thisNodeCopy = this.copy();
            var thisNode = this;
            while (thisNode.next !== undefined) {
                var next = thisNode.next;
                var nextNodeCopy = next.copy();
                nextNodeCopy.next = thisNodeCopy;
                thisNodeCopy = nextNodeCopy;
                thisNode = next;
            }
            return thisNodeCopy;
        }
    };
    return LinkedListNode;
}());
var node0 = new LinkedListNode(6, undefined);
var node1 = new LinkedListNode(5, node0);
var node2 = new LinkedListNode(4, node1);
node2.print();
(_a = node2.reversed()) === null || _a === void 0 ? void 0 : _a.print();

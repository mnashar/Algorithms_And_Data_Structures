class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(newStackNode) {
        if (newStackNode.next) {
            newStackNode.next = null;
        }

        if (!this.top) {
            this.top = newStackNode;
            this.bottom = newStackNode;
        } else {
            const temp = this.top;
            this.top = newStackNode;
            this.top.next = temp;
        }
        return ++this.length;
    }

};


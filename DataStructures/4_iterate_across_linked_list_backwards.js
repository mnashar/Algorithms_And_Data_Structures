
function iterateAcrossLinkedListBackwards(linkedList) {
    const stack = new Stack();
    let current = linkedList.head;
    let result = '';

    while (current !== null) {
        stack.push(current);
        current = current.next;
    }

    while (stack.size() > 0) {
        if (stack.size() > 1) {
            result += `${(stack.pop().value)} -> `;
        } else {
            result += `${(stack.pop().value)}`;
        }
    }

    return result;
};


// ------------------------------------------------------
// A Stack serves as a very useful helper data structure!
// ------------------------------------------------------
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return temp.value;
    }

    size() {
        return this.length;
    }
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.maxValueStorage = [];
        this.minValueStorage = [];
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.minValueStorage.length || newNode.value <= this.minValueStorage[this.minValueStorage.length - 1].value) {
            this.minValueStorage.push(newNode);
        }

        if (!this.maxValueStorage.length || newNode.value >= this.maxValueStorage[this.maxValueStorage.length - 1].value) {
            this.maxValueStorage.push(newNode);
        }

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

        if (this.top.value === this.maxValueStorage[this.maxValueStorage.length - 1].value) {
            this.maxValueStorage.pop();
        }

        if (this.top.value === this.minValueStorage[this.minValueStorage.length - 1].value) {
            this.minValueStorage.pop();
        }

        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return temp;
    }

    size() {
        return this.length;
    }

    min() {
        return this.minValueStorage[this.minValueStorage.length - 1] || null;
    }

    max() {
        return this.maxValueStorage[this.maxValueStorage.length - 1] || null;
    }
};


exports.Node = Node;
exports.MinMaxStack = MinMaxStack;
const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        this.data = data;
        var node = new Node(this.data);
        
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        this.index = index;
        var current = this._head;
        //If index > length !!!!!!!!!!!!!!!
        if (this.index == 0) {
            // return this._head.data;
        } else if (this.index == this.length - 1) {
            current = this._tail;
            // return this._tail.data;
        } else {
            var count = 0;
            while (count < this.index) {
                current = current.next;
                count++;
            }
        }
        return current.data;
    }

    insertAt(index, data) {
        this.index = index;
        this.data = data;
        var current = this._head;

        if (this.index == 0) {
            this._head.data = this.data;
        } else if (this.index == this.length - 1) {
            this._tail.data = this.data;
        } else {
            var count = 0;
            while (count < this.index) {
                current = current.next;
                count++;
            }
            current.data = this.data;
        }
    }

    isEmpty() {
        return (this.length == 0);
    }

    clear() {

    }

    deleteAt(index) {
    }

    reverse() {
    }

    indexOf(data) {}
}

module.exports = LinkedList;

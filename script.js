// CREATING AN ARRAY FROM SCRATCH
class MyArray {
    data = {};
    length = 0;

    get(index) {
        this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        if(this.length < 1) return;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }

    delete(index) {
        const itemToDelete = this.data[index];
        this.shiftItems(index);
        return itemToDelete;
    }

    shiftItems(index) {
        //  loop through the array starting from index to delete and shift to the left
        // Thereby deleting the item at index
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        // Delete last item since it is not part of the loop
        delete this.data[this.length - 1]
        this.length--; 
    }
}

// const array = new MyArray();
// console.log(array)

// CREATING A HASHTABLE FROM SCRATCH

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    //  Hashing function
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
    }

    get(key) {
        let address = this._hash(key);
        const content = this.data[address];
        if (!content) return undefined;
        for (let i = 0; i < content.length; i++) {
            if (content[i][0] === key) {
                return content[i][1];
            }
        }
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }

    values() {
        const valuesArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                valuesArray.push(this.data[i][0][1])
            }
        }
        return valuesArray
    }
}

const myHashTable = new HashTable(20);
myHashTable.set('oranges', 10000);
myHashTable.set('grapes', 1000);

// console.log(myHashTable.values())

// CREATING A SINGLYLINKEDLIST

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const prevNode = this.traverseToIndex(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        if (index >= this.length) {
            throw new Error('Node does not exist')
        }
        const prevNode = this.traverseToIndex(index - 1);
        const nodeToDelete = prevNode.next;
        prevNode.next = nodeToDelete.next;
        this.length--;
    }

    traverseToIndex(index) {
        let i = 0;
        let currentNode = this.head;
        while(i !== index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}


// const mySinglyLinkedList = new SinglyLinkedList(10);
// mySinglyLinkedList.append(5);
// mySinglyLinkedList.prepend(1);
// mySinglyLinkedList.insert(2, 99);
// mySinglyLinkedList.remove(2);
// console.log(mySinglyLinkedList.printList());

class DoubleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new DoubleNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new DoubleNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            return this.prepend(value);
        }
        const newNode = new DoubleNode(value);
        const prevNode = this.traverseToIndex(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        if (index >= this.length) {
            throw new Error('Node does not exist')
        }
        const prevNode = this.traverseToIndex(index - 1);
        const nodeToDelete = prevNode.next;
        const nextNode = nodeToDelete.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
    }

    traverseToIndex(index) {
        let i = 0;
        let currentNode = this.head;
        while(i !== index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.remove(2);
console.log(myDoublyLinkedList);



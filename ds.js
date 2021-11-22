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

    reverse() {
        if (this.length === 1) return this.head;
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second) {
            const nextNode = second.next;
            // reversing the pointers backwards and moving the position of first and second forwards
            second.next = first;
            first = second;
            second = nextNode
        }
        // At this point the first is now the last node because the loop exits when second is now null
        // hence point the head to null since it's now the last node
        this.head.next = null;
        this.head = first;
        return this;
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


const mySinglyLinkedList = new SinglyLinkedList(10);
// mySinglyLinkedList.append(5);
// mySinglyLinkedList.prepend(1);
// mySinglyLinkedList.insert(2, 99);
// mySinglyLinkedList.remove(2);
// mySinglyLinkedList.reverse();
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

// const myDoublyLinkedList = new DoublyLinkedList(10);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.prepend(1);
// myDoublyLinkedList.insert(2, 99);
// myDoublyLinkedList.remove(2);
// console.log(myDoublyLinkedList);



// ----- STACKS USING LINKED LIST-----------

class Stack {
    top = null;
    bottom = null;
    length = 0;

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }else {
            const prevTop = this.top;
            this.top = newNode;
            this.top.next = prevTop;
        }
        this.length++
        return this;
    }

    pop() {
        if(!this.top) return null;
        if(this.length === 1) this.bottom = null;
        //  keep reference to previous top so it is not garbage collected.
        const prevTop = this.top
        this.top = this.top.next;
        this.length--;
        return prevTop;
    }

    isEmpty() {

    }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Youtube');
myStack.pop();
// console.log(myStack);

// ----- STACKS USING Array-----------

class StackArray {
    data = [];

    peek() {
        return this.data[this.data.length - 1];
    }

    // N/B  elements are inserted and removed from same end(top) in Stack
    push(value) {
        this.data.unshift(value);
        return this.data;
    }

    pop() {
        return this.data.shift();
    }
}

const myArrayStack = new StackArray();
myArrayStack.push('Google');
myArrayStack.push('Udemy');
myArrayStack.push('Youtube');
myArrayStack.pop();
// console.log(myArrayStack);

// ----- QUEUEs USING LINKED LIST-----------

class Queue {
    first = null;
    last = null;
    length = 0;

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }else {
            // adding to the queue/ last node
            this.last.next = newNode ;
            this.last = newNode;
        }
        this.length++
        return this;
    }

    dequeue() {
        if(!this.first) return null;
        if(this.length === 1) this.last = null;
        //  keep reference to previous so it is not garbage collected.
        const prev = this.first;
        this.first = this.first.next;
        this.length--;
        return prev;
    }
}

const myQueue = new Queue();
myQueue.enqueue('Google')
myQueue.enqueue('Udemy')
myQueue.enqueue('Youtube');
myQueue.dequeue();
// console.log(myQueue);

//  ----- QUEUE USING STACKS(ARRAY)
class StackQueue {
    s1 = [];
    s2 = [];

    peek() {
        while(this.s1.length !== 0){
            this.s2.push(this.s1.pop());
        }
        var pop = this.s2.pop();
        this.s1.push(pop);
        while(this.s2.length !== 0){
            this.s1.push(this.s2.pop());
        }
        return pop;
    }

    enqueue(value) {
        this.s1.push(value);
    }

    dequeue() {
        // N/B  elements are inserted from rear and removed from front in Queue
        while(this.s1.length !== 0){
            this.s2.push(this.s1.pop());
        }
        const pop = this.s2.pop();
        while(this.s2.length !== 0){
            this.s1.push(this.s2.pop());
        }
        return pop;
    }
}

const myStackQueue = new StackQueue();
myStackQueue.enqueue('Google');
myStackQueue.enqueue('Udemy');
myStackQueue.enqueue('Youtube');
myStackQueue.dequeue();
myStackQueue.dequeue();
// myStackQueue.dequeue();
// console.log(myStackQueue);

// ----------------BINARY SEARCH TREE-----------------

class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BSTNode(value);
        if (this.root === null) {
            this.root = newNode;
        }else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                }
                if(value > currentNode.value) {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if(!this.root) return false;
        let currentNode = this.root;
        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            }else if(value > currentNode.value) {
                currentNode = currentNode.right;
            }else {
                return currentNode;
            }
        }
        return null;
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let data = [];
        let queue = []; // to keep track of nodes to be visited
        queue.push(currentNode);
        while(queue.length) {
            currentNode = queue.shift();
            data.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return data; 
    }

    breadthFirstSearchR(queue, data) {
        if(!queue.length) return data;
        const currentNode = queue.shift();
        data.push(currentNode.value);
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
        return this.breadthFirstSearchR(queue, data);
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(2));
console.log(tree.breadthFirstSearchR([tree.root], []));

function traverse(node) {
    const tree =  { value: node.value }
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");

// myGraph.showConnections();
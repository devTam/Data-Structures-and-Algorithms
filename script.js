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

console.log(myHashTable.values())



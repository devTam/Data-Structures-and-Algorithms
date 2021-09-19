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

const array = new MyArray();
console.log(array)
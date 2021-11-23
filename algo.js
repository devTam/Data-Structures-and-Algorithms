// ----- Find factorial ------->
const findFactorialRecursion = (num) => {
    if (num === 2) {
        return num;
    }
    return num * findFactorialRecursion(num - 1);
}

const findFactorialIteration = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

// ----- Return index value of a fibonacci ------->
const fiboRecursion = (num) => {
    if (num < 2) {
        return num;
    }
    return fiboRecursion(num - 1) + fiboRecursion(num - 2); 
}

const fiboIteration = (num) => {
    let fibo = [0, 1];
    for (let i = 2; i < num + 1; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[num];
}

// ----- Memoized fibonacci DYNAMIC PROGRAMMING ------->
const memoizedFibo = () => {
    let cache = {};
    return function fib(num) {
        if (num in cache) {
            return cache[num];
        } else {
            if (num < 2) {
                return num;
            }else {
                cache[num] = fib(num - 1) + fib(num - 2);
                return cache[num];
            }
        }
    }
}

const fasterFib = memoizedFibo();
console.log(fasterFib(2));
console.log(fiboIteration(2));

// ----- Bubble Sort ------->
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// ----- Selection Sort ------->
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// ----- insertion Sort ------->
const numbers = [5, 2, 4, 6, 1, 3, 99];

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// ----- merge Sort ------->
const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

// ----- quick Sort ------->

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

// console.log(quickSort(numbers));

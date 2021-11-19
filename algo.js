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
    if (num === 1) {
        return 0;
    }
    if (num === 2) {
        return 1;
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

console.log(fiboIteration(3));
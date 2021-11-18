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

console.log(findFactorialIteration(5));
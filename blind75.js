// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Time Complexity: O(n)
// Space Complexity: O(n)   
// Using Maps
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Using Objects
const twoSum2 = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
}

// 2. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Time Complexity: O(n)
// Space Complexity: O(1)
const maxProfit = (prices) => {
    let buy = 0;
    let sell = 1;
    let maxProfit = 0;
    while(sell < prices.length) { 
        if(prices[sell] < prices[buy]) {
            buy = sell
        }else {
            const profit = prices[sell] - prices[buy];
            if(profit > maxProfit) {
                maxProfit = profit
            }
        }
        sell++
    }
    return maxProfit;
}  

//3. 4 by 4 matrix star pattern

const starPattern1 = (n) => {
    for(let i = 1; i <= n; i++) {
        let row = "";
        for(let j = 1; j <= i; j++) {
            row += `${j} `;
        }
        console.log(row);
    }
}

const starPattern2 = (n) => {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < n-i; j++) {
            row += `${j+1} `;
        }
        console.log(row);
    }
}

const treePattern = (n) => {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < n-i-1; j++) {
            row += " ";
        }
        for(let j = 0; j < 2*i+1; j++) {
            row += "*";
        }
        for(let j = 0; j < n-i-1; j++) {
            row += " ";
        }
        console.log(row);
    }
}

treePattern(3);




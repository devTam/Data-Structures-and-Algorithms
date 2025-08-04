// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Time Complexity: O(n)
// Space Complexity: O(n)
// Using Maps
const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  return []
}

// Using Objects
const twoSum2 = (nums, target) => {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map[complement] !== undefined) {
      return [map[complement], i]
    }
    map[nums[i]] = i
  }
  return []
}

// 2. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Time Complexity: O(n)
// Space Complexity: O(1)
const maxProfit = (prices) => {
  let buy = 0
  let sell = 1
  let maxProfit = 0
  while (sell < prices.length) {
    if (prices[sell] < prices[buy]) {
      buy = sell
    } else {
      const profit = prices[sell] - prices[buy]
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
    sell++
  }
  return maxProfit
}

//3. 4 by 4 matrix patterns

const starPattern1 = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
      row += `${j} `
    }
    console.log(row)
  }
}

const starPattern2 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n - i; j++) {
      row += `${j + 1} `
    }
    console.log(row)
  }
}

const treePattern1 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n - i - 1; j++) {
      row += " "
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*"
    }
    for (let j = 0; j < n - i - 1; j++) {
      row += " "
    }
    console.log(row)
  }
}

const treePattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < i; j++) {
      row += " "
    }
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      row += "*"
    }
    for (let j = 0; j < i; j++) {
      row += " "
    }
    console.log(row)
  }
}

//4. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Time Complexity: O(n)
// Space Complexity: O(n)
const containsDuplicate = (nums) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true
    }
    map.set(nums[i], i)
  }
  return false
}

//5. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Time Complexity: O(n)
// Space Complexity: O(n)

const productOfArrayExceptSelf = (nums) => {
  const result = new Array(nums.length).fill(1)
  let prefix = 1
  let suffix = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix
    suffix *= nums[i]
  }
  return result
}

//6. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Time Complexity: O(n)
// Space Complexity: O(1)

const maxSubArray = (nums) => {
  let maxSum = nums[0]
  let currentSum = 0
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]
    if (currentSum > maxSum) {
      maxSum = currentSum
    }
    if (currentSum < 0) {
      currentSum = 0
    }
  }
}

//7. count digits that divide number
// Given an integer n, return the number of digits that divide n.
// A digit divides n if it is a divisor of n.

// Time Complexity: O(n)
// Space Complexity: O(1)

const countDigits = (n) => {
  let count = 0
  let num = n
  while (num > 0) {
    let digit = num % 10
    if (digit !== 0 && n % digit === 0) {
      count++
    }
    num = Math.floor(num / 10)
  }
  return count
}

//8. Reverse string
// Given an array of characters, reverse the array

// Time Complexity: O(n)
// Space Complexity: O(1)

const reverseString = (s) => {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    ;[s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
}

//9. Reverse vowels
// Given a string s, reverse the vowels in the string.

// Time Complexity: O(n)
// Space Complexity: O(1)

const reverseVowels = (s) => {
  const vowels = "aeiouAEIOU"
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (vowels.includes(s[left]) && vowels.includes(s[right])) {
      ;[s[left], s[right]] = [s[right], s[left]]
    }
    if (!vowels.includes(s[left])) {
      left++
    }
    if (!vowels.includes(s[right])) {
      right--
    }
  }
  return s
}

//10. Given an integer x, return true if x is a palindrome, and false otherwise.

// Time Complexity: O(n)
// Space Complexity: O(1)

const isPalindrome = (x) => {
  let num = x
  let reversed = 0
  while (num > 0) {
    reversed = reversed * 10 + (num % 10)
    num = Math.floor(num / 10)
  }
  return reversed === x
}

//11. Valid palindrome
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Time Complexity: O(n)
// Space Complexity: O(1)

const isPalindrome2 = (s) => {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")
  let left = 0
  let right = cleaned.length - 1
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

//12. Maximum product subarray
const maxProduct = (nums) => {
  let result = Math.max(...nums)
  let currentMin = 1
  let currentMax = 1
  for (let i = 0; i < nums.length; i++) {
    let temp = currentMax * nums[i]
    currentMax = Math.max(nums[i], temp, currentMin * nums[i])
    currentMin = Math.min(nums[i], temp, currentMin * nums[i])
    result = Math.max(result, currentMax)
  }
  return result
}

//13. Euclidean algorithm
// Given two integers a and b, return the greatest common divisor of a and b.

// Time Complexity: O(log(min(a, b)))
// Space Complexity: O(1)

const gcd = (a, b) => {
    while(a > 0 && b > 0) {
        if(a > b) {
            a = a % b
        } else {
            b = b % a
        }
    }
    return a === 0 ? b : a
}




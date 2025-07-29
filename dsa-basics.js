/*
// ============================================
// DATA STRUCTURES AND ALGORITHMS BASICS IN JS
// ============================================

console.log("🚀 Starting DSA Practice Session!");

// ============================================
// 1. ARRAYS - Basic Operations
// ============================================

console.log("\n📚 1. ARRAY OPERATIONS");

// Array creation and basic operations
let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// Adding elements
numbers.push(6);  // Add to end
numbers.unshift(0);  // Add to beginning
console.log("After adding:", numbers);

// Removing elements
let lastElement = numbers.pop();  // Remove from end
let firstElement = numbers.shift();  // Remove from beginning
console.log("Removed:", firstElement, lastElement);
console.log("After removing:", numbers);

// Array traversal
console.log("Traversing array:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

// Array methods practice
let doubled = numbers.map(num => num * 2);
let evens = numbers.filter(num => num % 2 === 0);
let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Doubled:", doubled);
console.log("Even numbers:", evens);
console.log("Sum:", sum);

// ============================================
// 2. STRINGS - Basic Operations
// ============================================

console.log("\n📝 2. STRING OPERATIONS");

let text = "Hello World";
console.log("Original string:", text);
console.log("Length:", text.length);
console.log("Uppercase:", text.toUpperCase());
console.log("Character at index 6:", text[6]);

// String reversal (common interview question)
function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseStringManual(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log("Reversed (built-in):", reverseString(text));
console.log("Reversed (manual):", reverseStringManual(text));

// Check if string is palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));

// ============================================
// 3. OBJECTS - Basic Operations
// ============================================

console.log("\n🗂️ 3. OBJECT OPERATIONS");

// Object creation and manipulation
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log("Person object:", person);
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Adding and modifying properties
person.email = "john@example.com";
person.age = 31;
console.log("Updated person:", person);

// Object methods
console.log("Object keys:", Object.keys(person));
console.log("Object values:", Object.values(person));
console.log("Object entries:", Object.entries(person));

// ============================================
// 4. BASIC ALGORITHMS - Searching
// ============================================

console.log("\n🔍 4. SEARCHING ALGORITHMS");

// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Binary Search (for sorted arrays)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log("Sorted array:", sortedArray);
console.log("Linear search for 7:", linearSearch(sortedArray, 7));
console.log("Binary search for 7:", binarySearch(sortedArray, 7));
console.log("Binary search for 6:", binarySearch(sortedArray, 6));

// ============================================
// 5. BASIC ALGORITHMS - Sorting
// ============================================

console.log("\n🔄 5. SORTING ALGORITHMS");

// Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    let sortedArr = [...arr]; // Create a copy
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Swap elements
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
            }
        }
    }
    return sortedArr;
}

// Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    let sortedArr = [...arr]; // Create a copy
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (sortedArr[j] < sortedArr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [sortedArr[i], sortedArr[minIndex]] = [sortedArr[minIndex], sortedArr[i]];
        }
    }
    return sortedArr;
}

let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", unsortedArray);
console.log("Bubble sort result:", bubbleSort(unsortedArray));
console.log("Selection sort result:", selectionSort(unsortedArray));
console.log("Built-in sort result:", [...unsortedArray].sort((a, b) => a - b));

// ============================================
// 6. TIME COMPLEXITY EXAMPLES
// ============================================

console.log("\n⏰ 6. TIME COMPLEXITY EXAMPLES");

// O(1) - Constant time
function getFirstElement(arr) {
    return arr[0];
}

// O(n) - Linear time
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// O(n²) - Quadratic time
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

let testArray = [1, 2, 3, 2, 4, 3, 5];
console.log("Test array:", testArray);
console.log("First element (O(1)):", getFirstElement(testArray));
console.log("Max element (O(n)):", findMax(testArray));
console.log("Duplicates (O(n²)):", findDuplicates(testArray));

// ============================================
// 7. PRACTICE PROBLEMS
// ============================================

console.log("\n💪 7. PRACTICE PROBLEMS");

// Problem 1: Find the second largest number in an array
function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    
    return secondLargest === -Infinity ? null : secondLargest;
}

// Problem 2: Count frequency of elements
function countFrequency(arr) {
    let frequency = {};
    for (let element of arr) {
        frequency[element] = (frequency[element] || 0) + 1;
    }
    return frequency;
}

// Problem 3: Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Problem 4: Find missing number in sequence
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

let practiceArray = [3, 7, 1, 9, 4, 7, 3];
console.log("Practice array:", practiceArray);
console.log("Second largest:", findSecondLargest(practiceArray));
console.log("Frequency count:", countFrequency(practiceArray));
console.log("Remove duplicates:", removeDuplicates(practiceArray));

let sequenceArray = [1, 2, 4, 5, 6]; // Missing 3
console.log("Sequence with missing number:", sequenceArray);
console.log("Missing number:", findMissingNumber(sequenceArray, 6));

// ============================================
// 8. NEXT STEPS & CHALLENGES
// ============================================

console.log("\n🎯 8. CHALLENGES TO TRY");
console.log("Try implementing these on your own:");
console.log("1. Implement a Stack class with push, pop, peek, isEmpty methods");
console.log("2. Implement a Queue class with enqueue, dequeue, front, isEmpty methods");
console.log("3. Write a function to check if parentheses are balanced: '(())'");
console.log("4. Implement merge sort algorithm");
console.log("5. Find the longest common subsequence between two strings");
console.log("6. Implement a simple hash table");
console.log("7. Write a function to detect cycles in an array");


// ============================================
// 9. ARRAY PRACTICE EXERCISES
// ============================================

console.log("\n🎯 ARRAY PRACTICE EXERCISES");
console.log("Try to solve these problems step by step!");
console.log("Don't look at the examples above - practice from scratch!\n");

// EXERCISE 1: Basic Array Manipulation
console.log("📝 EXERCISE 1: Basic Array Manipulation");
console.log("Given array: [10, 20, 30, 40, 50]");
console.log("Tasks:");
console.log("a) Add 60 to the end");
console.log("b) Add 5 to the beginning");
console.log("c) Remove the last element");
console.log("d) Remove the first element");
console.log("e) Find the length of the final array");
console.log("Write your solution below:\n");

// Your solution for Exercise 1:
let arr1 = [10, 20, 30, 40, 50];
// Write your code here...
console.log("EXERCISE 01 - MY ANSWERS")

arr1.push(60);
console.log("a) " + arr1);

arr1.unshift(5);
console.log("b) " + arr1);

arr1.pop();
console.log("c) " + arr1);

arr1.shift();
console.log("d) " + arr1);

console.log("e) " + arr1.length + " elements.");

// EXERCISE 2: Array Methods Practice
console.log("📝 EXERCISE 2: Array Methods Practice");
console.log("Given array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
console.log("Tasks:");
console.log("a) Create a new array with all numbers multiplied by 3");
console.log("b) Create a new array with only odd numbers");
console.log("c) Find the sum of all numbers");
console.log("d) Find the product of all numbers");
console.log("e) Check if all numbers are positive");
console.log("f) Check if any number is greater than 8");
console.log("Write your solution below:\n");
*/
// Your solution for Exercise 2:
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write your code here...
console.log("EXERCISE 02 - MY ANSWERS");

console.log("a) " + arr2.map((array) => array * 3));
console.log("b) " + arr2.filter(n => n % 2 !== 0));
console.log("c) " + arr2.reduce((acc, curr) => acc + curr, 0));
console.log("d) " + arr2.reduce((acc, curr) => acc * curr));
console.log("e) " + arr2.every(n => n > 0));
console.log("f) " + arr2.some(n => n > 8));

/*
// EXERCISE 3: Array Search and Find
console.log("📝 EXERCISE 3: Array Search and Find");
console.log("Given array: ['apple', 'banana', 'cherry', 'date', 'elderberry']");
console.log("Tasks:");
console.log("a) Find the index of 'cherry'");
console.log("b) Check if 'grape' exists in the array");
console.log("c) Find the first fruit that starts with 'e'");
console.log("d) Find all fruits that contain the letter 'a'");
console.log("e) Get the last 3 fruits from the array");
console.log("Write your solution below:\n");

// Your solution for Exercise 3:
// let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// Write your code here...


// EXERCISE 4: Array Transformation
console.log("📝 EXERCISE 4: Array Transformation");
console.log("Given array: [1, 4, 9, 16, 25, 36]");
console.log("Tasks:");
console.log("a) Convert each number to its square root");
console.log("b) Convert the array to strings and join with ' -> '");
console.log("c) Reverse the array without using reverse() method");
console.log("d) Sort the array in descending order");
console.log("Write your solution below:\n");

// Your solution for Exercise 4:
// let squares = [1, 4, 9, 16, 25, 36];
// Write your code here...


// EXERCISE 5: Advanced Array Problems
console.log("📝 EXERCISE 5: Advanced Array Problems");
console.log("Tasks:");
console.log("a) Given [1, 2, 2, 3, 4, 4, 5], remove all duplicates");
console.log("b) Given [5, 2, 8, 1, 9], find the second smallest number");
console.log("c) Given [1, 3, 5, 7, 9], insert 6 at the correct position to keep it sorted");
console.log("d) Given [[1, 2], [3, 4], [5, 6]], flatten it to [1, 2, 3, 4, 5, 6]");
console.log("e) Given [1, 2, 3, 4, 5], create chunks of size 2: [[1, 2], [3, 4], [5]]");
console.log("Write your solution below:\n");

// Your solution for Exercise 5:
// Write your code here...


// EXERCISE 6: Real-world Scenarios
console.log("📝 EXERCISE 6: Real-world Scenarios");
console.log("Tasks:");
console.log("a) Student grades: [85, 92, 78, 96, 87]");
console.log("   - Calculate average grade");
console.log("   - Find how many students passed (grade >= 80)");
console.log("   - Convert to letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)");
console.log("");
console.log("b) Shopping cart: [{name: 'apple', price: 1.5, qty: 3}, {name: 'banana', price: 0.8, qty: 5}]");
console.log("   - Calculate total cost");
console.log("   - Find the most expensive item");
console.log("   - Add a new item: {name: 'orange', price: 2.0, qty: 2}");
console.log("");
console.log("c) User ages: [25, 34, 18, 45, 23, 67, 29, 31]");
console.log("   - Group users by age ranges: teens (13-19), twenties (20-29), etc.");
console.log("   - Find users eligible to vote (age >= 18)");
console.log("Write your solution below:\n");

// Your solution for Exercise 6:
// Write your code here...


// EXERCISE 7: Algorithm Implementation
console.log("📝 EXERCISE 7: Algorithm Implementation");
console.log("Implement these algorithms from scratch (don't use built-in methods):");
console.log("a) Find maximum value in array");
console.log("b) Find minimum value in array");
console.log("c) Check if array is sorted in ascending order");
console.log("d) Rotate array to the right by n positions");
console.log("e) Find the intersection of two arrays");
console.log("Write your solution below:\n");

// Your solution for Exercise 7:
// Write your code here...


console.log("\n✅ DSA Basics Practice Complete!");
console.log("🎯 Now try the array exercises above!");
console.log("Ask me for hints or solutions when you're ready!");
console.log("Keep practicing and happy coding! 🚀");
*/

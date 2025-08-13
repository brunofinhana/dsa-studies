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
// STRING EXERCISES - Practice Problems
// ============================================

console.log("\n🎯 STRING MANIPULATION EXERCISES");
console.log("Practice these string problems step by step!\n");

// EXERCISE 1: Basic String Operations
console.log("📝 EXERCISE 1: Basic String Operations");
console.log("Given string: 'JavaScript Programming'");
console.log("Tasks:");
console.log("a) Convert to lowercase");
console.log("b) Convert to uppercase");
console.log("c) Get the length of the string");
console.log("d) Get the character at index 5");
console.log("e) Get the last character");
console.log("f) Check if it contains 'Script'");
console.log("g) Replace 'JavaScript' with 'Python'");
console.log("Write your solution below:\n");

// Your solution for Exercise 1:
let str1 = 'JavaScript Programming';

console.log("My answers - Exercise 01");

console.log("a) " + str1.toLowerCase());
console.log("b) " + str1.toUpperCase());
console.log("c) length: " + str1.length);
console.log("d) index 5 = " + str1[5]);
console.log("e) last character = " + str1[str1.length - 1]);
console.log("f) Includes 'script'? = " + str1.includes('Script'));
console.log("g) " + str1.replace("JavaScript", "Python"));
console.log();

console.log("EXERCISE 1 - STRING OPERATIONS");
console.log("a) Lowercase:", str1.toLowerCase());
console.log("b) Uppercase:", str1.toUpperCase());
console.log("c) Length:", str1.length);
console.log("d) Character at index 5:", str1[5]);
console.log("e) Last character:", str1[str1.length - 1]);
console.log("f) Contains 'Script':", str1.includes('Script'));
console.log("g) Replace JavaScript:", str1.replace('JavaScript', 'Python'));
console.log();
// EXERCISE 2: String Splitting and Joining
console.log("📝 EXERCISE 2: String Splitting and Joining");
console.log("Given string: 'apple,banana,cherry,date'");
console.log("Tasks:");
console.log("a) Split into an array of fruits");
console.log("b) Join the array back with ' | ' separator");
console.log("c) Split by 'a' character");
console.log("d) Get the first word only");
console.log("e) Get the last word only");
console.log("Write your solution below:\n");

// Your solution for Exercise 2:
let fruits = 'apple,banana,cherry,date';

console.log("My answers - Exercise 02");

console.log("a) ", fruits.split(','));
console.log("b) " + fruits.split(',').join(" | "));
console.log("c) " + fruits.split('a'));
console.log("d) " + fruits.split(',')[0]);
console.log("e) " + fruits.split(',').slice(-1)[0]);
console.log("EXERCISE 2 - STRING SPLITTING/JOINING");
console.log("a) Split by comma:", fruits.split(','));
console.log("b) Join with |:", fruits.split(',').join(' | '));
console.log("c) Split by 'a':", fruits.split('a'));
console.log("d) First word:", fruits.split(',')[0]);
console.log("e) Last word:", fruits.split(',').slice(-1)[0]);
console.log();

// EXERCISE 3: String Search and Index
console.log("📝 EXERCISE 3: String Search and Index");
console.log("Given string: 'The quick brown fox jumps over the lazy dog'");
console.log("Tasks:");
console.log("a) Find the index of 'fox'");
console.log("b) Find the last index of 'the'");
console.log("c) Check if it starts with 'The'");
console.log("d) Check if it ends with 'dog'");
console.log("e) Extract substring from index 10 to 15");
console.log("f) Extract the word 'brown' using substring methods");
console.log("Write your solution below:\n");

// Your solution for Exercise 3:
let sentence = 'The quick brown fox jumps over the lazy dog';
console.log("a) ", sentence.indexOf("fox"));
console.log("b) ", sentence.lastIndexOf('the'));
console.log("c) ", sentence.startsWith('The'));
console.log("d) ", sentence.endsWith('dog'));
console.log("e) ", sentence.substring(10, 15));
console.log("f) ", sentence.substring(10, 15));
console.log("EXERCISE 3 - STRING SEARCH/INDEX");
console.log("a) Index of 'fox':", sentence.indexOf('fox'));
console.log("b) Last index of 'the':", sentence.lastIndexOf('the'));
console.log("c) Starts with 'The':", sentence.startsWith('The'));
console.log("d) Ends with 'dog':", sentence.endsWith('dog'));
console.log("e) Substring 10-15:", sentence.substring(10, 15));
console.log("f) Extract 'brown':", sentence.substring(10, 15));
console.log();
*/

// EXERCISE 4: String Validation and Patterns
console.log("📝 EXERCISE 4: String Validation and Patterns");
console.log("Tasks:");
console.log("a) Check if 'abc123' contains only alphanumeric characters");
console.log("b) Count vowels in 'programming'");
console.log("c) Count consonants in 'javascript'");
console.log("d) Check if 'A man a plan a canal Panama' is a palindrome (ignore spaces/case)");
console.log("e) Find the longest word in 'The quick brown fox'");
console.log("Write your solution below:\n");

// Your solution for Exercise 4:
console.log("EXERCISE 4 - STRING VALIDATION/PATTERNS");

// Exercise a
function isAlphanumeric(myString) {
    let result = /^[a-zA-Z-0-9]+$/.test(myString);

    if(result === true) {
        return ("\"" + myString + "\"" + " is alphanumeric")
    } else {
        return ("\"" + myString + "\"" + " is not alphanumeric")
    }
}
console.log("a) ", isAlphanumeric("abc123"))

// Exercise b
function countVowels(str) {
    let numVowels =  str.toLowerCase().match(/[aeiou]/g)?.length || 0
    return "\"" + str + "\"" + " has " + numVowels + " vowels."
}
console.log("b) ", countVowels("programming"))

// Exercise c
function countConsonants(myStr) {
    let numConsonants = myStr.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g)?.length || 0
    return "\"" + myStr + "\"" + " has " + numConsonants + " consonants."
}
console.log("c) ", countConsonants("JavaScript"))

// Exercise d
function isPalindrome(aStr) {
    let formatedStr = aStr.toLowerCase().replace(/[^a-z]/g, "")
    let reversedStr = formatedStr.split('').reverse().join('')
    if(formatedStr === reversedStr) {
        return "It is a palindrome"
    } else {
        return "Fool you"
    }
}
console.log('d) ', isPalindrome("A man a plan a canal Panama"));

// Exercise e
function findLongestWord(aString) {
    const words = aString.split(' ')
    let longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest)

    return "The longest word is: \"" + longestWord + "\""
}
console.log('e) ', findLongestWord("The quick brown fox is lightning fast"))

/*
// a) Alphanumeric check
function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}
console.log("a) 'abc123' is alphanumeric:", isAlphanumeric('abc123'));

// b) Count vowels
function countVowels(str) {
    return str.toLowerCase().match(/[aeiou]/g)?.length || 0;
}
console.log("b) Vowels in 'programming':", countVowels('programming'));

// c) Count consonants
function countConsonants(str) {
    return str.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g)?.length || 0;
}
console.log("c) Consonants in 'javascript':", countConsonants('javascript'));

// d) Palindrome check (ignore spaces/case)
function isPalindromeAdvanced(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
console.log("d) 'A man a plan a canal Panama' is palindrome:", isPalindromeAdvanced('A man a plan a canal Panama'));

// e) Longest word
function findLongestWord(str) {
    const words = str.split(' ');
    return words.reduce((longest, current) => current.length > longest.length ? current : longest);
}
console.log("e) Longest word in 'The quick brown fox':", findLongestWord('The quick brown fox'));
console.log();

// EXERCISE 5: String Transformation
console.log("📝 EXERCISE 5: String Transformation");
console.log("Tasks:");
console.log("a) Convert 'hello world' to title case: 'Hello World'");
console.log("b) Convert 'camelCase' to 'snake_case'");
console.log("c) Convert 'snake_case' to 'camelCase'");
console.log("d) Reverse words in 'hello world javascript' -> 'javascript world hello'");
console.log("e) Remove all whitespace from '  hello   world  '");
console.log("f) Add padding: center 'hello' in a string of length 10 with '*'");
console.log("Write your solution below:\n");

// Your solution for Exercise 5:
console.log("EXERCISE 5 - STRING TRANSFORMATION");

// a) Title case
function toTitleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log("a) Title case:", toTitleCase('hello world'));

// b) camelCase to snake_case
function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}
console.log("b) camelCase to snake_case:", camelToSnake('camelCase'));

// c) snake_case to camelCase
function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}
console.log("c) snake_case to camelCase:", snakeToCamel('snake_case'));

// d) Reverse words
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
console.log("d) Reverse words:", reverseWords('hello world javascript'));

// e) Remove all whitespace
function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}
console.log("e) Remove whitespace:", `'${removeWhitespace('  hello   world  ')}'`);

// f) Center padding
function centerPad(str, length, char) {
    if (str.length >= length) return str;
    const padding = length - str.length;
    const leftPad = Math.floor(padding / 2);
    const rightPad = padding - leftPad;
    return char.repeat(leftPad) + str + char.repeat(rightPad);
}
console.log("f) Center padding:", centerPad('hello', 10, '*'));
console.log();

// EXERCISE 6: Advanced String Problems
console.log("📝 EXERCISE 6: Advanced String Problems");
console.log("Tasks:");
console.log("a) Find all unique characters in 'programming'");
console.log("b) Find the first non-repeating character in 'aabbcc'");
console.log("c) Check if two strings are anagrams: 'listen' and 'silent'");
console.log("d) Generate all permutations of 'abc'");
console.log("e) Find the most frequent character in 'hello world'");
console.log("f) Compress string: 'aaabbbccc' -> 'a3b3c3'");
console.log("Write your solution below:\n");

// Your solution for Exercise 6:
console.log("EXERCISE 6 - ADVANCED STRING PROBLEMS");

// a) Unique characters
function getUniqueChars(str) {
    return [...new Set(str.split(''))];
}
console.log("a) Unique chars in 'programming':", getUniqueChars('programming'));

// b) First non-repeating character
function firstNonRepeating(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) return char;
    }
    return null;
}
console.log("b) First non-repeating in 'aabbcc':", firstNonRepeating('aabbcc'));

// c) Anagram check
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log("c) 'listen' and 'silent' are anagrams:", areAnagrams('listen', 'silent'));

// d) Permutations (simple version for short strings)
function getPermutations(str) {
    if (str.length <= 1) return [str];
    const perms = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        const innerPerms = getPermutations(remaining);
        for (let perm of innerPerms) {
            perms.push(char + perm);
        }
    }
    return perms;
}
console.log("d) Permutations of 'abc':", getPermutations('abc'));

// e) Most frequent character
function mostFrequentChar(str) {
    const charCount = {};
    let maxCount = 0;
    let maxChar = '';
    
    for (let char of str) {
        if (char !== ' ') { // Skip spaces
            charCount[char] = (charCount[char] || 0) + 1;
            if (charCount[char] > maxCount) {
                maxCount = charCount[char];
                maxChar = char;
            }
        }
    }
    return maxChar;
}
console.log("e) Most frequent char in 'hello world':", mostFrequentChar('hello world'));

// f) String compression
function compressString(str) {
    let compressed = '';
    let count = 1;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed;
}
console.log("f) Compress 'aaabbbccc':", compressString('aaabbbccc'));
console.log();

// EXERCISE 7: String and Array Combination
console.log("📝 EXERCISE 7: String and Array Combination");
console.log("Tasks:");
console.log("a) Sort characters in 'javascript' alphabetically");
console.log("b) Find common characters between 'hello' and 'world'");
console.log("c) Group anagrams: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log("d) Find the shortest word in: ['programming', 'is', 'fun', 'and', 'challenging']");
console.log("e) Create acronym from: 'Hypertext Markup Language'");
console.log("Write your solution below:\n");

// Your solution for Exercise 7:
console.log("EXERCISE 7 - STRING AND ARRAY COMBINATION");

// a) Sort characters
function sortCharacters(str) {
    return str.split('').sort().join('');
}
console.log("a) Sort 'javascript' chars:", sortCharacters('javascript'));

// b) Common characters
function findCommonChars(str1, str2) {
    const set1 = new Set(str1.split(''));
    const set2 = new Set(str2.split(''));
    return [...set1].filter(char => set2.has(char));
}
console.log("b) Common chars in 'hello' and 'world':", findCommonChars('hello', 'world'));

// c) Group anagrams
function groupAnagrams(words) {
    const groups = {};
    for (let word of words) {
        const sorted = word.split('').sort().join('');
        if (!groups[sorted]) groups[sorted] = [];
        groups[sorted].push(word);
    }
    return Object.values(groups);
}
console.log("c) Group anagrams:", groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

// d) Shortest word
function findShortestWord(words) {
    return words.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
}
console.log("d) Shortest word:", findShortestWord(['programming', 'is', 'fun', 'and', 'challenging']));

// e) Create acronym
function createAcronym(phrase) {
    return phrase.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log("e) Acronym for 'Hypertext Markup Language':", createAcronym('Hypertext Markup Language'));
console.log();

console.log("🎯 BONUS CHALLENGES:");
console.log("1. Implement a function to find the longest palindromic substring");
console.log("2. Create a function that validates email addresses using string methods");
console.log("3. Build a simple word frequency counter for a paragraph");
console.log("4. Implement a basic string encryption/decryption function");
console.log("5. Create a function that formats phone numbers: '1234567890' -> '(123) 456-7890'");
console.log();

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
console.log();

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

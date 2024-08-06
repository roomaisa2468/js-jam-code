/////////////////////////////ques : 1
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}
let smallArray = [1, 2, 3, 4, 5];
console.log("Original small array:", smallArray);
console.log("Reversed small array:", reverseArray(smallArray));
let largeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Original large array:", largeArray);
console.log("Reversed large array:", reverseArray(largeArray));

/////////////////////////////ques : 2

function filterNegativeNumbers(arr) {
    return arr.filter(number => number >= 0);
}
var testArray = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log("Original array:", testArray);
console.log("Filtered array:", filterNegativeNumbers(testArray));
let positiveArray = [10, 20, 30, 40, 50];
console.log("Original positive array:", positiveArray);
console.log("Filtered positive array:", filterNegativeNumbers(positiveArray));
let negativeArray = [-1, -2, -3, -4, -5];
console.log("Original negative array:", negativeArray);
console.log("Filtered negative array:", filterNegativeNumbers(negativeArray));

/////////////////////////////ques : 3

function countVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    for (let char of str) {
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}
var testString1 = "Hello World";
console.log(`Number of vowels in "${testString1}":`, countVowels(testString1));

var testString2 = "JavaScript";
console.log(`Number of vowels in "${testString2}":`, countVowels(testString2));

var testString3 = "AEIOUaeiou";
console.log(`Number of vowels in "${testString3}":`, countVowels(testString3));

var testString4 = "bcdfghjklmnpqrstvwxyz";
console.log(`Number of vowels in "${testString4}":`, countVowels(testString4));

/////////////////////////////ques : 4

 function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
var testString1 = "kayak";
console.log(`Is "${testString1}" a palindrome?`, isPalindrome(testString1));

var testString2 = "mom";
console.log(`Is "${testString2}" a palindrome?`, isPalindrome(testString2));

var testString3 = "radar";
console.log(`Is "${testString3}" a palindrome?`, isPalindrome(testString3));

var testString4 = "refer";
console.log(`Is "${testString4}" a palindrome?`, isPalindrome(testString4));

var testString5 = "hello";
console.log(`Is "${testString5}" a palindrome?`, isPalindrome(testString5));

var testString6 = "A man, a plan, a canal, Panama";
console.log(`Is "${testString6}" a palindrome?`, isPalindrome(testString6));

/////////////////////////////ques : 5

function isInRange(a, b) {
    return (a >= 50 && a <= 99) || (b >= 50 && b <= 99);
}
let num1 = 60;
let num2 = 45;
console.log(`Are ${num1} or ${num2} in the range 50-99?`, isInRange(num1, num2));

num1 = 25;
num2 = 80;
console.log(`Are ${num1} or ${num2} in the range 50-99?`, isInRange(num1, num2));

num1 = 100;
num2 = 150;
console.log(`Are ${num1} or ${num2} in the range 50-99?`, isInRange(num1, num2));

num1 = 55;
num2 = 95;
console.log(`Are ${num1} or ${num2} in the range 50-99?`, isInRange(num1, num2));

num1 = 30;
num2 = 40;
console.log(`Are ${num1} or ${num2} in the range 50-99?`, isInRange(num1, num2));

/////////////////////////////ques : 6

   function getMinValue(arr, mapFn) {
    let mappedArr = arr.map(mapFn);
    return Math.min(...mappedArr);
}
function square(x) {
    return x * x;
}
var testArray = [1, -2, 3, -4, 5];
console.log("Original array:", testArray);
console.log("Minimum value after mapping (square):", getMinValue(testArray, square));
function negate(x) {
    return -x;
}
console.log("Minimum value after mapping (negate):", getMinValue(testArray, negate));
function addTen(x) {
    return x + 10;
}
console.log("Minimum value after mapping (addTen):", getMinValue(testArray, addTen));

/////////////////////////////ques : 7

function createUpdatedString(str) {
    if (str.length < 3) {
        return "String length must be 3 and above.";
    }

    let lastThreeChars = str.slice(-3);
    return lastThreeChars.repeat(4);
}
let testString1 = "JavaScript";
console.log(`Updated string for "${testString1}":`, createUpdatedString(testString1));

let testString2 = "Hello";
console.log(`Updated string for "${testString2}":`, createUpdatedString(testString2));

let testString3 = "abc";
console.log(`Updated string for "${testString3}":`, createUpdatedString(testString3));

let testString4 = "ab";
console.log(`Updated string for "${testString4}":`, createUpdatedString(testString4));

/////////////////////////////ques : 8

function findAngleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}
let angle1 = 45;
console.log(`Angle ${angle1} is a ${findAngleType(angle1)}`);

let angle2 = 90;
console.log(`Angle ${angle2} is a ${findAngleType(angle2)}`);

let angle3 = 135;
console.log(`Angle ${angle3} is a ${findAngleType(angle3)}`);

let angle4 = 180;
console.log(`Angle ${angle4} is a ${findAngleType(angle4)}`);

let angle5 = 200;
console.log(`Angle ${angle5} is a ${findAngleType(angle5)}`);

/////////////////////////////ques : 9

 function smallestRoundNumber(value) {
    if (value % 10 === 0) {
        return value;
    }
    return Math.ceil(value / 10) * 10;
}
let value1 = 592;
console.log(`The smallest round number not less than ${value1} is ${smallestRoundNumber(value1)}`);

let value2 = 590;
console.log(`The smallest round number not less than ${value2} is ${smallestRoundNumber(value2)}`);

let value3 = 600;
console.log(`The smallest round number not less than ${value3} is ${smallestRoundNumber(value3)}`);

let value4 = 1234;
console.log(`The smallest round number not less than ${value4} is ${smallestRoundNumber(value4)}`);

let value5 = 1000;
console.log(`The smallest round number not less than ${value5} is ${smallestRoundNumber(value5)}`);

/////////////////////////////ques : 10

function findIndex(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i; 
        }
    }
    return -1; 
}
let array1 = [10, 20, 30, 40, 50];
let item1 = 30;
console.log(`Index of ${item1} in [${array1}]:`, findIndex(array1, item1));

let array2 = ['apple', 'banana', 'cherry', 'date'];
let item2 = 'cherry';
console.log(`Index of "${item2}" in [${array2}]:`, findIndex(array2, item2));

let array3 = [1, 2, 3, 4, 5];
let item3 = 6;
console.log(`Index of ${item3} in [${array3}]:`, findIndex(array3, item3));

let array4 = ['a', 'b', 'c', 'd'];
let item4 = 'b';
console.log(`Index of "${item4}" in [${array4}]:`, findIndex(array4, item4));
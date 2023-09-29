// ! code mu
// ? 1.1 - 1

// const whatIsANumber = thisNumber => {
//   if (thisNumber < 0) {
//     return 'Number is negative!'
//   } else if(thisNumber === 0) {
//     return 'Number is null!'
//   } else {
//     return 'Number is positive!'
//   }
// }

// console.log(whatIsANumber());

// ? 1.1 - 2

// const str = 'gsdgshdfhdsdfsdhf';
// console.log(str.length)

// ? 1.1 - 3

// const str = 'sdgdafmdiinekcv';
// const arr = [...str];

// console.log(arr[arr.length - 1])

// ? 1.1 - 4

// const numCouple = num => {
//   if (num % 2 === 0) {
//     return 'Number is a couple!'
//   }
//   if (num % 2 !== 0) {
//     return 'Number is not a couple!'
//   }
//   return num;
// }

// console.log(numCouple());

// ? 1.1 - 5 перший варіант

// const checkTwoNambers = (word1, word2) => {
//   let arr1 = [...word1];
//   let arr2 = [...word2];
//   console.log(arr1)
//   console.log(arr2)

//   if (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
//     return true;
//   }
//   return false;
// };

// console.log(checkTwoNambers('sungo', 'sunure'));

// ? 1.1 - 5 другий варіант

// const checkTwoNambers = (word1, word2) => {

//   console.log(word1)
//   console.log(word2)

//   if (word1.slice(0, 3) === word2.slice(0, 3)) {
//     return true;
//   }
//   return false;
// };

// console.log(checkTwoNambers('supgo', 'sunure'));

// ?

// const getLastLetter = word => {
//   let wordArr = [...word];
//   console.log(wordArr);
//   if (wordArr[wordArr.length - 1] === 'h') {
//     return wordArr[wordArr.length - 2];
//   } else {
//     return wordArr[wordArr.length - 1];
//   }
// };
// console.log(getLastLetter('through'));

// ?

// let str = 'sgdfg'
// const arr = [...str];
// console.log(arr);

// ? 1.2 - 1

// let num = 102
// let arr = [...num.toString()]
// console.log(arr[0]);

// ? 1.2 - 2

// let num = 102
// let arr = [...num.toString()]
// console.log(arr[arr.length - 1]);

// ? 1.2 - 3

// let num = 30225237199
// let arr = [...num.toString()]
// let sum = Number(arr[0]) + Number(arr[arr.length - 1]);
// console.log();
// console.log(sum);
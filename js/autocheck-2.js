// ! return

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge(20))
// console.log(checkAge(8))
// console.log(checkAge(14))
// console.log(checkAge(38))

// ! ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// ! ЗАДАЧА: СКЛАД ТОВАРІВ 3.0

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ! Масив

// const fruits = ["apple", "plum", "pear", "orange"];

// ! Масив #2

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

// const firstElement = fruits[0];
// console.log(firstElement);
// const secondElement = fruits[1];
// console.log(secondElement);
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElement);

// ! Масив #3

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[fruits.length - 1] = "banana";

// console.log(fruits);

// ! Масив #4

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// ! Масив #5

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// ! ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ

// function getExtremeElements(array) {
//   // Change code below this line
// return [array[0], array[array.length - 1]];

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// ! Метод split(delimiter)

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// ! ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

//   if (message = message.split(" ")) {

//     return message.length * pricePerWord;
//   }
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20))
// console.log(calculateEngravingPrice("Web-development is creative work", 40))
// console.log(calculateEngravingPrice("Web-development is creative work", 20))

// ! Метод масивів join(delimiter)

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// ! ЗАДАЧА: ГЕНЕРАТОР SLUG

// function slugify(title) {
//   // Change code below this line
//   if (title = title.split(" ")) {
//     title = title.join("-");

//     return title.toLowerCase();
//   }

//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// // let title = "Arrays for begginers";
// // console.log(title);
// // title = title.split(" ")
// // console.log(title)
// // title = title.join("-")
// // console.log(title)
// // title = title.toLowerCase()
// // console.log(title)

// ! Метод slice(begin, end)

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ! Метод concat

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// ! ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ

// function makeArray(firstArray, secondArray, maxLength) {

//   const newArrey = firstArray.concat(secondArray);

//   if (newArrey.length >= maxLength) {
//     return newArrey.slice(0, maxLength)
//   }

//   return newArrey
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// ! for

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// ! ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)

// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0
//   for (let i = 1; i <= number; i++){
//     total += i
//   }

// return total
//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// ! Цикл for

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ! ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ! ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА

// function findLongestWord(string) {
//   // Change code below this line
//   const array = string.split(' ');

//   let maxLetter = '';

//   for (let j = 0; j < array.length; j++) {
//     if (array[j].length > maxLetter.length) {
//       maxLetter = array[j];
//     }
//   }

//   return maxLetter
//   // Change code above this line
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// ! Метод push()

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++){
//   numbers.push(i)
// }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// ! ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ

// function filterArray(numbers, value) {
//    // Change code below this line
//   const array = [];
//   for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
//   console.log();
// return array
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3) );
// console.log(filterArray([1, 2, 3, 4, 5], 4) );
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ! Метод includes(value)

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  return fruits.includes(fruit)
  return; // Change this line
}


console.log(checkFruit('plum'));
console.log(checkFruit('mandarin'));
console.log(checkFruit('pear'));
console.log(checkFruit('Pear'));
console.log(checkFruit('apple'));

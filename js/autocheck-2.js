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

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
  if (firstArray.concat(secondArray) <= maxLength) {
    return firstArray.concat(secondArray);
}


    // Change code above this line
}
  
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
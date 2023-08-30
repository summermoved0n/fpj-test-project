// ?------- GOIT HW-1 -------

// ! Сумма рядків

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);

// ! Шаблонний рядок

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message)

// ! Problem #1

// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// ! Функція sayHi

// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// ! Функція add

// function add(a, b, c) {
// console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ! Функція add

// function add(a, b, c) {
//   return a + b + c;
// }
// add();

//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// ! Шаблонний рядок #2

// function makeMessage (name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   console.log(message)
//   return message;
// };

// makeMessage('Radar', 6150)
// makeMessage('Scanner', 3500)
// makeMessage('Reactor', 8000)
// makeMessage('Engine', 4070)

// ! Математичні оператори

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   console.log(totalPrice)
//   return totalPrice;
// };

// calculateTotalPrice(5, 100)
// calculateTotalPrice(8, 60)
// calculateTotalPrice(3, 400)
// calculateTotalPrice(1, 3500)
// calculateTotalPrice(12, 70)

// ! Замовлення продукту №2

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message)
//   return message;
// }

// makeOrderMessage(2, 100, 50)
// makeOrderMessage(4, 300, 100)
// makeOrderMessage(10, 70, 200)

// ! Функція порівняння

// function isAdult(age) {
//   const passed = age >= 18;
//   console.log(passed)
//   return passed;
// }

// isAdult(20)
// isAdult(14)
// isAdult(8)
// isAdult(37)

// ! Функція строгої та нестрогої рівності

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD;
// console.log(isMatch)
//   return isMatch;
// }

// isValidPassword("mangodab3st")
// isValidPassword("kiwirul3z")
// isValidPassword("jqueryismyjam")

// ! Pозгалудження

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//! ЗАДАЧА: СКЛАД ТОВАРІВ

// function checkStorage(available, ordered) {
//   let message;

//   if(available > ordered){
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//   }

//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//! Комбіновані оператори

// ! Лекція 1-2 (логічні оператори)

// console.log(true && 3)
// console.log(false && 3)
// console.log(true && 3 && 'kiwi')
// console.log(true && '' && 'kiwi')
// console.log(true && ' ' && 'kiwi')
// console.log(true && 0 && 'kiwi')
// console.log(true || 3)
// console.log(true || 3 || 4)
// console.log(true || false || 4)
// console.log(false || true || 4)
// console.log(null || 2 || undefined)
// console.log(null || 2 || undefined)
// console.log((1 && null && 2) > 0)
// console.log(null || (1 && 2) || 4)
// console.log(null || (null && 2) || 4)

// ! Лекція 1-2 (розгалудження)

// const quation1 = confirm('Do you like girls?')
// const quation2 = Number(prompt('How old are you?'))
// console.log(quation2)

// if (quation2 >= 18) {
//   console.log(alert('Hello big guy!'))
// } else {
//   console.log(alert('Small dick!'))
// }

// const quation3 = Number(prompt('What girl`s age do you like?'))
// console.log(quation3)










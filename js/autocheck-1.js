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

// ! ЗАДАЧА: СКЛАД ТОВАРІВ

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

// ! ЗАДАЧА: ПЕРЕВІРКА БАЛАНСУ

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   const customerCreditsOnCard = customerCredits - totalPrice;

//   if (customerCredits >= totalPrice) {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCreditsOnCard} credits left`;
//   } else {
//     message = `Insufficient funds!`;
//   }

//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// ! if....else

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// ! ЗАДАЧА: СКЛАД ТОВАРІВ 2.0

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = `There are no products in the order!`;
//   } else if(ordered > available) {
//       message = `Your order is too large, there are not enough items in stock!`;
//   } else {
//     message = `The order is accepted, our manager will contact you`;
//     }
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ! Логічні оператори

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// ! Логічні оператори #2

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// ! Логічні оператори #3

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// ! ЗАДАЧА: ОБЧИСЛЕННЯ ЗНИЖКИ

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// ! Тернарний оператор

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// ! ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// ! Pозгалуження switch

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

// ! Pозгалуження switch #2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
    
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
    
//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// ! ЗАДАЧА: ДОСТАВКА ТОВАРУ

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;
    
//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;
    
//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;
    
//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
    
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
  
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// ! Bластивість length

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// ! Row

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);
// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopic.length -1];
// console.log(lastElement);

// console.log(courseTopicLength.length);
// console.log(firstElement[0]);
// console.log(lastElement[20]);

// Change code above this line

// ! Метод рядків slice

// function getSubstring(string, length) {
//    const substring = (string.slice(0, length)); // Change this line

//   return substring;
// }

// ! ЗАДАЧА: ФОРМАТУВАННЯ ПОВІДОМЛЕННЯ

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + "...";
//   } else {result = message}
  
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// ! Pегістр

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

// ! includes(substring)

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));

// ! ЗАДАЧА: ПЕРЕВІРКА СПАМУ

// function checkForSpam(message) {
//   let result;

//   if (result = message.includes('sale')) {
    
//   } else if (result = message.includes('spam')) {}
//   else if (result = message.includes('SPAM')) { }
//   else if (result = message.includes('SALE')) { }
//     else if (result = message.includes('SalE')) { }
//   else{}

//   return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

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










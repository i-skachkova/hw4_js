// 1
// const firstQuestion = prompt("Як Вас звати?");
// const secondQuestion = prompt("Скільки Вам років?");
// if(firstQuestion && secondQuestion){
//     console.log("Обидва поля заповнені");
// }
// else console.log("Не всі поля заповнені");


// 2
// const firstNumber = Number(prompt("Введіть перше число"));
// const secondNumber = Number(prompt("Введіть друге число"));
// if(firstNumber + secondNumber > 10){
//     console.log("Сума більша за 10");
// }
// else console.log("Сума менша або дорівнює 10");


// 3
// const s = prompt("Введіть текст");
// if(s.includes("JavaScript")){
//     console.log("Текст містить слово JavaScript");
// }
// else console.log("Текст не містить слово JavaScript");


// 4
// const n = Number(prompt("Введіть число"));
// if(n >= 10 && n <= 20){
//     console.log("Число входить в діапазон від 10 до 20");
// }
// else console.log("Число не входить в діапазон від 10 до 20");


// 5
const username = prompt("Введіть ім'я користувача");
const email = prompt("Введіть email");
const password = prompt("Введіть пароль");
if(username.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6){
    console.log("Дані заповнено правильно");
}
else console.log("Дані заповнено неправильно");
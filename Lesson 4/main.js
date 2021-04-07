// 1) створити функцію яка приймає масив та виводить його
//             let arr = [2,3,6,1,7,18,32,23,33,17];
//             function functionArr(arr) {
//                console.log(arr)
//             }
//             functionArr(arr)
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function random() {
//         let arr=[];
//         for (let i = 0; i < 20; i++) {
//         arr.push(Math.round(Math.random()*100))
//         }
//         console.log(arr);
// }
// random()
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

            //     function minNumber(num1, num2, num3) {
            //     if (num1<num2 && num1<num3){
            //         console.log(num1)
            //     }
            //     if (num2<num1 && num2<num3){
            //         console.log(num2);
            //     }
            //     if (num3<num1 && num3<num2){
            //         console.log(num3);}
            // }
            // minNumber(42,22,8);

// 5) створити функцію яка повертає найбільше число з масиву
//             function maxNumber(numberArr = []) {
//                 let max = numberArr[0];
//                 for (let i = 0; i < numberArr.length; i++) {
//                     if (numberArr[i]>max){
//                         max = numberArr[i]
//                     }
//                 }
//             return (max)
//             }
//             let arr = maxNumber([5, 14, 87, -2, 6, 2, 7])
//             console.log(arr);
// 6) створити функцію яка повертає найменьше число з масиву
//             function minNumber(numberArr = []) {
//                 let min = numberArr[0];
//                 for (const i of numberArr) {
//                     if (i<min){
//                         min=i;
//                     }
//                 }
//                 return (min)
//             }
//             let arr = minNumber([8, -1, 56, 2, -5, 7, 14])
//             console.log(arr);
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//             function sum( arr= []) {
//                 let suma = 0;
//                 for (let i = 0; i < arr.length; i++) {
//                     suma += arr[i];
//                 }
//                 return(suma);
//             }
//             let arr = sum([2, 5, 3, 7, 1, 2])
//             console.log(arr);
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//             function serednie( arr= []) {
//                 let suma = 0;
//                 for (let i = 0; i < arr.length; i++) {
//                     suma += arr[i];
//                 }
//                 return(suma/arr.length);
//             }
//             let arr = serednie([2, 5, 3, 7, 1, 2])
//             console.log(arr);
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//             function keysOfObject(arr=[]) {
//                 let keys = [];
//                 for (let i = 0; i < arr.length; i++) {
//                     keys [i]  = Object.keys(arr[i])
//                 }
//
//                 return keys.flat()  ///////////
//             }
//             let key = keysOfObject([{name: 'Dima', age: 13}, {model: 'Camry'}])
//             console.log(key);
// // let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// argu
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//                 function valueOfObject(arr=[]) {
//                 let value = [];
//                 for (let i = 0; i < arr.length; i++) {
//                     value [i]  = Object.values(arr[i])
//                 }
//                 return value.flat()
//             }
//             let value = valueOfObject([{name: 'Dima', age: 13}, {model: 'Camry'}])
//             console.log(value);
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//             function indexPlus(arr1=[], arr2=[]) {
//                 let sum = []
//                 for (let i = 0; i < arr1.length; i++) {
//                     sum[i] = arr1[i]+arr2[i]
//                 }
//                     return(sum)
//             }
//             let rrrr = indexPlus([1, 2, 3, 4], [2, 3, 4, 5])
//             console.log(rrrr);
//
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//         function minNumber(numberArr = []) {
//                 let min = numberArr[0];
//                 let max = numberArr[0];
//                 for (const i of numberArr) {
//                     if (i<min){
//                         min=i;
//                     }
//                     if (i>max){
//                         max=i
//                     }
//                 }
//                 console.log(max);
//                 return (min)
//             }
//             let min= minNumber([8, -1, 56, 2255, -5, 7, 14, 15])
//             console.log(min);
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
//             let a = prompt('key or value ???')
//             function valueOfObject(arr=[], keyOrValue = '') {
//                             let value = [];
//                             for (let i = 0; i < arr.length; i++) {
//                                 if (keyOrValue === 'value'){
//                                     value [i] = Object.values(arr[i])
//                                 }
//                                 if (keyOrValue === 'key'){
//                                     value [i] = Object.keys(arr[i])
//                                 }
//                             }
//                             return value.flat()
//                         }
//                         let value = valueOfObject([{name: 'Dima', age: 13}, {model: 'Camry'}], a)
//                         console.log(value);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//             function zmina(arr = [], i = '') {
//                 let element = arr[i];
//                 if (i<=arr.length){
//                     arr.splice(i, 1);
//                     arr.splice(i+1, 0, element);
//                 }
//                 return arr
//             }
//             const arr1 = zmina([9,8,0,4], 0)
//             const arr2 = zmina([9,8,0,4], 1)
//             const arr3 = zmina([9,8,0,4], 2)
//             console.log(arr1);
//             console.log(arr2);
//             console.log(arr3);
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function delZero (arr = []) {
//
//     for (let i = arr.length; i < 0; i--) {
//        arr.push(arr.splice(i, 1))
//
//     }
//     return arr
//     ////********************
// //     for (const i of arr) {
// //         if (arr[i] === 0) {
// //             arr.push(arr.splice(i, 1))
// //         }
// //     }
// //     return arr.flat()
// // }
// let zero = delZero([1,0,6,0,3]);
// let zero1 = delZero([0,1,2,3,4]);
// let zero2 = delZero([0,0,1,0]);
// console.log(zero);
// console.log(zero1);
// console.log(zero2);
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//              function delSpace(n) {
//                  n = n.trim().replace(/ +/, ' ')
//                 return n
//              }
//              let n1 = delSpace('    Harry       Potter      ')
//             let n2 = delSpace('    Ron       Whisley      ')
//             let n3 = delSpace('    Hermione       Granger      ')
//             console.log(n1);
//             console.log(n2);
//             console.log(n3);
// ============================================================================================

//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
//                 function addBlock() {
//                     const div = document.createElement('div')
//                     div.innerText = 'Hello owu'
//                     document.body.appendChild(div)
//                 }
//                 addBlock()

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//             function addEllement (type,text) {
//                 const ellement = document.createElement(type)
//                 ellement.innerText = text
//                 document.body.appendChild(ellement)
//             }
//             addEllement('h2', 'PRIVET!!!')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //
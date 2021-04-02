// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
//             const mainHeader = document.getElementById("main_header");
//             mainHeader.style.color = 'red';
//             mainHeader.innerText = 'FEB-2021';
// b) робить шириниу елементу ul 400px
//             let allUl = document.getElementsByTagName('ul');
//             for (const ulka of allUl) {
//             ulka.style.width = '400px'
//             }
// c) робить шириниу всіх елементів з класом linkList шириною 50%
//             const linkList = document.getElementsByClassName('linkList')
//             for (const linkListElement of linkList) {
//                 linkListElement.style.width = '50%'
//             }
// d) отримує текст який зберігається в елементі з класом listElement2
//             const textOnListElement2 = document.getElementsByClassName('listElement2')[0]
            // console.log(textOnListElement2.textContent);
// e) отримує всі елементи li та змінює ім колір фону на сірий
//             const  allLi = document.getElementsByTagName('li');
//             for (const lishka of allLi) {
//                 lishka.style.backgroundColor = 'grey'
//             }
// f) отримує всі елементи 'a' та додає їм клас anchor
//             const allA = document.getElementsByTagName('a')
//             console.log(allA);
//             for (const a of allA) {
//                 a.classList.add('anchor')
//             }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//             const allA = document.getElementsByTagName('a')
//             console.log(allA);
//             for (const a of allA) {
//                 if (a.textContent === 'link3'){
//                     a.style.fontSize = '40px'
//                 }
//             }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//             const allA = document.getElementsByTagName('a');
//             for (const a of allA) {
//                 a.classList.add('element_'+a.textContent);
//             }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//             const subHeader = document.getElementsByClassName('sub-header');
//             let color = prompt('Колір Фону');
//             console.log(color);
//             for (const subHeaderElement of subHeader) {
//             subHeaderElement.style.backgroundColor = color;
//             }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//             const subHeader = document.getElementsByClassName('sub-header');
//             let color = prompt('Колір Фону');
//             console.log(color);
//             for (const subHeaderElement of subHeader) {
//                 if (subHeaderElement.textContent === 'content 2 segment') {
//                 subHeaderElement.style.color = color;}
//             }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//             const elClassContent_1 = document.getElementsByClassName('content_1');
//             let text = prompt('введіть текст');
//             for (const elClassContent1Element of elClassContent_1) {
//                 elClassContent1Element.innerText = text;
//             }
// l) отримати елементи p та змінити їм padding на 20px
//             const allP = document.getElementsByTagName('p');
//             for (const allPElement of allP) {
//                 allPElement.style.padding = '20px';
//             }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//             const classText2 = document.getElementsByClassName('text2');
//             for (const classText2Element of classText2) {
//                 classText2Element.innerText = 'FEB-2021'
//             }
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
//             let rules = [
//                 {
//                     title: 'Первое правило Бойцовского клуба.',
//                     body: 'Никому не рассказывать о Бойцовском клубе.'
//                 },
//                 {
//                     title: 'Второе правило Бойцовского клуба.',
//                     body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//                 },
//                 {
//                     title: 'Третье правило Бойцовского клуба.',
//                     body: 'В схватке участвуют только двое.'
//                 },
//                 {
//                     title: 'Четвертое правило Бойцовского клуба.',
//                     body: 'Не более одного поединка за один раз.'
//                 },
//                 {
//                     title: 'Пятое правило Бойцовского клуба.',
//                     body: 'Бойцы сражаются без обуви и голые по пояс.'
//                 },
//                 {
//                     title: 'Шестое правило Бойцовского клуба.',
//                     body: 'Поединок продолжается столько, сколько потребуется.'
//                 },
//                 {
//                     title: 'Седьмое правило Бойцовского клуба.',
//                     body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//                 },
//                 {
//                     title: 'Восьмое и последнее правило Бойцовского клуба.',
//                     body: 'Новичок обязан принять бой.'
//                 }
//             ];
//             for (const rule of rules) {
//                 const ruleDiv = document.createElement('div')
//                 ruleDiv.innerHTML = `<h2> ${rule.title} </h2> <p>${rule.body}</p> `;
//                 document.body.appendChild(ruleDiv)
//             }
//
// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
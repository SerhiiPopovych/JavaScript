// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
const content = document.getElementById('content');
console.log(content);
// b) отримує текст з блоку з id "rules"
const rules = document.getElementById('rules');
console.log(rules);
// c) замініть текст параграфа з id 'content' на будь-який інший
//
content.innerText = 'Why do I have to complete a CAPTCHA?\n' +
    'Completing the CAPTCHA proves you are a human and gives you temporary access to the web property.'
// d) замініть текст параграфа з id 'rules' на будь-який інший
//
rules.innerText = 'What can I do to prevent this in the future?\n' +
    'If you are on a personal connection, like at home, you can run an anti-virus scan on your device to make sure it is not infected with malware.;'
// e) змініть кожному елементу колір фону на червоний
content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';
// f) змініть кожному елементу колір тексту на синій
content.style.color = 'blue'
rules.style.color = 'blue'
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//??????
// h) отримати всі елементи з класом fc_rules
const fc_rules = document.getElementsByClassName('fc_rules')
console.log(fc_rules);
// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (const fcRule of fc_rules) {
    fcRule.style.color = 'red'
}
//
//
// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

for (const user of users) {

    const userDiv = document.createElement('div');
    userDiv.innerHTML = `Name: ${user.name} Age: ${user.age} Status: ${user.status}; <br> <div> Adress: city: ${user.address.city};
 country: ${user.address.country}; street: ${user.address.street}; house number: ${user.address.houseNumber}</div>`;
    document.body.appendChild(userDiv);
    console.log(user);

}


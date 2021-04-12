// 1) Створити масив з 20 чисел та:
// let numbers = [21, 5, 1, 8, 3, 6, 15, 78, 13, 54, 62, 2, 71, 32, 66, 45, 81, 32, 45, 23];
//     a) відсортувати його від меншого до більшого.
            // let minToMax = numbers.sort((a, b) => {
            //     return a-b;
            // })
            // console.log(minToMax);
//     b) відсортувати його від більшого до меншого.
            // let maxToMin = numbers.sort((a, b) => {
            //     return b-a
            // })
            // console.log(maxToMin);
//     c) Відфілтрувати числа які є кратними 3.
//             let filter3 = numbers.filter((value) => {
//                 if (value%3===0){
//                     return value
//                 }
//             })
//             console.log(filter3);
//     d) Відфілтрувати числа які є більшими за 10.
//             let filter10 = numbers.filter(value => {
//                 if (value>10){
//                     return value
//                 }
//             })
//             console.log(filter10);
//     e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//     let forEach = numbers.forEach(value => document.write(value))
//     f) За допомогою map збільшити кожен елемент в масиві в три рази.
//                 const numberUp3 = numbers.map(number=>{
//                  return number*3
//                 })
//                 console.log(numberUp3);
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)\
//                    const suma = numbers.reduce((sum, previousValue) => {return sum + previousValue}, 0)
//                    console.log(suma);
//
// 2) Створити масив з 20 стрічок та:
// let str = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Alias', 'autem',
//  'commodi', 'deleniti', 'dolores', 'eligendi', 'est', 'pariatur', 'perspiciatis', 'quis', 'sequi', 'temporibus!']

//     a) Відсортувати його в алфавітному порядку
          // str.sort()
          // console.log(str);
// b) Відсортувати в зворотньому порядку
               // str.sort()
              // str.reverse()
              // console.log(str);
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//              const filterStr = str.filter((value, index) => {
//               if (value.length>4){
//                return value
//               }
//              })
//              console.log(filterStr);
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'\
      // let samSays = str.map(str=> 'Sam says ' + str)
      // console.log(samSays);
//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
       // let yearMinToMax = users.sort((a, b) => {
       //     return a.age-b.age;
       // })
       // console.log(yearMinToMax);

       // let yearMaxtoMin = users.sort((a, b) => {
       //  return b.age-a.age;
       // })
       // console.log(yearMaxtoMin);
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//       let sort = users.sort((a, b) => {
//        return (a.name.length - b.name.length)
//       })
//       console.log(sort);
//        let sort = users.sort((a, b) => {
//        return (b.name.length - a.name.length)
//       })
//       console.log(sort);```
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
//        let usersPlusId = [];
//            usersPlusId = users.map((value, index) => {
//        value.id = index + 1;
//        return value
//        })
//           console.log(usersPlusId);
//
//          const usersPlusId2 = users.reduce((acc, user, index) => {
//              user.id = index+1
//              acc.push(user)
//              return acc
//          }, [])
// console.log(usersPlusId2);


// // d) відсортувати його за індентифікатором
// const sortById = usersPlusId.sort((a, b) => {
//  return (b.id - a.id)
// })
// console.log(sortById);
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// const plusHome = users.reduce((acc, user) => {
//     if (user.isMarried){
//         user.home = true;
//         acc.push(user)
//     }
//     return acc
// }, []);
// console.log(plusHome);
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :
//  - двигун більше 3х літрів
// const carVolume3 = cars.filter((value) => {
//  return value.volume>3
// })
// console.log(carVolume3);
// // - двигун = 2л
// const carVolume2 = cars.filter((value) => {
//  return value.volume==2
// })
// console.log(carVolume2);
// // - виробник мерс
// const sortMercedes = cars.filter(value => {
//  return value.producer == 'mercedes'
// })
// console.log(sortMercedes);
// // - двигун більше 3х літрів + виробник мерседес
// const sortMercedes3 = cars.filter(value => {
//  return value.producer == 'mercedes' && value.volume>= 3
// })
// console.log(sortMercedes3);
// // - двигун більше 3х літрів + виробник субару
// const sortSubaru = cars.filter(value => {
//  return value.producer == 'subaru' && value.volume >= 3
// })
// console.log(sortSubaru);
// // - сили більше ніж 300
// const power300 = cars.filter(value => {
//     return value.power>300;
// })
// console.log(power300);
// // - сили більше ніж 300 + виробник субару
// const power300Subaru = cars.filter(value => {
//     return value.power>300 && value.producer == 'subaru';
// })
// console.log(power300Subaru);
// - мотор серіі ej
// const motorEJ = cars.filter(value => {
//
//     return value.engine.indexOf('ej') == 0
//     }
// )
// console.log(motorEJ);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// const power300SubaruEj = cars.filter(value => {
//     return value.power>300 && value.producer == 'subaru' && value.engine.indexOf('ej') == 0
// })
// console.log(power300SubaruEj);
// - двигун меньше 3х літрів + виробник мерседес
// const sortMercedesm3 = cars.filter(value => {
//  return value.producer == 'mercedes' && value.volume< 3
// })
// console.log(sortMercedesm3);
// - двигун більше 2л + сили більше 250
// const sortVolumePower = cars.filter(value => {
//     return value.volume >2 && value.power> 250
// })
// console.log(sortVolumePower);
// // - сили більше 250  + виробник бмв
//  const sortPower250Bmw = cars.filter(value => {
//      return value.producer == 'BMW' && value.power>250
//  })
// console.log(sortPower250Bmw);
//
//
// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
// const  sortWithId = usersWithAddress.sort((a, b) => {
//     return a.id - b.id
// })
// console.log(sortWithId);
// -- Відсортувати їх по ID в зворотньому порядку
// const  sortWithIdReverce = usersWithAddress.sort((a, b) => {
//     return b.id - a.id
// })
// console.log(sortWithIdReverce);
// -- Відсортувати по віку
// const sortByAge = usersWithAddress.sort((a, b) => {
//     return a.age-b.age
// })
// console.log(sortByAge);
// // -- Відсортувати по віку в зворотньому порядку
// sortByAge.reverse()
// console.log(sortByAge);
// -- Відсорутвати по імені
// const sortByName = usersWithAddress.sort((a, b) => {
//     return a.name-b.name
// })
// -- Відсорутвати по назві вулиці
// const sortByStreet = usersWithAddress.sort((a, b) => {
//     a = a.address.street
//     b =  b.address.street
//     return  a < b ? -1 : a > b ? 1 : 0;
// })
// console.log(sortByStreet);

// -- Відсорутвати по номеру будинку
// const sortByNumberHouse = usersWithAddress.sort((a, b) => {
//     return a.address.number-b.address.number
// })
// console.log(sortByNumberHouse);
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// const filter30 = usersWithAddress.filter(value => {
//     return value.age >30
// })
// console.log(filter30);
// -- Залишити тільки одружених
// const filterismarried = usersWithAddress.filter(value => {
//     return value.isMarried
// })
// console.log(filterismarried);
// -- Залишити тільки одружених, які молодні за 30
// const filter30andIsMarried = usersWithAddress.filter(value => {
//     return value.isMarried && value.age<30
// })
// console.log(filter30andIsMarried);
// -- Залишити лише тих, в кого парні номери будинків.
// const numberOfHouse2 = usersWithAddress.filter(value => {
//     return value.address.number %2 ==0
// })
// console.log(numberOfHouse2);
// -- Порахувати загальний вік всіх людей. (reduce)
// const allAge = usersWithAddress.reduce((suma, user) =>{
//    return suma + user.age
// }, 0)
// console.log(allAge);
//
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// const plusChild = usersWithAddress.reduce((acc, user) => {
//     if (user.isMarried && user.age>30){
//         user.child = true
//         acc.push(user)
//     }
//     return acc
// }, [])
// console.log(plusChild);
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
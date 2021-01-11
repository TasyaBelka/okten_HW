/*
// Task 1
//-- створити об'єкт (не меньше 5ти властивостей) який описує
//- собаку
//- людину
//- автомобіль
//- квартиру
//- книгу

let dog = {
  breed : 'German Shepherd',
  sex : 'male',
  age: 6,
  color : 'black-backed',
  size : 62,
  guard : 'yes'
}

let user = {
  firstName : 'David',
  lastName : 'Smith',
  age : 35,
  city : 'New York',
  status : true
}

let car = {
  model : 'Nissan',
  type : 'GT-R34',
  engine : 'RB26DETT',
  hp : 280,
  driveUnit : '4WD'
}

let flat = {
  floor : 3,
  size : 56,
  roomNumber : 2,
  bathroom : 'separated',
  balcony : true
}

let book = {
  title : 'Carrie',
  author : 'Stephen Edwin King',
  date : 1974,
  genre : 'novel',
  filmAdaptation : true
}

// Task 2
//-- Створити масив та вивести його в консоль:
//- з 5 собак
//- 3 5 людей
//- з 5 автомобілів

let dogs = ['German Shepherd', 'Doberman', 'French Bulldog', 'Italian Greyhound', 'Pug']; 
let users = ['Ivan Petrov', 'Eva Gold', 'Sven Burnt', 'Anna Grishko', 'Oleg Kravets'];
let cars = ['Subaru', 'Nissan', 'Toyota', 'Mitsubishi', 'WV'];

console.log(dogs);
console.log(users);
console.log(cars);

// Task 3
//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//- будинок
//- водій
//- іграшку
//- стіл
//- сумка

let house = {
  size : 120,
  floors : {
    floor1 : ['bathroom', 'kitchen', 'lobby'],
    floor2 : ['bedroom1', 'bedroom2', 'bathroom', 'mansard']
  },
  basement : true,
  parking : false,
  garden : true
}

let toy = {
  title : 'dinosaur',
  material : 'plastic',
  color : ['red', 'green', 'orange'],
  country : 'China',
  interaction : {
    power : 'A++',
    sound : true,
    move : true
  }
}

let driver = {
  fullName : 'Ivan Voloshin',
  age : 43,
  city: 'Kiev',
  category : ['B', 'C1', 'C'],
  insurance : {
    date : '18.08.2020',
    period : '2 years',
    company : 'Insurance, LTD'
  }
}

let table = {
  brand : 'IKEA',
  type : 'dining table',
  size : ['70x120', '90x120', '100x150'],
  material : {
    surface: 'glass',
    legs : 'wood',
    fittings : 'Mako'
  },
  model : 'all-in-one'
}

let purse = {
  brand : 'Gucci',
  type : 'clutch',
  color : ['black', 'red', 'gold', 'silver'],
  material : 'leather',
  accessories : {
    strap : true,
    clasp : 'zipper'
  }
}

// Task 4
//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//  - статус Андрія
//  - статус Максима
//  - ім'я передостаннього об'єкту
//  - ім'я третього об'єкта
//  - вік Олега
//  - вік Олі
//  - вік + ім'я 5го об'єкта
//  - вік + сатус Анни

let users1 = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];

 for (const user of users1) {
  if (user.name === 'andrey') {
    console.log('andrey status is ' + user.status);
  }

  if (user.name === 'max') {
    console.log('max status is ' + user.status);
  }

  if (user.name === 'oleg') {
    console.log('oleg age is ' + user.age);
  }

  if (user.name === 'olya') {
    console.log('olya age is ' + user.age);
  }

  if (user.name === 'anya') {
    console.log(`anya's age is ${user.age} and her status is ${user.status}`);
  }
}

console.log('Penult user name is ' + users1[users1.length - 2].name);
console.log('Third user is ' + users1[2].name);
console.log(`The fifth user name is ${users1[4].name}, and it's age is ${users1[4].age}`);

// Task 5 （task_5.html)
//-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName 
// або document.getElementsByTagName :
//- отримує текст з параграфа з id "content"
//- отримує текст з блоку з id "rules"
//- замініть текст параграфа з id 'content' на будь-який інший
//- замініть текст параграфа з id 'rules' на будь-який інший
//- змініть кожному елементу колір фону на червоний
//- змініть кожному елементу колір тексту на синій
//- отримати весь список класів елемента з id=rules і вивести їх в console.log
//- отримати всі елементи з класом fc_rules
//- поміняти колір тексту у всіх елементів fc_rules на червоний

let p = document.getElementById('content');
console.log(p.innerText);

let divRules = document.getElementById('rules');
console.log(divRules.innerText);

p.innerText = 'Hello there!';
divRules.innerText = 'It was pretty hard, but we did make it!';

p.style.color = 'red';
divRules.style.color = 'blue';

const rules = document.getElementById('rules');
console.log(rules.classList);

let list = document.getElementsByClassName('fc_rules');
console.log(list);

for (let i = 0; i < list.length; i++) {
  list[i].style.color = 'red';
}
*/
// Task 6 (task_6.html)
//- Напишіть код, який :
//-- змінює колір тексту елемнту з ід main_header на будь-який інший
//-- робить шириниу елементу ul 400 пікселів
//-- робить шириниу всіх елементів з класом linkList шириною 50%
//-- отримує текст який зберігається в елементі з класом listElement2
//-- отримує всі елементи li та змінює ім колір фону на сірий
//-- отримує всі елементи 'a' та додає їм клас anchor
//-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір 
//    тексту на 40 пікселів
//-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . 
//     Колір отримати з prompt()
//-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//-- отримати елементи p та змінити їм paddin на довільне значення
//-- отримати елементи з класом text2 та змінити їм текст на довільне значення
/*
let header = document.getElementById('main_header');
header.style.color = 'green';

let ul = document.getElementsByTagName('ul');

for (let i = 0; i < ul.length; i++) {
  ul[i].style.width = '400px';
}

let linkList = document.getElementsByClassName('linkList');

for (let j = 0; j < linkList.length; j++) {
  linkList[j].style.width = '50%';
}

let element = document.getElementsByClassName('listElement2');
console.log(element[0].innerText);

let liList = document.getElementsByTagName('li');

for (let k = 0; k < liList.length; k++) {
  liList[k].style.background = 'grey';
}

let aList = document.getElementsByTagName('a');
console.log(aList);
for (let a of aList) {
  a.classList.add('anchor');

  if (a.innerText === 'link3') {
    a.style.fontSize = '40px';
  }
}

let subHeader = document.getElementsByClassName('sub-header');
for (let item of subHeader) {
  item.style.background = prompt();
  if (item.innerText === 'content 2 segment') {
    item.style.color = prompt();
  }
}

let text = document.getElementsByClassName('content_1');
text[0].innerText = prompt();
*/
let paragraph = document.getElementsByTagName('p');
for (let par of paragraph) {
  par.style.padding = '10px';
}

let words = document.getElementsByClassName('text2');
for (let text of words) {
  text.innerText = 'Kitty Cat';
}

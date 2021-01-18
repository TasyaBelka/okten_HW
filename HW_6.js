/*
// Task 1
//- создать массив с 20 числами.
//-- при помощи метода sort и колбека  отсортировать массив.
//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//-- при помощи filter получить числа кратные 3
//-- при помощи filter получить числа кратные 10
//-- перебрать (проитерировать) массив при помощи foreach()
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let arr = [18, 4, 10, 158, -2, 6, 44, 12, -15, 23];

let newArr = arr.sort((a, b) => a - b);
console.log(newArr);
console.log(arr.sort((a, b) => b - a));

let filtArr = arr.filter(a => a % 3 === 0);
console.log(filtArr);
console.log(arr.filter(a => a % 10 === 0));

arr.forEach(item => console.log(item));

let newArr1 = arr.map(item => {
  item *= 3;
  return item;
});
console.log(newArr1);

// Task 2
//- создать массив со словами на 15-20 элементов.
//-- отсортировать его по алфавиту в восходящем порядке.
//-- отсортировать его по алфавиту  в нисходящем порядке.
//-- отфильтровать слова длиной менее 4х символов
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let string = ['you', 'stress', 'sun', 'cloud', 'finger', 'route', 'funny', 'game', 'new', 'photo', 'access', 'cat', 'fluffy', 'big', 'sleep', 'dance'];

let sortString = string.sort();

console.log(sortString);
console.log(sortString.reverse());

let filtString = string.filter(item => item.length > 3);
console.log(filtString);

let newString = string.map(item => {
  item += '!';
  return item;
});
console.log(newString);

// Task 3
// Все робити через функції масивів (foreach, map ...тд)
//- відсортувати його за  віком (зростання , а потім окремо спадання)
//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
//   (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//- відсортувати його за індентифікатором

let users = [{ name: 'vasya', age: 31, status: false },
{ name: 'petya', age: 30, status: true },
{ name: 'kolya', age: 29, status: true },
{ name: 'olya', age: 28, status: false },
{ name: 'max', age: 30, status: true },
{ name: 'anya', age: 31, status: false },
{ name: 'oleg', age: 28, status: false },
{ name: 'andrey', age: 29, status: true },
{ name: 'masha', age: 30, status: true },
{ name: 'olya', age: 31, status: false },
{ name: 'max', age: 31, status: true }
];

console.log(users.sort((a, b) => a.age - b.age));
console.log(users.sort((a, b) => b.age - a.age));

console.log(users.sort((a, b) => a.name.length - b.name.length));
console.log(users.sort((a, b) => b.name.length - a.name.length));

let deepCopy = JSON.parse(JSON.stringify(users));
let userWithId = deepCopy.map((user, i) => {
  user.id = Math.floor(100 * Math.random() + 1);
  return user;
});
console.log(users);
console.log(userWithId.sort((a, b) => a.id - b.id));

// Task 4
//Відфільтрувати масив за наступними крітеріями :
//- двигун більше 3х літрів
//- двигун = 2л
//- виробник мерс
//- двигун більше 3х літрів + виробник мерседес
//- двигун більше 3х літрів + виробник субару
//- сили більше ніж 300
//- сили більше ніж 300 + виробник субару
//- мотор серіі ej
//- сили більше ніж 300 + виробник субару + мотор серіі ej
//- двигун меньше 3х літрів + виробник мерседес
//- двигун більше 2л + сили більше 250
//- сили більше 250  + виробник бмв

let cars = [
  { producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
  { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3.0, power: 250 },
  { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
  { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
  { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
  { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
  { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
  { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
  { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
  { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
  { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
  { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3.0, power: 400 },
  { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }
];

let volMoreThree = cars.filter(car => car.volume >= 3);
let volTwo = cars.filter(car => car.volume === 2);
let mercedes = cars.filter(car => car.producer === 'mercedes');
let mercVolThree = cars.filter(car => car.volume >= 3 && car.producer === 'mercedes');
let subarVolThree = cars.filter(car => car.volume >= 3 && car.producer === 'subaru');
let power = cars.filter(car => car.power >= 300);
let subarPow = cars.filter(car => car.power >= 300 && car.producer === 'subaru');
let ejEngine = cars.filter(car => car.engine[0] === 'e' && car.engine[1] === 'j');
let subEngine = cars.filter(car => car.engine[0] === 'e' && car.engine[1] === 'j' && car.power >= 300 && car.producer === 'subaru');
let mercVol = cars.filter(car => car.volume < 3 && car.producer === 'mercedes');
let carVolPow = cars.filter(car => car.volume >= 2 && car.power >= 250);
let bmwCar = cars.filter(car => car.power >= 250 && car.producer === 'bmw');

// Task 5
//-- отсортировать его по id пользователей
//-- отсортировать его по id пользователей в обратном опрядке
//-- отсортировать его по возрасту пользователей
//-- отсортировать его по возрасту пользователей в обратном порядке
//-- отсортировать его по имени пользователей
//-- отсортировать его по имени пользователей в обратном порядке
//-- отсортировать его по названию улицы  в алфавитном порядке
//-- отсортировать его по номеру дома по возрастанию
//-- отфильтровать (оставить) тех кто младше 30
//-- отфильтровать (оставить) тех у кого отрицательный статус
//-- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//-- отфильтровать (оставить) тех у кого номер дома четный

let usersWithAddress = [
  {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
  {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
  {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
  {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
  {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
  {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
  {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
  {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
  {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
  {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
  {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];

let copyUsers = JSON.parse(JSON.stringify(usersWithAddress));
console.log(copyUsers.sort((a, b) => a.id - b.id));
console.log(usersWithAddress.sort((a, b) => b.id - a.id));

let sortAge = copyUsers.sort((a, b) => a.age - b.age);
let sortAgeRev = usersWithAddress.sort((a, b) => b.age - a.age);

let sortName = copyUsers.sort((a, b) => {
  if(a.name < b.name) { return -1; }
  if(a.name > b.name) { return 1; }
  return 0;
});
let sortNameRev = copyUsers.sort((a, b) => {
  if(a.name < b.name) { return 1; }
  if(a.name > b.name) { return -1; }
  return 0;
});

let sortStreet = copyUsers.sort((a, b) => {
  if(a.address.street < b.address.street) { return -1; }
  if(a.address.street > b.address.street) { return 1; }
  return 0;
});

let sortNumber = copyUsers.sort((a, b) => a.address.number - b.address.number);

let young = usersWithAddress.filter(user => user.age < 30);
let falseStat = usersWithAddress.filter(user => user.status === false);
let youngFalseStat = usersWithAddress.filter(user => user.status === false && user.age < 30);
let someUser = usersWithAddress.filter(user => user.address.number % 2 === 0);

*/
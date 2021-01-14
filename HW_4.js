/*
// Task 1
//- створити функцію яка виводить масив

let array = (arr) => { console.log(arr) };

// Task 2
//- створити функцію яка заповнює масив рандомними числами та виводить його.
//   Для виведення використати попвередню функцію.

function ranArr() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(10 * Math.random() + 1));
  }
  return arr;
}

array(ranArr());

// Task 3, 4
//- створити функцію яка приймає три числа та виводить та повертає найменьше.
//- створити функцію яка приймає три числа та виводить та повертає найбільше.

function max(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(max(4, 8, 2));

function min(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}

console.log(min(4, 8, 2));

// Task 5
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function minMax() {
  let max1 = arguments[0];
  let min1 = arguments[0];

  for (let argument of arguments) {
    if (max1 < argument) {
      max1 = argument;
    }
    if (min1 > argument) {
      min1 = argument;
    }
  }
  console.log(max1);
  return min1;
}

console.log(minMax(1, 4, 8, 2, 9));

// Task 6, 7
//- створити функцію яка повертає найбільше число з масиву
//- створити функцію яка повертає найменьше число з масиву

let arr = [8, 14, 22, -3, 16, 1];
console.log(arr);

function maxArr(arr) {
  let maxNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

function minArr(arr) {
  let minNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }
  return minNum;
}

// Task 8
//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function sumArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Task 9
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function midArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let mid = sum / arr.length;
  return mid;
}

console.log(maxArr(arr));
console.log(minArr(arr));
console.log(sumArr(arr));
console.log(midArr(arr));

// Task 10
//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let some = [{ 4: 2 }, { 'yui': 'kgg', '4': 18 }, { 'jgh': 18, 'kio': 'prop' }, { 1: 'khg' }];
console.log(some);

let sumObject = (obj) => obj.length;

console.log(sumObject(some));

// Task 11
//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function field(obj) {
  let sum = 0;

  for (let massive of obj) {
    sum += Object.keys(massive).length;
  }

  return sum;
}

console.log(some);
console.log(field(some));

// Task 12
//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

function subArr(arr1, arr2) {
  let sub = [];
  for (let j = 0; j < arr2.length; j++) {
    let sum = arr1[j] + arr2[j];
    sub.push(sum);
  }

  return sub;
}

let something = [2, 3, 8, 11];
let something1 = [4, 10, 15, -3];

console.log(subArr(something, something1));

// Task 13
//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function change(arr, i) {
  let some = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = some;
  return arr;
}

console.log(something);
console.log(change(something, 1));

// Task 14 
//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//   Зберігаючи при цьому порядок не нульових значень.
// [1,0,6,0,3] => [1,6,3,0,0]

function endArr(arr) {
  let zero = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }

  return arr;
}

let lala = [1, 0, 6, 0, 3, 15, 0, 0, 8];
console.log(endArr(lala));

// Task 15
//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок

function hello() {
  const div = document.createElement('div');
  div.innerText = 'Hello owu';
  document.body.appendChild(div);
}
hello();

function elemCreat(type, text) {
  let a = document.createElement(type);
  a.innerText = text;
  document.body.appendChild(a);
}

elemCreat('h1', 'Got it!');

function cars(arr, type) {
  for (let i = 0; i < arr.length; i++) {
    let key = Object.keys(arr[i]);
    for (let j = 0; j < key.length; j++) {
      let a = document.createElement(type);
     a.innerText = arr[i][key[j]];
      document.body.appendChild(a);
    }

  }
}

let carsArr = [
  {
    model: 'Nissan',
    type: 'GT-R34',
    engine: 'RB26DETT',
    hp: 280,
    driveUnit: '4WD'
  }];

console.log(Object.keys(carsArr[0]));
cars(carsArr, 'li');

function cars1(arr, type1, type2) {
  for (let i = 0; i < arr.length; i++) {
    let key = Object.keys(arr[i]);
    let b = document.createElement(type1);
    document.body.appendChild(b);
    for (let j = 0; j < key.length; j++) {
      let a = document.createElement(type2);
      a.innerText = arr[i][key[j]];
      b.appendChild(a);
    }

  }
}
console.log(Object.keys(carsArr[0]));
cars1(carsArr, 'div', 'li');

// Task 16
//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з 
//  відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

function concatArr(users, cities) {
  const result = [];
  for (let city of cities) {
      for (let user of users) {
          if (city.user_id === user.id){
              result.push({...user, ...city})
          }
      }
  }
  return result;
}
console.log(concatArr(usersWithId, citiesWithId));

// ADDITIONAL
//===========додаткове від віктора========
//1) Точная степень двойки.
//Дано натуральное число N.
//Выведите слово YES, если число N является точной степенью двойки,
//или слово NO в противном случае.
//Операцией возведения в степень пользоваться нельзя!

function nCheck(n) {
 let sum = n;
 for (let i = sum; i >= 0; i--) {
   sum = sum % 2;
 }
  if (sum === 0) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

nCheck(125);

//2) Deep Copy
//реалізувати глибоке копіювання обєкту за допомогою рекурсій

let someObj = { 
  a: 15,
  b: [3, 'kjkh'], 
  c: 'it'
}

let deepCopy = JSON.parse(JSON.stringify(someObj));
console.log(deepCopy);

//3) Flat
//Вирівняти багаторівневий масив в однорівневий

let mess = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
console.log(typeof JSON.stringify(mess));

function orderedArr(arr) {
  let newArr = [];
  let str = JSON.stringify(arr);
  let newStr = str.replace(/[\]\["]/g, '');
  newArr = newStr.split(',');
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == +newArr[i]) {
      newArr[i] = +newArr[i];
    }
  }
  return newArr;
}

console.log(orderedArr(mess));
*/
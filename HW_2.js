// Task 1
//--створити масив та вивести його в консоль:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
/*
let arrNum = [1, 8, 4, 3, 9];

console.log(arrNum);

let arrStr = ['Mike', 'Steve', 'Nick', 'Ivan', 'Vlad'];

console.log(arrStr);

let array = ['Hello', 2021, true, 'again', 25];

console.log(array);

// Task 2
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let empty = [];

empty[0] = 'smth';
empty[1] = 15;
empty[2] = true;
empty[3] = 'developer';
empty[4] = 1;

// OR

for (let i = 0; i < 5; i++) {
  empty[i] = Math.floor(10 * Math.random() + 10);
}

console.log(empty);

// Task 3
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 1; i <= 10; i++) {
 	document.write('<div>' + 'Hi there' + '</div>');
 }

// Task 4 
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 1; i <= 10; i++) {
  document.write('<div>' + `index ${i}` + ' ' + 'Hi there' + '</div>');
}

// Task 5
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 1;
while (i <= 20) {
  document.write('<h1>' + 'Hi Okten' + '</h1>');
  i++;
}

// Task 6
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 1;
while (j <= 20) {
  document.write('<h1>' + `index ${j}` + ' ' + 'Hi Okten' + '</h1>');
  j++;
}

// Task 7
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numArray = [];
for (let i = 0; i < 10; i++) {
  numArray[i] = Math.floor(100 * Math.random() + 1);
  console.log(numArray[i]);
}

//Task 8
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let strArray = ['Ooo', 'la-la', 'hi', 'there', 'guys', 'Nice', 'to', 'meet', 'you'];

for (let i = 0; i < strArray.length; i++) {
  console.log(strArray[i]);
}

// Task 9
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let newArray = [1, true, 'haha', 'click', false, 10, -15.0, '15', [-1, 1], 'finish'];

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

// Tasks 10, 11, 12
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// Task 13
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let newarray = [true, 'something', 25, -8, '14', false, 0.35, 2021, 'again', -0.18];

for (let i = 0; i < newarray.length; i++) {
  if (typeof newarray[i] === 'boolean') {
    console.log(newarray[i])
  }
}

for (let i = 0; i < newarray.length; i++) {
  if (typeof newarray[i] === 'number') {
    console.log(newarray[i])
  }
}

for (let i = 0; i < newarray.length; i++) {
  if (typeof newarray[i] === 'string') {
    console.log(newarray[i])
  }
}

let smth = []; // task 13

for (let i = 0; i < newarray.length; i++) {
  smth[i] = newarray[newarray.length - 1 - i];
  console.log(smth[i]);
}

// Tasks 14, 15, 16
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 10; i++) {
  console.log(i);
  document.write(i + '  ');
}

for (let i = 1; i <= 100; i++) {
  console.log(i);
  document.write(i + '  ');
}

for (let i = 1; i <= 100; i +=2) {
  console.log(i);
  document.write(i + '  ');
}

// Tasks 17, 18
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i <=100; i+=2) {
  console.log(i);
  document.write(i + '  ');
}

for (let i = 0; i <=100; i+=2) {
  if (i + 1 <= 100) {
  console.log(i + 1);
  document.write(i + 1 + '  ');
  }
}

// Tasks 19, 20
//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//- Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 60; j++) {
    console.log(i, j);
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
    console.log(i, j, k);
    }
  }
}

// Additional Tasks
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let stringArr = ['a', 'b', 'c'];
let string = '';

for (let i = 0; i < stringArr.length; i++) {
  string += stringArr[i];
}
console.log(string);

let string1 = '';
let j = 0;
while (j < stringArr.length) {
  string1 += stringArr[j];
  j++;
}
console.log(string1);

let string3 = '';
for (let item of stringArr) {
  string3 += item;
}
console.log(string3);
*/
// Task 1
//- Создать произвольный елемент с id = text. 
//  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
/*
let elem = document.getElementById('text');
let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  elem.innerText = '';
});

// Task 2
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn = document.getElementById('btn');
btn.onclick = function() {
  document.getElementById('btn').hidden = true;
};

// Task 3
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на 
//кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити 
//про це користувача

let submit = document.getElementById('submit');
let input = document.getElementsByName('age');

input[0].addEventListener('input', function () {
  return this.value;
});

submit.addEventListener('click', function () {
    if (input[0].value < 18) {
    alert('Denial of access, 18+ only!');
  }
});

// Task 4
//- Создайте меню, которое раскрывается/сворачивается при клике

let menuElem = document.getElementById('menu');
console.log(menuElem);
let button = document.getElementById('button');

button.onclick = function () {
  menuElem.hidden = !menuElem.hidden;
};

// Task 5
//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вывести список комментариев в документ, каждый в своем блоке.
 //Добавьте каждому комментарию по кнопке для сворачивания его body.

let comList = [
  {title: 'bolhead', body: 'London bridge is fallen down, fallen down, fallen down...'}, 
  {title: 'mr. sun', body: 'Mr. sun, sun, mr. golden sun please shine down on me...'},
  {title: 'kitty cat', body: 'small kitty, warm kitty, little ball of fur...'}
];
for (let list in comList) {
  let div = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.innerText = 'Push me';
  h1.innerText = list.title;
  p.innerText = list.body;
  document.body.appendChild(div);
  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(btn);
}


// Task 6
//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль 
//інформація з цих 2х форм.
//Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let submit1 = document.getElementById('btn1');
let inputFirst1 = document.forms.f1.text1[0];
let inputFirst2 = document.forms.f1.text1[1];

submit1.addEventListener('click', function () {
    console.log(inputFirst1.value);
    console.log(inputFirst2.value);
});

let submit2 = document.getElementById('btn2');
let inputSecond1 = document.forms.f2.text2[0];
let inputSecond2 = document.forms.f2.text2[1];

submit2.addEventListener('click', function () {
    console.log(inputSecond1.value);
    console.log(inputSecond2.value);
});

// Task 7
//- Створити функцію, яка генерує таблицю.
//Перший аргумент визначає кількість строк.
//Другий параметр визначає кліькіть ячеєк в кожній строці.
//Третій параметр визначає елемент в який потрібно таблицю додати.

function createTable(tr, td, elem) {
  let e = document.createElement(elem);
  document.body.appendChild(e);
  for (let i = 1; i <= tr; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= td; j++) {
      let tab = document.createElement('td');
      tab.style.width = '50px';
      tab.style.height = '25px';
      tab.style.border = 'solid 1px black';
      row.appendChild(tab);
    }
    e.appendChild(row);
  }
}

createTable(2, 4, 'a');

// Task 8
//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додаткова частина для завдання)

const myForm = document.forms.myForm; // массив инпутов
const btn = document.getElementById('create');
const table = document.getElementById('table');

btn.onclick = () => {
  const { col, row, body } = myForm;
  table.innerHTML = '';
  for (let i = 0; i < row.value; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < col.value; j++) {
      const td = document.createElement('td');
      td.innerText = body.value;
      td.style.width = '50px';
      td.style.border = 'solid 1px grey';
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

// Task 9
//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let pics = document.getElementsByTagName('img');
console.log(pics);
let prewBtn = document.getElementById('prew');
let nextBtn = document.getElementById('next');
pics[0].style.display = 'block';
pics[1].style.display = 'none';
pics[2].style.display = 'none';

let i = 0;
nextBtn.onclick = () => {
  pics[i].style.display = 'none'; 
  i++;
  if(i >= pics.length) {
  i = 0; // переменная i равна 0
  }
pics[i].style.display = 'block'
}
prewBtn.onclick = function () {
  pics[i].style.display = 'none';
  i = i - 1;
  if(i < 0){
      i = pics.length - 1;
  }
  pics[i].style.display = 'block';
}

// Task 10
//- Сворити масив не цензцрних слів.
//Сворити інпут текстового типу.
//Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//кинути алерт з попередженням.
//Перевірку робити при натисканні на кнопку

let bad = ['bla', 'ololo', 'fuck', 'ass', 'jerk', 'puta'];

let input = document.getElementsByName('body');
let checkBtn = document.getElementById('check');
checkBtn.onclick = () => {
  console.log(input[0].value);
 if (bad.some(word => word === input[0].value) === true) {
   alert(`I don't like this word!`);
 }
}


// Task 11
//-- взять массив пользователей
//Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать
// как вместе так и по отдельности.
//1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//2й - оставляет старше 29 лет включительно
//3й - оставляет тех у кого город киев
//Данные выводить в документ

let usersWithAddress = [
  { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
  { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
  { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
  { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
  { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
  { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
  { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
  { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
  { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
  { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
  { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];

let statusArr = usersWithAddress.filter(user => user.status === false);
let adultArr = usersWithAddress.filter(user => user.age >= 29);
let cityArr = usersWithAddress.filter(user => user.address.city === 'Kyiv');

let inputStat = document.getElementsByName('stat');
let inputAge = document.getElementsByName('ages');
let inputCity = document.getElementsByName('cities');

let checkBut = document.getElementById('btn');

checkBut.onclick = () => {
  if (inputCity[0].checked && inputAge[0].checked && inputStat[0].checked) {
    let arr3 = usersWithAddress.filter(user => user.age >= 29 && user.status === false && user.address.city === 'Kyiv');
    for (let user of arr3) {
      let li = document.createElement('li');
      li.innerText = JSON.stringify(user);
      document.body.appendChild(li);
    }
  } else  if (inputStat[0].checked && inputCity[0].checked) {
    let arr2 = usersWithAddress.filter(user => user.status === false && user.address.city === 'Kyiv');
    for (let user of arr2) {
      let li = document.createElement('li');
      li.innerText = JSON.stringify(user);
      document.body.appendChild(li);
    }
  } else   if (inputAge[0].checked && inputCity[0].checked) {
    let arr1 = usersWithAddress.filter(user => user.age >= 29 && user.address.city === 'Kyiv');
    for (let user of arr1) {
      let li = document.createElement('li');
      li.innerText = JSON.stringify(user);
      document.body.appendChild(li);
    }
  } else   if (inputAge[0].checked && inputStat[0].checked) {
    let arr = usersWithAddress.filter(user => user.age >= 29 && user.status === false);
    for (let user of arr) {
      let li = document.createElement('li');
      li.innerText = JSON.stringify(user);
      document.body.appendChild(li);
    }
  } else if (inputStat[0].checked) {
    for (let user of statusArr) {
      let li = document.createElement('li');
      li.innerText = JSON.stringify(user);
      document.body.appendChild(li);
    }
  } else if (inputCity[0].checked) {
    for (let user of cityArr) {
      let li = document.createElement('li');
      li.innerText = JSON.stringify(user);
      document.body.appendChild(li);
    }
  } else if (inputAge[0].checked) {
    for (let user of adultArr) {
      let li = document.createElement('li');
      li.innerText = JSON.stringify(user);
      document.body.appendChild(li);
    }
  }
}


// Task 12
//*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let a = document.getElementById('text');
a.onmousemove = (event) => {
  let color1 = event.clientX + 100;
  let color2 = event.clientY + 100;
  let color3 = color1 + color2;
  a.style.background = `rgb(${color1}, ${color2}, ${color3})`;
  a.style.cursor = 'pointer';
  a.style.fontWeight = `${color3 + 200}`;
}
*/

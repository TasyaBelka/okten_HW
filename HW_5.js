
// Task 1, 2
//-  Створити функцію (класс) конструктор для об'єкту який описує теги
//Властивості
//-назва тегу
//- опис його дій
//- масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//( -a, -div, -h1, -span, -input, -form, -option, -select)

function TegDescription(title, act, attr) {
  this.title = title;
  this.act = act;
  this.attr = attr;
}

class NewTegDescrip {
  constructor(title, act, attr) {
    this.title = title;
    this.act = act;
    this.attr = attr;    
  }
}

let attrArr = [
  {titleAttr : 'accesskey', actAttr : 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
  {titleAttr : 'class', actAttr : 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
  {titleAttr : 'hidden', actAttr : 'Скрывает содержимое элемента от просмотра.'},
];

let a = new TegDescription('a', 'Предназначен для создания ссылок...', attrArr);
let division = new TegDescription('div', 'Ппредназначен для выделения фрагмента документа с целью изменения вида содержимого....', attrArr);
let header = new TegDescription('h1', 'Представляет собой наиболее важный заголовок первого уровня', attrArr);
let span = new TegDescription('span', 'Предназначен для определения строчных элементов документа.', attrArr);
let newInput = new TegDescription('input', 'Предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', attrArr);
let newForm = new TegDescription('form', 'Устанавливает форму на веб-странице.', attrArr);
let newOption = new TegDescription('option', 'Oпределяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', attrArr);
let newSel = new TegDescription('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка...', attrArr);

let a1 = new NewTegDescrip('a', 'Предназначен для создания ссылок...', attrArr);
let division1 = new NewTegDescrip('div', 'Ппредназначен для выделения фрагмента документа с целью изменения вида содержимого....', attrArr);
let header1 = new NewTegDescrip('h1', 'Представляет собой наиболее важный заголовок первого уровня', attrArr);
let span1 = new NewTegDescrip('span', 'Предназначен для определения строчных элементов документа.', attrArr);
let newInput1 = new NewTegDescrip('input', 'Предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', attrArr);
let newForm1 = new NewTegDescrip('form', 'Устанавливает форму на веб-странице.', attrArr);
let newOption1 = new NewTegDescrip('option', 'Oпределяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', attrArr);
let newSel1 = new NewTegDescrip('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка...', attrArr);

console.log(a);
console.log(division);
console.log(header);
console.log(span);
console.log(newInput);
console.log(newForm);
console.log(newSel);
console.log(newOption);

// Task 6 
//-створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом//

class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}
class Prince {
  constructor(name, age, founded) {
    this.name = name;
    this.age = age;
    this.founded = founded;
  }
}

let prince = new Prince('eric', 22, 23);
console.log(prince);

let cinderList = [];

cinderList[0] = new Cinderella('Sandra', 23, 20);;
cinderList[1] = new Cinderella('Anna', 20, 24);
cinderList[2] = new Cinderella('Irla', 17, 23);
cinderList[3] = new Cinderella('Bruna', 18, 22.5);
cinderList[4] = new Cinderella('Kat', 19, 23.5);
cinderList[5] = new Cinderella('Melissa', 23, 24);
cinderList[6] = new Cinderella('Agness', 28, 25);
cinderList[7] = new Cinderella('Sonya', 18, 21);
cinderList[8] = new Cinderella('Valery', 16, 20);
cinderList[9] = new Cinderella('Frida', 16, 19);

console.log(cinderList);

for (let girl of cinderList) {
  if (girl.footSize === prince.founded) {
    console.log(`${girl.name} is ${prince.name}'s Cinderella!`);
  }
}

// Task 7
//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька 
//   яку він знайшов, та функцію "пошук попелюшки"
//-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Cinderela(name, age, footSize) {
  this.name = name;
  this.age = age;
  this.footSize = footSize;
}

function MyPrince(name, age, founded) {
  this.name = name;
  this.age = age;
  this.founded = founded;
}

let myPrince = new MyPrince('George', 25, 21);
console.log(myPrince);

let cinderella = [];

cinderella[0] = new Cinderela('Sandra', 23, 20);;
cinderella[1] = new Cinderela('Anna', 20, 24);
cinderella[2] = new Cinderela('Irla', 17, 23);
cinderella[3] = new Cinderela('Bruna', 18, 22.5);
cinderella[4] = new Cinderela('Kat', 19, 23.5);
cinderella[5] = new Cinderela('Melissa', 23, 24);
cinderella[6] = new Cinderela('Agness', 28, 25);
cinderella[7] = new Cinderela('Sonya', 18, 21);
cinderella[8] = new Cinderela('Valery', 16, 20);
cinderella[9] = new Cinderela('Frida', 16, 19);

console.log(cinderella);

for (let girl of cinderella) {
  if (girl.footSize === myPrince.founded) {
    console.log(`${girl.name} is ${myPrince.name}'s Cinderella!`);
  }
}

// Task 3
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, 
//  об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний
// об'єкт car

let someCar = new MakeNewCar('Skyline GT-R34', 'Nissan', 1998, 260, 3.0);

function addFunc(obj) {
  class newObj {
    constructor() {

      this.drive = function () {
        console.log(`We go at a speed of ${this.maxSpeed}km/h`);
      };
      this.info = function () {
        console.log(this.model);
        console.log(this.mfr);
        console.log(this.year);
        console.log(this.maxSpeed);
        console.log(this.enVolume);
      };
      this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
      }
      this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(this.year);
      }
      this.addDriver = function (driver) {
        this.driver = driver;
        console.log(this);
      }
    }
  }

  let newObject = new newObj(obj);
  return newObject;
}
let newSomeCar = Object.assign(someCar, addFunc());
console.log('the new object ', newSomeCar);

// Task 4
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, 
//   виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function MakeNewCar(model, mfr, year, maxSpeed, enVolume) {
  this.model = model;
  this.mfr = mfr;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.enVolume = enVolume;
  this.drive = function () {
    console.log(`We go at a speed of ${this.maxSpeed}km/h`);
  };
  this.info = function () {
    console.log(this.model);
    console.log(this.mfr);
    console.log(this.year);
    console.log(this.maxSpeed);
    console.log(this.enVolume);
  };
  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
    console.log(this.maxSpeed);
  }
  this.changeYear = function (newValue) {
    this.year = newValue;
    console.log(this.year);
  }
  this.addDriver = function (driver) {
    this.driver = driver;
    console.log(this);
  }
}

// Task 5
//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class MakeCar {
  constructor(model, mfr, year, maxSpeed, enVolume) {
    this.model = model;
    this.mfr = mfr;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.enVolume = enVolume;
    this.drive = function () {
      console.log(`We go at a speed of ${this.maxSpeed}km/h`);
    };
    this.info = function () {
      console.log(this.model);
      console.log(this.mfr);
      console.log(this.year);
      console.log(this.maxSpeed);
      console.log(this.enVolume);
    };
    this.increaseMaxSpeed = function (newSpeed) {
      this.maxSpeed += newSpeed;
      console.log(this.maxSpeed);
    }
    this.changeYear = function (newValue) {
      this.year = newValue;
      console.log(this.year);
    }
    this.addDriver = function (driver) {
      this.driver = driver;
      console.log(this);
    }
  }
}

let newCar = new MakeCar('Subaru WRX STI', 'Subaru', 2006, 280, 2.5);
console.log(newCar);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(30);
newCar.changeYear(2008);
newCar.addDriver({ name: 'Steve', age: 32, exp: '12 years' });

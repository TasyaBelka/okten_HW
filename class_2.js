/*
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr = ['a', 'b', 'c'];
for (let i = 1; i <=3; i++) {
  arr.push(i);
}
console.log(arr);

//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let Arr = [1, 2, 3];

Arr = Arr.reverse();
console.log(Arr);

//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let newArr = [1, 2, 3];
for (let j = 0; j < 3; j++) {
  newArr.push(j + 4);
}
console.log(newArr);

//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let otherArr = [1, 2, 3];
for (let j = 3; j > 0; j--) {
  otherArr.unshift(j + 3);
}
console.log(otherArr);

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let lang = ['js', 'css', 'jq'];
console.log(lang.shift());

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let newLang = ['js', 'css', 'jq'];
console.log(newLang.pop());

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

let numberArr = [1, 2, 3, 4, 5];
console.log(numberArr.slice(3, 5));

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

console.log(numberArr.slice(0, 2));

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

let spliced = numberArr.splice(3, 2);
spliced.unshift(numberArr.shift());

console.log(spliced);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let numberArray = [1, 2, 3, 4, 5];
numberArray.splice(3, 0, 'a', 'b', 'c');

console.log(numberArray);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let tasya = [1, 2, 3, 4, 5];
tasya.splice(1, 0, 'a', 'b');
tasya.splice(6, 0, 'c');
tasya.push('e');
console.log(tasya);

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let ranArr = [];
for (let i = 0; i < 10; i++) {
  ranArr.push(Math.floor(50*Math.random() + 1));
}
console.log(ranArr);
for (let j = 0; j < ranArr.length; j++) {
  if (ranArr[j]%2 === 0) {
    console.log(ranArr[j]);
  }
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
//   За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
//   За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let ranArray = [];
let copyArr = [];
let copyArr2 = [];

for (let i = 0; i < 10; i++) {
  ranArray.push(Math.floor(50*Math.random() + 1));
}
console.log(ranArray);

for (let j = 0; j < ranArray.length; j++) {
  copyArr.push(ranArray[j]);
}
console.log(copyArr);

for (let k = 0; k < ranArray.length; k++) {
  copyArr2[k] = ranArray[k];
}
console.log(copyArr2);

// ADDITIONAL

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
  //1. перебрати його циклом while
  //2. перебрати його циклом for

  let great = [2,17,13,6,22,31,45,66,100,-18];
  let f = 0;

  while (f < great.length) {
    console.log(great[f]);
    f++;
  }

  for (let i = 0; i < great.length; i++) {
    console.log(great[i]);
  }

  //3. перебрати циклом while та вивести  числа тільки з непарним індексом
  //4. перебрати циклом for та вивести  числа тільки з непарним індексом

  let t = 0;
  while (t < great.length) {
    if (t % 2 != 0) {
      console.log(great[t]);
    }
    t++;
  }

  for (let i = 0; i <great.length; i++) {
    if (i % 2 != 0) {
      console.log(great[i]);
    }
  }

  //5. перебрати циклом while та вивести  числа тільки парні  значення
  //6. перебрати циклом for та вивести  числа тільки парні  значення

  let z = 0;
  while (z < great.length) {
    if (great[z] % 2 === 0) {
      console.log(great[z]);
    }
    z++;
  }

  for (let j = 0; j < great.length; j++) {
    if (great[j] % 2 === 0) {
      console.log(great[j]);
    }
  }

  //7. замінити кожне число кратне 3 на слово "okten"
  for (let k = 0; k < great.length; k++) {
    if (great[k] % 3 === 0) {
      great[k] = 'okten';
    }
  }
  console.log(great);

  //8. вивести масив в зворотньому порядку.
  console.log(great.reverse());

  //9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

  let great1 = [2,17,13,6,22,31,45,66,100,-18];

  // 1, 2
  let len = great1.length;
  while (len - 1 >= 0) {
    console.log(great1[len - 1]);
    len--;
  }

  for (let i = great1.length - 1; i >= 0; i--) {
    console.log(great1[i]);
  }
  
  //3, 4
  let len1 = great1.length - 1;
  while (len1 >= 0) {
    if (len1 % 2 != 0) {
      console.log(great1[len1]);
    }
    len1--;
  }

  for (let j = great1.length - 1; j >= 0; j--) {
    if (j % 2 != 0) {
      console.log(great1[j]);
    }
  }

  //5, 6
  let length = great1.length - 1;
  while (length >= 0) {
    if (great1[length] % 2 === 0) {
      console.log(great1[length]);
    }
    length--;
  }

  for (let k = great.length - 1; k >= 0; k--) {
    if (great1[k] % 2 === 0) {
      console.log(great1[k]);
    }
  }

  //7 
  for (let f = great1.length - 1; f >= 0; f--) {
    if (great1[f] % 3 === 0) {
      great1[f] = 'okten';
    }
  }
  console.log(great1);
  

  //ADDITIONAL 1
  // створити пустий масив та :
//1. заповнити його 50 парними числами за допомоги циклу.

let bigArr = [];

while (bigArr.length < 50) {
  let a = Math.floor(100 * Math.random() + 1)
  if (a % 2 === 0) {
    bigArr.push(a);
  }
}
console.log(bigArr);

//2. заповнити його 50 непарними числами за допомоги циклу.

let bigArr1 = [];

while (bigArr1.length < 50) {
  let b = Math.floor(100 * Math.random() + 1)
  if (b % 2 != 0) {
    bigArr1.push(b);
  }
}
console.log(bigArr1);

//3. используя Math.random заполнить массив из ???(сколько хотите) элементов. (8 -- 732)
let arrAgain = [];

while (arrAgain.length < 15) {
  arrAgain.push(Math.random());
}
console.log(arrAgain);

let arrAgain1 = [];

while (arrAgain1.length < 15) {
  arrAgain1.push(Math.floor(732 * Math.random() + 8));
}
console.log(arrAgain1);

//2. вывести на консоль  каждый третий елемент
 for (let i = 1; i <= arrAgain1.length; i++) {
  if (i % 3 === 0) {
    console.log(arrAgain1[i - 1]);
  }
 }

//3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.

for (let i = 1; i <= arrAgain1.length; i++) {
  if (i % 3 === 0 && arrAgain1[i - 1] % 2 === 0) {
    console.log(arrAgain1[i - 1]);
  }
 }

 // 4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и записать их в другой массив.

 let newArrAgain = [];

 for (let i = 1; i <= arrAgain1.length; i++) {
  if (i % 3 === 0 && arrAgain1[i - 1] % 2 === 0) {
    newArrAgain.push(arrAgain1[i - 1]);
  }
 }
 console.log(newArrAgain);

 //5. Вывести каждый елемент массива у которого соседний с права элемент - парный
 
for (let i = 0; i < arrAgain1.length; i++) {
  if (arrAgain1[i + 1] % 2 === 0) {
    console.log(arrAgain1[i]);
  }
 }

 //  E масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

 let cash = [100,250,50,168,120,345,188];
 let totalSum = 0;

 for (let i = 0; i < cash.length; i++) {
   totalSum += cash[i];
 }
 const middle = (totalSum / cash.length).toFixed(2);
 console.log(middle);

 //3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

 let fiveArr = [];
 while (fiveArr.length < 10) {
   fiveArr.push(Math.floor(100 * Math.random() - 50));
 }
 console.log(fiveArr);

 for (let i = 0; i < fiveArr.length; i++) {
   fiveArr[i] *= 5;
 }
 console.log(fiveArr);

 //4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
 //додати його в інший масив.

 let someArray = [1, 'a', 'b', 2, 3, true, 4, 'c', 5, 'e'];
 let someNum = [];
 for (let i = 0; i < someArray.length; i++) {
   if (typeof someArray[i] === 'number') {
     someNum.push(someArray[i]);
   }
 }
 console.log(someNum);
 */
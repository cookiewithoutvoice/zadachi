#1
var a=prompt('введите первое число: ');
var b=prompt('введите второе число: ');
alert(Math.min(a,b))

#2
var a=prompt('введите число: ');
var b=prompt('введите значение степени: ');
alert(Math.pow(a,b));

#3
let a = +prompt('введите первое число: ');
let b = +prompt('введите второе число: ');
let o = prompt('введите знак: ');

function calcResult(a, b, o) {
  switch (o) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
}

alert(calcResult());

#4
let a = prompt('введите число: ');
let isPrime = true;

if (a <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${a} простое число` : `${a} не является простым числом`);

#5
let a = prompt('введите число от 1 до 9: ')
for (a; a <= 9;  a += 1) {
  for (let i = 1; i <= 9; i += 1) {
    console.log(`${a} x ${i} = ${a * i}`);
  }
  console.log();
}

#6
function customMod(dividend, divisor) {
  if (divisor === 0) {return NaN;}
  const quotient = Math.trunc(dividend / divisor);
  const remainder = dividend - (divisor * quotient);
  return remainder;
}

#7
var a=prompt('введите первое число: ');
var b=prompt('введите второе число: ');
var c=prompt('введите третье число: ');
var d=prompt('введите четвёртое число: ');
var e=prompt('введите пятое число: ');
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);
e = parseInt(e);
alert(a+b+c+d+e);

#8
var a=prompt('введите первое число: ');
var b=prompt('введите второе число: ');
var c=prompt('введите третье число: ');
var d=prompt('введите четвёртое число: ');
var e=prompt('введите пятое число: ');
alert(Math.max(a,b,c,d,e));

#9
let a = prompt('введите начало диапазона: ')
let b = prompt('введите конец диапазона: ')
function printEvenOrOdd(a, b, showEven) {
  const parity = showEven ? 0 : 1;
  for (let i = a; i <= b; i++) {
    if (i % 2 === parity) {
      console.log(i);
    }
  }
}

#10
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function getDaysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    return 31;
  }
  return 30;
}
function getNextDay(day, month, year) {
  if (typeof day !== 'number' || typeof month !== 'number' || typeof year !== 'number') {
    return 'Ошибка: день, месяц и год должны быть числами';
  }
  if (day < 1 || month < 1 || month > 12 || day > getDaysInMonth(month, year)) {
    return 'Ошибка: некорректная дата';
  }
  day++;
  if (day > getDaysInMonth(month, year)) {
    day = 1;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}.${formattedMonth}.${year}`;
}
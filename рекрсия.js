#1
function factorial(a) {
  if (a === 0 || a === 1) {
    return 1;
  }
  else {
    return a * factorial(a - 1);
  }
}

#2
function printRangeAsc(start, end) {
  if (a > b) {
    return;
  }
  console.log(a);
  printRangeAsc(a + 1, b);
}
printRangeAsc(1, 5);

function printRangeDesc(a, b) {
  if (a > b) {
    return;
  }
  printRangeDesc(a + 1, b);
  console.log(a);
}
printRangeDesc(1, 5);

#3
function reverseNumber(num, reversed = 0) {
  if (num === 0) {
    return reversed;
  }
  return reverseNumber(Math.floor(num / 10), reversed * 10 + num % 10);
}


#4
function sumDigits(num) {
  if (num < 10) {
    return num;
  }
  return (num % 10) + sumDigits(Math.floor(num / 10));
}

#5
function nestedParentheses(n, current = 0) {
  if (current >= n) {
    return '';
  }
  return `(${nestedParentheses(n, current + 1)})`;
}
function printNestedParentheses(n) {
  if (n < 0) {
    console.log("глубина не может быть отрицательной");
    return;
  }
  console.log(nestedParentheses(n));
}
var i = 1;
while (i < 13) {
  console.log(i + "월");
  i++;
}

console.log("----------------------------------------");

var sum = 0;
var i = 1;
while (i < 11) {
  sum = sum + i;
  i++;
}
console.log(sum);

console.log("----------------------------------------------");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("단수를 입력하세요:", function (dan) {
  var i = 1;
  while (i < 10) {
    console.log(dan * 1);
    i++;
  }
});

console.log("--------------------------------------------");

var value = 0;
while (true) {
  if (value > 100) {
    break;
  }
  console.log("value의값:" + value);
  value++;
}
console.log("value는 100보다 크다.");

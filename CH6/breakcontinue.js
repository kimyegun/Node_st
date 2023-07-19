let value = 0;
while (true) {
  if (value > 100) {
    break;
  }
  console.log("value의값:" + value);
  value++;
}
console.log("value는 100보다 크다.");

console.log("-----------------------------------------");

var dan = 2;
while (dan < 10) {
  let num = 1;
  while (num < 10) {
    console.log(dan + "*" + num + "=" + dan * num);
    num++;
  }
  dan++;
}

console.log("-----------------------------------------------");

let dan = 2;
while (dan < 10) {
  let num = 1;
  while (num < 10) {
    if (dan == 6 && num == 1) break;
    console.log(dan + "*" + num + "=" + dan * num);
    num++;
  }
  dan++;
}

console.log("-------------------------------------------------");

let dan = 2;
outside: while (dan < 10) {
  var num = 1;
  while (num < 10) {
    if (dan == 6 && num == 1) break outside;
    console.log(dan + "*" + num + "=" + dan * num);
    num++;
  }
  dan++;
}

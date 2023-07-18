var a = 10;
var b = 20;
console.log(a > b);
console.log(a == b);
console.log(a != b);

console.log("-----------------------------------------------");

console.log("A" < "B");
console.log("ABCD" > "ABDC");

console.log("----------------------------------------------");

var size1 = 1024;
var size2 = "1024";
console.log(size1 == size2);
console.log(size1 === size2);

console.log("----------------------------------------------");

console.log(300 > "200");
console.log("10" > 9);
console.log(true == 1);
console.log(true == "1");
console.log(false == 1);
console.log(false == "0");
console.log(2 == "002");

console.log("------------------------------------------------");

console.log(null == undefined);
console.log(null === undefined);

console.log("-------------------------------------------------");

console.log(null == 0);
console.log(undefined == 0);

console.log("-----------------------------------------------------");

var age = 30;
var result = age >= 19 ? "성인입니다." : "더 자라렴";
console.log(result);

console.log("--------------------------------------------------");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("------------------------------------------");

var id = "jamsuham";
var pw = "1111";
var result =
  id == "jamsuham" && pw == "1111"
    ? "로그인되었습니다."
    : "아이디 또는 비번이 틀렸습니다.";
console.log(result);

console.log("-------------------------------------------------");

console.log(false && "jamsuham");
console.log(true && "jamsuham");
console.log("jamsuham" && false);
console.log("jamsuham" && "1111");
console.log(null && false);

console.log("------------------------------------------------");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("---------------------------------------------------");

var age = 30;
var result = age > 65 || age < 7 ? "지원 대상입니다." : "지원 대상이 아닙니다.";
console.log(result);

console.log("--------------------------------------------------");

console.log(false || "jamsuham");
console.log(true || "jamsuham");
console.log("jamsuham" || false);
console.log("jamsuham" || true);
console.log("jamsuham" || "1111");
console.log(null || false);

console.log("---------------------------------------------------");

console.log(!false);
console.log(!true);

console.log("-----------------------------------------------");

console.log(!"jamsuham");
console.log(!null);
console.log(!0);

console.log("-----------------------------------------------");

var id = "jamsuham";
var result =
  id !== null && id !== undefined
    ? "아이디가 입력되었습니다."
    : "아이디가 입력되지 않았습니다.";
console.log(result);

console.log("-------------------------------------------------");

var id = "jamsuham";
var result =
  id ?? null ? "아이디가 입력되었습니다," : "아이디가 입력되지 않았습니다.";
console.log(result);

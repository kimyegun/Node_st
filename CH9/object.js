let dic = {
boy : "소년",
girl : "소녀",
friend : "친구",
};

delete dic.girl;
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

 console.log('--------------------------------------');

 const dic1 = {
    present : "현재",
 };

 console.log(dic.present);
 dic.present = "선물";
 console.log(dic.present);

 console.log("--------------------------------------");

 const unit = {
    attack : function(weapon) {
        return `${weapon}으로 공격한다.`;
      }
 }

 console.log(unit.attack("주먹"));
 console.log(unit.attack("총"));

 console.log(dic['boy']);
 console.log(dic['girl']);
 console.log(dic['friend']);

 console.log("------------------------------------");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

 let dic = {
    boy : "소년",
    girl : "소녀",
    friend  : "친구"
 }

 rl.question("찾을 단어를 입력하세요:", function(key) {
    let word = key;
    console.log(dic[word]);

    rl.close();
 })

const readline = require("readline");
const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl1.question("다이쓰! 무조건 천원, 상품입력?", function(obj){
    let basket = {
        [obj] : "1000원",
    }
    console.log(basket[obj]);

    rl.close();
})

let user = {
    id : "jamsu",
    pw : "1111",
    name : "1ch",
    mobile : "010-4477-XXXX",
    country: "대한민국"
}

for(let info in user){
    console.log(`${info} : ${user[info]}`);
}

let plus = (a,b)=>a + b;

let result = plus(10,20);
console.log('두 수의 합 : ' + result);

let plus1 = a => a+1;

let result1 = plus1(10);
console.log('값의 1증가 : ' + result1);

let plus2 = ()=> "플러스";

let result2 = plus2();
console.log('A' + result2);

const color = ['red','green','blue'];

let r = color[0];
let g = color[1];
let b = color[2];

console.log(r);
console.log(g);
console.log(b)





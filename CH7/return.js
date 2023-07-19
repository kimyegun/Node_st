function plus(a,b)
{
    return(a+b);
}
var result = plus(10,20)
console.log('두수의 합:'+result);

console.log("------------------------------------------------------");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function checkAge(age){
    if(age>19){
        return true;
    } else {
        return false;
    }
}

rl.question("나이를 입력하세요:",function(nai){
    if(checkAge(nai)){
        console.log("입장 가능합니다.");
    }else{
        console.log("입장을 불허합니다.");
    }
    rl.close();
})

function Week()
{
    console.log("Mon");
    console.log("Tue");
    console.log("Wed");
    return;
    console.log("Thr");
    console.log("Fri");
    console.log("Sat");
    console.log("Sun");
}
console.log(Week() === undefined);

console.log("------------------------------------------");

function nickName()
{
    console.log("이예쁜");
}
nickName();


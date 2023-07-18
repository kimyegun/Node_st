const readline = require('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('나이를 입력하세요.:' ,function(age){
    if(age >= 19 && age<= 100){
        console.log("성인입니다.");
    }
    else if(age >=0 && age<19){
        console.log("미성년자입니다.");
    }else{
        console.log("값이 유효하지 않습니다.");
    }
    rl.close();
})
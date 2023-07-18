const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('점수를 입력하세요: ',function(score){
    if(score>=60 && score<=100){
        console.log("합격입니다.");
    }
    else{
        console.log("불합격입니다.");
    }
    rl.close();
})
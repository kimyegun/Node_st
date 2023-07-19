function account(userId)
{
    var savedUser='이은성';
    if(userId==savedUser){
        console.log('반갑습니다.'+userId+'님');
    }else{
        console.log("로그인 실패했습니다.");
    }
}
account('이은성');

console.log("---------------------------------------------------");

var userName='이창현'; //전역변수
var userPW='1111';

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '이창현';
    var savedPw = '1111';

    userpw = userpw || '1111';

    if(userId == savedName);
    {
       if(userpw==savedPw)
       {
          console.log('반갑습니다.'+userId+'님');
        }
    }
}
account(userName);
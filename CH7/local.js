let savedUser ='이은성';
function account()
{
    var  savedUser = '이귀엽';
    console.log("반갑습니다."+savedUser+"님");
   
}
account();
console.log("또 오셨네요."+savedUser+"님");

console.log("--------------------------------------------------------");

function naver()
{
    console.log('naver 함수 진입');
    var saveUser = '이귀엽';
    google();
    console.log('naver 함수 탈출');
}
function google()
{
    console.log("google 함수 진입");
    var saveUser="어여쁜";
    console.log('google 함수 탈출');
}
naver();

console.log("-----------------------------------------------------");


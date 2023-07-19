var nickName = function()
{
    console.log("이예쁜");
}
nickName();

console.log('------------------------------------------');

var nickName = function()
{
    console.log("이예쁜");
};
nickName();

nickName = function()
{
    console.log("이귀엽")
};
nickName();

console.log("------------------------------------------------");

var nickName = function()
{
    console.log("이예쁜");
}

var userName = nickName;

userName();
nickName();
var pro1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('success');
    },1000);
});
pro1.then(function(result){
    console.log('result', result);
})
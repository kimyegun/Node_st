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

 let dic1 = {
    present : "현재",
 };


 dic1 = { };
 console.log(dic.present);
 dic.present = "선물";
 console.log(dic.present);
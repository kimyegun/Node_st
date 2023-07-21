const color = ['red', 'green', 'blue'];

let r = color[0];
let g = color[1];
let b = color[2];

console.log(r);
console.log(g);
console.log(b);

let user = {
    id : 'jamsuham',
    pw : '1234',
    name : '잠수함',
    age : 30,
};

let id = user.id;
let pw = user.pw;
let name = user.name;
let age = user.age;

console.log(id);
console.log(pw);
console.log(name);
console.log(age);

console.log("----------------------------------");

const color1 = ['red', 'green', 'blue'];
let [q,w,e] = color1;

[e,w,q] = [q,w,e]
console.log(q);
console.log(w);
console.log(e);

console.log('---------------------------------------');

[b, g, r] = ['red', 'green', 'blue']
console.log(r);
console.log(g);
console.log(b);

console.log('-------------------------------');

const [j,k,l] = ['C#', 'javascript'];
console.log(j);
console.log(k);
console.log(l);

console.log('---------------------------------');

const [y,u,i = 'C언어'] = ['C#', 'javascript'];
console.log(y);
console.log(u);
console.log(i);

const [o, , n,m] = ['C#', 'javascript', 'python', 'react'];
console.log(a);
console.log(c);
console.log(d);

const [t,h,...rest] = ['C#','javascript','python','react','C++'];
console.log(a);
console.log(b);
console.log(rest.length);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);

const arr1 = ['C#', 'javascript'];
const arr2 = ['python', 'react', 'C++'];
const arr3 = [...arr1, ...arr2];

console.log(arr3)

console.log('-----------------------------------');




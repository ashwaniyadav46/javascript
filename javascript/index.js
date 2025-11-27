console.log("hello world")
let a=10;
console.log(a)

var name="ashwani";
var age=20;
console.log(name);
console.log(age);
console.log("my name is"+name+"my age is "+age); 

console.log('my name is ${name} and my age is ${age}');
let b="delhi";
b="lucknow";
console.log(b);
let s=true;
console.log(s);
console.error("this is error");

console.warn("tis is warning");
console.info("this is info");
console.debug("this is debug");
console.table({name:"ashwani",age:20});
console.clear();
for(let i=0;i<3;i++){
    console.log(i);
}
let obj={name:"ashwani",age:21,city:"delhi"};
let arr=[10,20,30,40,50];
console.log(typeof(arr));
let x=5;
let y=3;
console.log(x/y);
let day=3;
switch(day){
    case 1:
        console.log("monday"); 
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    default:
        console.log("invalid day");
}
let arr1=[10,20,30,40,50];
for(let vaue of arr1){
    console.log(vaue);
}
for (let key in obj){
    console.log(key +":"+obj[key]);
    console.log(`${key}:${obj[key]}`);
}
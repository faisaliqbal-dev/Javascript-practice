let firstname = "faisal";
console.log(firstname);
firstname = "iqbal";
console.log(firstname);
let secondname = "abcdefg ";
console.log(secondname.length);
secondname = (secondname.trim());
console.log(secondname.length);
console.log(secondname.toUpperCase());
secondname = secondname.slice(1, 4);
console.log(secondname);

let a = 20;
console.log(typeof (a));
let b = "asus";
console.log(typeof b);
a = (a + "");
console.log(typeof (a));
b = (+b);
console.log(typeof (b));


let string1 = "faisal";
let string2 = "iqbal";
let string3 = string1 + " " + string2;
console.log(string3);

let age = 20 ;
let names = "faisal";
let aboutme = `my name is ${names} and my age is ${age}` ;
console.log(aboutme);
const mamu = "bhanja";
console.log(mamu);


let d;
console.log(typeof d);

let f = 1234567890123400000004893489348948n;
let m = 1n;
console.log(f + m);

let num1 = 10;
let num2 = 10;
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 !== num2);

let num3 = 19;
console.log(num3 % 2);

let x = 17;
if (x >= 18) {
    console.log("you are eligible");

} else {
    console.log("sorry,you are not eligible");
}

let num4 = 19;
if (20 % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}

let X = "";
if (X) {
    console.log(X);
} else {
    console.log("empty")
}

let ag=14;
let drink="";
if (ag>=13){
    console.log("coffee");
}else{
    console.log("milk")
}
 
let Z = 11 ;
let drinks = Z>=12 ? "coffee" : "milk" ;
console.log(drinks);
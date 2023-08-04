let t;

console.log(t);
t = 98;


let a = undefined;
let b = 123;

let nb = a ?? b;
console.log(nb);



let ab = [567 , 678 , 456];
let ds = Array.isArray(ab);
console.log(ds);

const yup = "kr";

yup.forEach(function (val , index , array){
    console.log("krish" , "viren" , "sanket");
});
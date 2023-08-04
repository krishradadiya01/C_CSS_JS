let a = ["krish" , "sanket" , "viren"];

a.forEach(function (value , index , wholearray){
    console.log(value , index);
})




let k = [12 , 45 , 32 , 56 , 12];

let s = k.map(ting);

function ting(val , index ,iop)
{
    return val + index;
}
console.log(s);





let b = [223 , 45 ,77 , 88, 75];

let d = b.filter(ufo);

function ufo(val)
{
    return val > 80;
}
console.log(d);





const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


let red = new Date()
let none = months[red.getMonth()];
console.log(none);
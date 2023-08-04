// let a = 89;
// let q = Number.MAX_VALUE;
// console.log(q);





// let you = ["krish" , "leis" , "pop" , "ikl"];
// you.push("popop");
// console.log(you);


// let hji = ["apple" , "grapes" , "pineapple" , "orange"];
// hji.splice(1 , 1);
// hji.splice(2 , 1);
// hji.splice(1 , 0 , "Mango");
// hji.splice(3, 0 , "Carpet");
// console.log(hji);


// let o = ["crh" , "aui" , "dpo" , "bop"];
// o.reverse();
// o.sort();
// console.log(o);


// let sujid = [23 , 566 , 233 , 466 , 789];
// sujid.sort(function (a , b){return a - b});
// console.log(sujid);



// let hubu = [23 , 46 , 23 , 789];
// console.log(Math.max.apply(null , hubu));



// const sd = new Set();

// let w = 22;
// let v = 23;
// let z = 24;

// sd.add(w);
// sd.add(v);
// sd.add(z);

// console.log(sd);







// let ae = undefined - null;
// console.log(typeof ae);

// let sa = [13, 46, 6];
// console.log(typeof sa);

// let po = Number(Date());
// console.log(typeof po);

// let ol = Number(true)
// console.log(ol)


// let name = ["krish" , "sanket" , "viren"];

// name.forEach(function(val , index , array){
//     console.log(array);
// })


// let kaj = [2 ,3 , 3, 4];
// let foji = kaj.reduce(func);

// function func(val , total)
// {
//     return total + val
// }

// console.log(foji);




// const wp = {
//     fname: "krish" , 
//     sname: "radadiya" , 
//     fullname: function()
//     {
//         return this.fname + " " + this.sname;
//     }
// };

// const tp = {
//     fname: "sanket" , 
//     sname: "talaviya"
// };


// const lp = wp.fullname.bind(tp);
// console.log(lp());



// let jio = [56 , 78 , 56 ,67];
// console.log(Math.max.apply(null , jio));


// let cop = Array.from("sdfghjk");
// console.log(cop);









// function dtls(krish , radadiya) {
//     this.fname = krish;
//     this.sname = radadiya;
// }

// const p1 = new dtls("divyesh" , "radadiya");
// const p2 = new dtls("viren" , "radadiya");
// const p3 = new dtls("sanket" , "talaviya");

// console.log(p1.fname + p2.sname + p3.fname);







// function details(color , size , backgroundcolor)
// {
//     this.c = color;
//     this.s = size;
//     this.b = backgroundcolor;
// };

// const picture1 = new details("Red" , "2030px" , "Yellow");
// const picture2 = new details("Yellow", "2050px", "Blue");
// const picture3 = new details("Blue", "3200px", "Pink");
// const picture4 = new details("Orange", "2040px", "Green");
// const picture5 = new details("Black", "1200px", "Golden");

// console.log(picture1.c + picture2.s + picture3.b + picture4.c + picture5.s);












// function moy()
// {
//     let joy = 789;
//     console.log(joy)
// }

// function loy()
// {
//     moy();
// }

// loy();




// function eddie()
// {
//     let jio = "krish radadiya"

//     function moil()           // moil is Closure
//     {
//         console.log(jio);
//     }
//     jio = "sanket";
//     return jio;
// }

// let nolan = eddie();
// console.log(nolan);



// let hjio = "mongo db";

// function kla()
// {
//      let ed = 90;

//      function yuo()
//    {
//      console.log(ed , hjio);
//      return yuo;
//    }
//    yuo();
// }

// kla();













// setTimeout(crisu, 5000 , 9 , 8)

// function crisu(a, b){
//    console.log(a + b);
// };




// setTimeout(function jhi()
// {
//     console.log("krish");
    
// } , 2000);


class Car
{
   constructor(fname , sname)
   {
      this.firstName = fname;
      this.secondName = sname;
   }
}

const person1 = new Car("krish" , "radadiya");
const person2 = new Car("sanket" , "talaviya");


console.log(person1.firstName + " " + person2.secondName);










// class Math
// {
//     constructor(name , year)
//     {
//         this.n = name;
//         this.y = year;
//     }

//     age()
//     {
//         const date = new Date();
//         return date.getFullYear() - this.y;
//     }
// }


// const key = new Math("Ferrari" , 2013);

// console.log(key.age());



// let tome = function (hbi)
// {
//     return hbi();
// }

// let dome = function ()
// {
//     console.log("hello");
// }

// dome(tome);




// function x(y)
// {
//   console.log("x");
//   y()
// }



// x(function y()
// {
//     console.log("y");
// });










// function ola(x , y)
// {
//     let a = Math.abs(x - 100);
//     let b = Math.abs(y - 100);

//     if (a <= b) {
//         return x;
//     }
//     else {
//         return y;
//     }
// }

// let hun = ola(99  , 100);
// console.log(hun);



const gh = {name: "krish" , sname: "radadiya"}

for(let c in gh)
{
   console.log(gh[c])
}




function hji(some)
{
   console.log(some);
}

function saab()
{
   let sab = 12;
   hji(sab);
}

saab();
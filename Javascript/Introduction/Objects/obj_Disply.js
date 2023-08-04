const sd = {
  name: "krish",
  rollno: 21,
  movie: "Zombieland",
};


let m = "";
for(let x in sd)
{
   m += sd[x] + " ";
};

console.log(m);











const fg = {
    fname: "krish" , 
    sname: "radadiya" , 
    full: "krish radadiya"
};

const rt = Object.values(fg);
console.log(rt);








const fgo = {
  fname: "krish",
  sname: "radadiya",
  full: "krish radadiya" , 
  today: new Date()
};

const rto = JSON.stringify(fgo);
console.log(rto);








const we = {
    fname: "luca" , 
    sname: "Modric" , 
    no: 23 ,
    krish: function op(){return 34567}
};

we.krish = we.krish.toString();

console.log(JSON.stringify(we));







const ko = ["krish" , "mojo" , "jhan" , "OPPO"];
console.log(JSON.stringify(ko));
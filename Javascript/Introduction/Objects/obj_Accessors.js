const kilo = {
    fname: "krish" , 
    sname: "radadiya" , 
    rollno: 24567 , 
    get no()
    {
        return this.rollno + this.sname;
    }
};

console.log(kilo.no);






const kilo2 = {
  fname: "krish",
  sname: "radadiya",
  rollno: 24567,
};

console.log(kilo2.rollno);







// const kilo3 = {
//   fname: "sanket",
//   sname: "talaviya",
//   rollno: 54,
//   set lang(lang)
//   {
//      return this.rollno = lang.toUppercase();
//   }
// };

// kilo3.lang = "German"

// console.log(kilo3.rollno);





const kilo5 = {
  fname: "sanket",
  sname: "talaviya",
  rollno: 54,
}

kilo5.rollno = "krish";

console.log(kilo5.rollno);
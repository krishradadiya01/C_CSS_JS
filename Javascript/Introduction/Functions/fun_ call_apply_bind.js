

// Call ---------------------------------------------------------------

const zombie = {
  fullname: function (lname, city) {
    return this.fname + " " + this.sname + " " + lname + " " + city;
  }
};

const p1 = {
  fname: "krish",
  sname: "radadiya",
};

const p2 = {
  fname: "sanket",
  sname: "talaviya",
};

const mip = zombie.fullname.call(p2 , "oslo" , "linux");
console.log(mip);







// Apply -------------------------------------------------------------------

const topi = {
  name: function (are, mocu) {
    return this.oppen + " " + this.close + " " + are + " " + mocu;
  }
};

const k1 = {
  oppen: "krish",
  close: "radadiya",
};

const k2 = {
  oppen: "sanket",
  close: "talaviya",
};

console.log(topi.name.apply(k1, ["mucu", "pocu"]));




console.log(Math.max.apply(null, [3456, 5678, 578, 90]));
console.log(Math.min.apply(null, [3456, 5678, 578, 90]));







// Bind ----------------------------------------------------------------------

const oppenheimar = {
  come: function (lname, city) {
    return this.fname + " " + this.sname + " " + lname + " " + city;
  }
};

const l1 = {
  fname: "krish",
  sname: "radadiya"
};

const l2 = {
  fname: "sanket",
  sname: "talaviya"
};

const neil = oppenheimar.come.bind(l2 ,"Cillian" , "Murphy");
console.log(neil());





const op = ["des" , "pol" , "asd"]
const uj = ["frogg", "sad", ...op , "zombie"];
console.log(uj);




const ds = ["krish" , "radadiya" , "sanket"];
const jk = ["oppenheimer" , "red" , ...ds];
console.log(jk);






function saf()
{
   const df = ["ri" , "kloik" , "uytfg"];
   const hji = ["krish" , "ope" , ...df , "plkol"]
   return hji;
}

let gi = saf()
console.log(gi)
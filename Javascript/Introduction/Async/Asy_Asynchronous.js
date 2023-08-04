// setTimeout(krish, 5000);

// function krish() {
//   console.log("I AM INVITBLE");
// }

// setInterval(myfunc, 1000);

// function myfunc() {
//   let top = new Date();
//   console.log(
//     top.getHours() +
//       ":" +
//       top.getMinutes() +
//       ":" +
//       top.getSeconds() +
//       ":" +
//       top.getMilliseconds()
//   );
// }



// setInterval(mongo, 1000);

// function mongo() {
//   let f = new Date();
//   console.log(
//     f.getHours() +
//       ":" +
//       f.getMinutes() +
//       ":" +
//       f.getSeconds() +
//       ":" +
//       f.getMilliseconds()
//   );
// }


function jiko(){

for(var il = 1; il <= 5; il++){
  function noise(il)
  {
     setTimeout(function () {
       console.log(il);
     }, il * 1000);
}
   noise(il);
}
}

jiko();











function jeko()
{
  var a = 19;
  function lol()
  {
    console.log(a);
  }
  return lol;
}

jeko()();
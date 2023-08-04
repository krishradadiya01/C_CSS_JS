// // const a = 0;

// // for (let index = 0; index < 100; index++) {
// //     if (index == 23) {
// //         continue;
// //     }
// //     console.log(index);
// // }

// // const a = {
// //     fname: "krish" ,
// //     sname: "radadiya" ,
// //     fullname: "krish radadiya"
// // };

// // console.log("your full name is " + a.fullname);

// // let map = new Map()

// // map.set("krish" , "radadiya");
// // map.set("sanket" , "talaviya");

// // for(let [key , value] of map)
// // {
// //     console.log(key , value)
// // }

// const f = ["krish", "radadiya", "parth"];

// let r = f.forEach(a);

// function a(value, index, array) {
//   console.log(index + " " + array);
// }

const a = new Promise((resolve, reject) => {
  let s = 2 + 2;

  if (s == 4) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

a.then((message) => {
  console.log("Message is" + message);
});

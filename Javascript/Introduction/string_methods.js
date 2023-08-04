let text1 = "Virat Kohli";
let one = text1.slice(2, 8);

console.log(one);

let two = text1.substring(3, 9);

console.log(two);

let three = text1.slice(7);

console.log(three);

let four = text1.substring(7);

console.log(four);

let five = text1.slice(-4);

console.log(five);

let six = text1.substring(-7);

console.log(six);



let s = "9";
let v = s.padStart(5 , "1000");
console.log(v);


let n = "5";
let b = n.padEnd(8, "955");
console.log(b);


let d = "krish           ";
let y = d.trimEnd();
console.log(y);


let p = "           krish";
let q = d.trimStart();
console.log(y);


let h = "Hello Krish";
let char = h.charAt(0);
console.log(char);


let j = "IM KRISH";
let uio = j.charCodeAt(6)
console.log(uio);



let l = "Hello Krish";
let iuy = l[0];
console.log(iuy);


let mr = "krish is good boy";
let di = mr.replace("krish" , "sanket");
console.log(di);



let a = "My Name Is Krish";
let r = a.lastIndexOf("s");
console.log(r);


let tip = "Fan of Robert downy jr. and also Fan of downy Harmsworth";
let ip = tip.indexOf("downy" , 12);
console.log(ip);

let krish = "I am a software engineer and i want to go with Frontend Development.";
let ijeck = krish.match(/i/gi);
console.log(ijeck.length + " " + ijeck);



// let yt = "He Said One Day You Will Leave This World Behind. HE he hE";
// let ufo = yt.matchAll("he");
// console.log(Array.from(ufo));


let u = "So live a life you will remember."
let beta = u.includes("life");
console.log(beta);



let yui = "Memories Bring Back Memories."
let hui = yui.startsWith("M");
console.log(hui);


let hp = "2 days raiming in Ind VS Wi Test Series."
let hj = hp.endsWith(".");
console.log(hj);



let api = `187,
Shantiniketan Society,
Punagam,
Surat.`;
let nopem = `${api}`;
console.log(nopem);


let user = 7;
let prize = 9;
let total = `Total : ${(user + prize) * user * prize}`
console.log(total);
 

let mp = `The Value of PI is ${Math.PI}`
console.log(mp)
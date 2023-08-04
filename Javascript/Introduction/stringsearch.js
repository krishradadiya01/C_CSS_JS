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
const red = ["krish" , "radadiya" , "sanket"];
console.log(red);



const kiol = '["krish", "siraj" , "virat"]'
const lope = JSON.parse(kiol);
console.log(lope);




const jole = '["krish", "siraj" , "virat"]';
const west = JSON.parse(jole);
console.log(west[2]);




const mongo = '{"car": "Ferrari" , "country": "France" , "State": ["Gujarat" , "Maharashtra" , "Goa"]}';
const yupi = JSON.parse(mongo);
console.log(yupi.State[1]);




const hope = '{"Language": "Gujarati" , "City": "surat" , "Area": "Punagam" , "bike": ["SUZUKI" , "KAWASAKI" , "HERO"]}';
const gone = JSON.parse(hope);

let fog = "";
for(let v in gone.bike)
{
    fog += gone.bike[v] + " ";
}

console.log(fog);






const o = '{"Language": "Gujarati" , "City": "surat" , "Area": "Punagam" , "bike": ["SUZUKI" , "KAWASAKI" , "HERO"]}';
const p = JSON.parse(o);


let q = "";
for (let i = 0; i < p.bike.length; i++) {
   q += p.bike[i] + " "
};

console.log(q);
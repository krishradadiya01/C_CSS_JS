
const a = {"fname": "krish" ,"sname": "radadiya" ,"jno": 18};

console.log(a.jno);




const b = '{"fname": "Sanket" , "age": 17 , "car": "bugatti"}'
const c = JSON.parse(b);
console.log(c.car);




const d = '{"fname": "Sanket" , "age": 17 , "car": "bugatti"}';
const e = JSON.parse(d);
console.log(c["fname"]);




const f = '{"fname": "Christiano" , "age": 37 , "car": "bugatti"}';
const g = JSON.parse(f);

let txt = "";
for(let x in g)
{
    txt += g[x] + ","
};

console.log(txt);
const quic = ["jeko" , "red" , "blue" , "pink"];
const qwe = quic.sort();
console.log(qwe);


const iop = ["krish" , "reds" , "oiu" , "ola"];
const wer = iop.reverse();
console.log(wer);


const ref = [23 , 12 , 70 , 98 , 81];
const ab = ref.sort();
console.log(ab);


const a = "21";
const b = "1000";
if (a < b) {
    console.log("TRUE");
} else
{
    console.log("FALSE");
}

const oiu = [122 , 44 , 5 , 904 , 899];
oiu.sort(function(a , b){return a - b});
console.log(oiu);


const oil = [122 , 44 , 5 , 904 , 899];
oil.sort(function(a , b){return b - a});
console.log(oil);


const arrey = [12 , 34 , 56 , 778];
console.log(Math.max.apply(null , arrey));

const cricket = [12 , 34 , 56 , 778];
console.log(Math.min.apply(null, cricket))

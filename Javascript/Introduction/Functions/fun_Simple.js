
// Functions using simple Method

function krish(val1 , val2){return val1 * val2}
console.log(krish(21 , 9));



// Function using built-in function constructor.

const ans = new Function("x" , "y" , "return x * y");
console.log(ans(4 , 2));



// Function Call itself !!! 😱

(function ()
{
    console.log("i am krish");
})
();



// Use of arguments.length.

function don(a , b)
{
    return arguments.length;
}
console.log(don(2 , 6));



// Use of tostring

function jon(a , b)
{
    return a * b
}
console.log(jon.toString());




// Arrow Function

const c = (x , y) => x * y;
console.log(c(3, 4));
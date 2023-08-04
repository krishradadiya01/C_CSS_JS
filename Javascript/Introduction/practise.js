// Lexical Environment = local memory of a  +  Lexical Environment of his Parent.

var a = 34;

function aop() {
  var b = 56;

  function c() {
    console.log(b);
  }
  
}

let jope = aop()
console.log(jope)

var j = 17;
{
  const j = 23;
  console.log(j);
}

i = 99;
console.log(i);
var i;

let l = function abc() {
  console.log("i am krish");
};
l();

var bea = function wez(pera1) {
  return function () {};
};

console.log(bea());

function u() {}
console.log(u);

console.log("krish");

setTimeout(function b() {
  console.log("WERTYUICVBHNJKDFGHJuiobnmbnmJKI");
}, 5000);

console.log("Radadiya");

let r = new Date().getTime();
let d = r;
while (d < r + 10000) {
  d = new Date().getTime();
}

console.log("I AM KRISH");

setTimeout(function k() {
  console.log("pareshbhai");
}, 0);

function s() {
  console.log("radadiya");
}
s();

console.log("krish");

function x() {
  console.log("krish");
}

function y(x) {
  x();
}

function kj() {
  console.log("krish");
}
kj();

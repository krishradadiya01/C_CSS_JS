const web = new Map([
    ["krish" ,18] ,
    ["viren" , 7] ,
    ["divyesh" , 6] ,
    ["sanket" , 24] 
]);

web.set("viren" , 12345);

console.log(web.get("viren"));







const webo = new Map([
  ["krish", 18],
  ["viren", 7],
  ["divyesh", 6],
  ["sanket", 24]
]);


webo.forEach(function(val , index , array){
    console.log(webo.entries());
});
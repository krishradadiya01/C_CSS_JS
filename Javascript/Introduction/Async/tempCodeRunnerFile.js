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
 
 const mobiles =
{
    Name: "Infinix " ,
    Prise: 9500 , 
    Camera: "50mp " ,
    fullstops : function() {
        return this.Name + "rupiya " + this.Prise + " photu " + this.Camera;
    }
};

console.log(mobiles.fullstops());



const Spider =
{
    Name: "Peter" , 
    Ability: "Flying" , 
    fline: "Expect Disappointment" ,
    sline: "and You will never get Disappointed" ,
    mongo : function()
    {
        return this.fline + " o... " + this.sline;
    }
};

console.log(Spider.mongo());





let w = this;
console.log(w);






const aw =
{
   ojo: function op()
   {
     return this.p1 + "     " + this.p2;
   }
};

const qa ={
    p1: "krish" , 
    p2: "sanket"
};

const uj = aw.ojo.bind(qa);
console.log(uj());






function my() {
  return this;
}

my();
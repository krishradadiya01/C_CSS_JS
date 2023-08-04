function a (val1 , val2)
{
    this.first = val1;
    this.second = val2;
    this.third = this.first + " " +  this.second;
}

const b = new a("krish" , "radadiya");

console.log(b.third);





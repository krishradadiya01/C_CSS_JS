function a(f , s , j)
{
    this.fname = f;
    this.sname = s;
    this.jno = j;
}

a.prototype.language = "Hindi";

const bumrah = new a("Jasprit" , "Bumrah" , 93)

console.log(bumrah.language);
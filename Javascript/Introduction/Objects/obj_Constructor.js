function ui(f , s , n)
{
    this.fname = f
    this.sname = s
    this.no = n
}

const p1 = new ui("krish" , "radadiya" , 18);
const p2 = new ui("sanket" , "talaviya" , 24);


console.log(p1.fname + p2.sname + p1.no);
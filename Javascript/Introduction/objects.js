var objects = {
    FName: "Virat" , 
    Jursyno: 18  , 
    SName: "Kohli" , 
    Wife: "Anushka" , 
    Matches: function()
    {
        return this.FName + " " + this.SName;
    }
};

console.log(objects.Matches());


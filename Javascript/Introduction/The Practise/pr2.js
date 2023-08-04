function a()
{
    let b = 10;

    return function c()
    {
        console.log(b);
    }
}

a()();







let d = {name: "krish" , sname: "sanket" , age: 99};

for(let x in d)
{
    console.log(d[x]);
}
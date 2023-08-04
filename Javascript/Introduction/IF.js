let Years = 12;

if (Years > 18) {

    console.log("You are Eligible for Voting");

} else if (Years < 18) {

    console.log("You are not Eligible for Voting and You are not also Eligible for Marriage");

} else if (Years > 21)
{
    console.log("You are Eligible for Voting and also Eligible for Marriage");

} else if (Years < 21)
{
    console.log( "You are not Eligible for Marriage ");

} else 
{
    console.log("Not valid years");
}
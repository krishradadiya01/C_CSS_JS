#include <stdio.h>

int main()
{

    int n,eco,maths,science;

    eco = 1, maths = 2, science = 3;

    printf("Enter your pass subject (Eco - 1, Maths - 2, Science - 3) : ");
    scanf("%d", &n);

    if (n == 1 )
    {
        printf(" you are received 45 ");
    }
    else if (n == maths)
    {
        printf(" you are received 15 ");
    
    }
    else if (n == science)
    {
        printf("You are received 15");
    }


    return 0;
}

#include <stdio.h>

int main()
{

    int x;
    printf("enter a year=");
    scanf("%d", &x);

    if (x % 400 == 0) {
        printf("%d is a leap year \n", x);
    }
    else if (x % 100 == 0) {
        printf("%d isn't a leap year \n", x);
    }
    else if (x % 4 == 0) {
        printf("%d is a leap year \n", x);
    }
    else {
        printf("%d isn't a leap year \n", x);
    }
    return 0;
}
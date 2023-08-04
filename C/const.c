#include <stdio.h>

int main()
{

    int a;
    a = 10;
    printf("%d \n", a);

    a = 20;
    a = 50;
    printf("%d \n", a);

    const int b = 25;

    float f = 5.0;

    printf("%f\n", f / 2);

    float g = 10;
    printf("%f \n", g);

    printf("%.2f \n", (float)5 / 2);

    return 0;
}
#include <stdio.h>

int main()
{

    int a = 23;
    int b = 7;

    printf("a + b:%d\n", a + b); // Arithmetic operators
    printf("a - b:%d\n", a - b);
    printf("a * b:%d\n", a * b);
    printf("a / b:%d\n", a / b);
    printf("a % b:%d\n", a % b);

    int c = 13;
    float d = 7.12;

    printf("c + d:%f\n", c + d); // arithmetic operators with different variable
    printf("c - d:%f\n", c - d);
    printf("c * d:%f\n", c * d);
    printf("c / d:%f\n", c / d);

    int p = 43;
    int q = 27;

    printf("p == q:%d\n", p == q); // relational operators
    printf("p != q:%d\n", p != q);
    printf("p > q:%d\n", p > q);
    printf("p < q:%d\n", p < q);
    printf("p >= q:%d\n", p >= q);
    printf("p <= q:%d\n", p <= q);

    int r = 5;
    int s = 10;

    printf("r && s:%d\n", r && s); // logical operators
    printf("r || s:%d\n", r || s);

    int g = 5;
    int h = 1;

    printf("g & h:%d\n", g & h); // bitwise operators

    int j = 24;
    int k;

    k = j;
    printf("%d \n", k);

    int l = 10, m = 5;

    l += m; // l = l + m;

    printf("%d \n", l);

    l -= m;
    printf("%d \n", l);

    l *= m;
    printf("%d \n", l);

    l /= m;
    printf("%d \n", l);

    l %= m;
    printf("%d \n", l);

    return 0;
}

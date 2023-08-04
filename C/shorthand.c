#include <stdio.h>

int main()
{
    int subject = 2;
    (subject > 2) ? printf("good\n ") : printf("bad\n");

    int age = 18;
    printf("enter your age\n");
    scanf("%d", &age); // when you use scan always remember use &

    (age > 18) ? printf("you can vote") : printf("you can not vote and you are under age\n");

    


    return 0;
}
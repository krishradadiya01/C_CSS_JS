#include<stdio.h>
 
 int main(){
    char operation;
    int n1, n2;

    printf("enter operator(+,-,/,*):");
    scanf("%c",&operation);
    printf("enter two operands:");
    scanf("%d %d",&n1,&n2);

    switch(operation){
    case '+':
    printf("%d + %d = %d ", n1, n2,(n1 + n2));
        break;

    case '-':
        printf("%d  - %d  = %d ", n1, n2, (n1 - n2));
        break;

    case '*':
        printf("%d * %d = %d", n1, n2, (n1 * n2));
        break;

    case '/':
        printf("%d / %d = %d", n1, n2, (n1 / n2));
        break;


    }







    return 0;

 }


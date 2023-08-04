#include<stdio.h>
#include<stdlib.h>

int main(){

   char choice;
   int x, y;

   while (1) {
    printf("Enter the operator:+,-,*,/\n""enter  x to exit\n");
    scanf("%c", &choice);

    if (choice == 'x'){
        exit(0);
        }

    
        printf("enter the two number : ");
        scanf("%d %d",&x, &y);
        switch (choice){

            case '+':
            printf("%d + %d = %d",x,y, x+y);
            break;

            case '-':
            printf("%d - %d =%d",x, y, x - y);
            break;

            case '*':
            printf("%d * %d = %d", x, y, x * y);
            break;

            case '/':
            printf("%d / %d =%d", x, y, x / y);
            break;

        }
        }

    return 0;
}
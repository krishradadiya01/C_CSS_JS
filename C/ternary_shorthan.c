#include<stdio.h>

int main(){
char operator= '+'; // craete variables
int num1 = 3;
int num2 = 6;
int result = (operator== '+') ? (num1 + num2) : (num1 - num2);
printf("%d\n", result);

return 0;
}
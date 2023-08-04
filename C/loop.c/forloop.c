#include<stdio.h>

int main(){
  
   int value;
   printf("Enter a number : ");
   scanf("%d", &value);

   if (value % 2 == 0) {
      printf("%d is an even number \n", value);
   }
   else {
      printf("%d is an odd number \n", value);
   }

     
    return 0;
}

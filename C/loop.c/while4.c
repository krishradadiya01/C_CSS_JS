#include <stdio.h>

int main(){
   int z;
   printf("enter a number : ");
   scanf("%d", &z);

   do {
    printf(" %d\n",z);
     z--;

   }
while (z>=10);




    return 0;

}
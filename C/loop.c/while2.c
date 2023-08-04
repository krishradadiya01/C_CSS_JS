#include <stdio.h>

int main(){

  int x=1, y, m;

  printf("Enter the number:");
  scanf("%d", &y);
     
  
  while(x<=10){
   m = x*y;
  printf("%d * %d = %d\n", y, x, m);
   x++;
  }
     int i;
     for(i=1; i<=40; i++)
     {
      printf("%d\n",i);

     }

    return 0;
}
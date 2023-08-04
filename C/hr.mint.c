#include<stdio.h>

int main(){
 
  int sec,h,m,s;
  printf("enter sec=");
  scanf("%d", &sec);
   
   h=(sec/3600);
   m=(sec-(h*3600))/60;
   s=(sec-(h*3600)-(m*60));
   printf("h:m:s-%d:%d:%d\n", h,m,s);



    return 0;
}
#include<stdio.h>

int main(){

int x,y,m;
printf("Enter a number : ");
scanf("%d",&y);

for(x=1; x<=10; x++)

{
    m= x*y;
    printf("%d * %d = %d\n", y,x,m);
}



    return 0;
}
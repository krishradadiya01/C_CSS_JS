#include <stdio.h>

int main(){

    int time =73;
    if (time<62){
        printf("Good Morning\n");         // use else if
    }
    else if(time<70){
        printf("Good Day\n");
    }
    else {
        printf("Good Evening\n");
    }
    int a = 25;
    int b = 25;

    if (b > a)
    {
        printf("b is grater than a\n");
        // use else if
    }
    else if (a > b)
    {
        printf("a is garter than b");
    }
    else
    {
        printf("a=b\n");
    }

    int myage=59;

    if(myage<40){
        printf("young\n");
    }
    else if(myage>40){
        printf("old\n");
    }
    else{printf("myage is 0\n");
    }

    int result=30;
    if(result>80){
        printf("result: distinction\n");
    }
    else if(result>70){
        printf("result: first class\n");
    }
    else if (result>50){
        printf("result:second class\n");
    }
    else if(result>40){
        printf("result: third class\n");
    }
     else {
        printf("result: fail\n");
     }



     int x=10, y=24;
     printf("%d\n",x + y);
     
     if (x>y){
        
     if(x==y){
        printf("%d==%d\n",x==y);
     }
     else{
        printf(" its true\n");
     }
     }
     else {
        printf("its false\n");
     }
    return 0;

    }


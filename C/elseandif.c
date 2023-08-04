#include <stdio.h>

int main(){

    int a=14;
    int b=1;
    int c=1;
    if (a>b || a>c){
        printf("a is equal to b\n");
    }
    else if(b==c){
        printf("b is equal to c\n");
    }
    else {printf("c is qual to a\n");
    }

    int time=60;
    if(time>24){
        printf("yes\n");       // use only if and else
    }
     else {
        printf("no\n");
     }
      
      char school_name[]="Sun";
      if ( school_name[4]=="Moon"){
        printf("right\n");
      }
       else{
        printf("wrong\n");
       }
     

    return 0;

}
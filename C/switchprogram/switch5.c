#include<stdio.h>

int main(){

int marks;
printf("Enter Marks:");
scanf("%d", &marks);

switch(marks){

    case 1:
    printf("First class");
    break;

    case 2:
    printf("Second class");
    break;

    case 3:
    printf("Third class");
    break;

    case 5:
    printf("fail");
    break;
    

}



    return 0;
    
}
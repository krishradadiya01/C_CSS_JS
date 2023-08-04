# include <stdio.h>

int main() {

    int student  = 12;
    printf("student score: %d \n", student);

    float Marks = 87.30;
    printf("Marks: %f \n", Marks);

    char Grade = 'A';
    printf("Grade: %c \n", Grade);

    char string[] = "GOOD";
    printf("Result: %s \n", string);
    int value1 = 12;
    int value2 = 20;
    printf("%d \n", value1 + value2);

    int x= 34;   // add variable to another variable, use sign '+'
    int y= 21;
    int z= 10;
    int sum= x+y+z;
    printf("%d\n",sum);

    int a=21;            // sign add "-"
    int b=9;
    int c=10;
    int sum2= a-b-c;
    printf("%d\n",sum2);

    int p= 12;             // use sign "*"  // use same sign "/"
    int q= 3;
    int sum3= p*q;
    printf("%d\n",sum3);

    int o=32;
    int r=2;
    int sum4=o/r;
    printf("%d\n",o/r);

    float myFloatNum=3.8;
    double myDoubleNum=6.978;
    printf("%f\n", myFloatNum);     
    printf("%f\n", myFloatNum);       // use .1 or .3 is shown digits behind the .decimal points.   
    printf("%.1f\n", myFloatNum);
    printf("%.3f\n", myFloatNum);
    printf("%lf\n", myDoubleNum);

    int g=1;
    float s=5.89;
    char h='d';
    printf("%lu\n",sizeof(g+s));           // sizeof is used to known about data type.
    printf("%lu\n",sizeof(s+h));   

    float w=5;
    float v=2;                 // implict conversation
    float value= 5/2;
    printf("%f\n",value);

    float sum6= (float)5/2;         // manual (explicit conversation)
    printf("%f\n",sum6 );

     int number1=3;
     int number2=7;
     float sum7=(float)number1/number2;
     printf("%f\n",sum7);
    
    
    int one, two;

    // efdsfsdfsgef

    printf("Enter one values : ");
    scanf("%d", &one);
    printf("Enter two values : ");
    scanf("%d", &two);

    printf("sum is : %d \n", one + two);

    return 0;
}
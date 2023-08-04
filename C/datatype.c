    #include<stdio.h>

    int main(){

    float w=5;
    float v=2;                 // implict conversation
    float value= 5/2;
    printf("%f\n",value);

    float sum2= (float)5/2;         // manual (explicit conversation)
    printf("%f\n",sum2 );

     int number1=3;
     int number2=7;
     float sum1=(float)number1/number2;
     printf("%f\n",sum1);
      
      float number5=17.99;
      int number8=10;
     float sum3=(float)number5 + number8;
     printf("%f\n",sum3);
  

        const int minutesPerHour=60;
        const float PI=3.14;             // use constant value
         printf("%d\n", minutesPerHour);     
         printf("%f\n",PI);

          const int BIRTHYEAR = 1980;
  
          printf("%d \n", BIRTHYEAR);

     return 0;
    }
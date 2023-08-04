#include <stdio.h>
 
int main (){

 const int value5 =2;
        value5=10;                        // use constant which is unchangeable and unreadable.
        printf("%d\n",value5);
   
       const int minutesPerHour;
       minutesPerHour=60;
       printf("%d\n",minutesPerHour);

       const int BIRTYEAR=2006;
         printf("%d\n",BIRTHYEAR);

        int a = 10;
        a = 20;

        printf("%d \n", a);

        return 0;
        }
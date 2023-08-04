# include <stdio.h>

int main() {

    int time, hours, minutes, seconds;

    printf("Enter Seconds : ");
    scanf("%d", &time);

    hours = time / 3600;
    minutes = (time % 3600) / 60;
    seconds = ((time % 3600) % 60);

    printf("%d Hours, %d Minutes, %d Seconds \n", hours, minutes, seconds);

    return 0;
}
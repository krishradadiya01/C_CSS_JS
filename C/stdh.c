#include<stdio.h>

int main(){

    int p = 1;
    int q = 2;
    int r = 3;
    int result = p + (q < 3 ? q : r);
    printf("%d\n",result);

    return 0;
}
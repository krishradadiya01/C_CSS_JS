#include <stdio.h>

int main() {

    int number;
    printf("Enter a number : ");
    scanf("%d", &number);

    int prime = 1;

    for (int i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        prime = 0;
      }
    }

    if (prime == 1)
    printf("%d is a prime number \n", number);
    else
    printf("%d isn't a prime number \n", number);

    return 0;
}
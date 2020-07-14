let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var maior = 0;

for (index = 0; index < numbers.length; index++) {  
         if (numbers[index] > maior) {
            maior = numbers[index];
    }
}

console.log(maior);
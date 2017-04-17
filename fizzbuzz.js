// Print Numbers 1 to 100
// Numbers / by 3 should state Fizz
// Numbers / by 5 should state Buzz
// Numbers / by both 5 and 3 should state FizzBuzz

for (i = 1; i <= 100; i++) {
    
   if  (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}
    
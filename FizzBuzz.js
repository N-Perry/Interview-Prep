function fizzBuzz() {
    let fuzzBuzzums = [];
  
    for (let i = 1; i < 101; i++) {
      if (i % 3 == 0) {
        if (i % 5 == 0) {
          fuzzBuzzums.push("FizzBuzz");
          continue;
        }
        fuzzBuzzums.push("Fizz");
      } else if (i % 5 == 0) {
        if (i % 3 == 0) {
          fuzzBuzzums.push("FizzBuzz");
          continue;
        }
        fuzzBuzzums.push("Buzz");
      } else {
        fuzzBuzzums.push(i);
      }
    }
    return fuzzBuzzums;
}

let testArr = fizzBuzz();

console.log(testArr);


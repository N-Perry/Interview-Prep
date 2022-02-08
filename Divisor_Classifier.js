function getDPA(num) {
    let dCount = 0;
    let pCount = 0;
    let aCount = 0;
  
    for (let i = 1; i <= num; i++) {
      let sumOfDivisors = findAndSumDivisors(i);
  
      if (sumOfDivisors < i) {
        dCount++;
      } else if (sumOfDivisors == i) {
        pCount++;
      } else {
        aCount++;
      }
    }
    let answer = [dCount, pCount, aCount]
    return answer;
  }
  
  function findAndSumDivisors(num) {
    let divisors = [];
  
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        divisors.push(i);
      }
    }
    if (divisors.length != 0) {
        return divisors.reduce((previousValue, currentValue) => previousValue + currentValue)
    } else {
        return 0;
    }
  }
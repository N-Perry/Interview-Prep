let sampleInput = ["18 apples", "11 sugar", "12 ginger", "11 baking_soda", "18 bananas", "15 yogurt", "15 milk", "15 eggs", "10 candy"];

// the goal is to return an object with aisle numbers as keys, foodstuff as values

function organizeFood(foodstuff) {

  let returnObj = {}
  for (let i = 0; i < foodstuff.length; i++) {
    let foodItem = foodstuff[i].split(' ');
    
    if (foodItem[0] in returnObj) {
      returnObj[foodItem[0]].push(foodItem[1]);
    } else {
      returnObj[foodItem[0]] = [foodItem[1]];
    }
  }
  return returnObj;
}

console.log(organizeFood(sampleInput));
const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
  let finalSum = 0  
  for (let i = 0; i < nums.length; i++){
    finalSum += nums[i];
  }
  return finalSum
};

const multiply = function(nums) {
  let finalProd = 1
  for (let i = 0; i < nums.length; i++){
    finalProd *= nums[i];
  }
  return finalProd
};

const power = function(num, expo) {
	return num ** expo
};

const factorial = function(number) {
	if (number == 0){
    return 1
  } else {
    let final = 1
    for (let i = 1; i <= number; i++) {
      final *= i
    }
    return final
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

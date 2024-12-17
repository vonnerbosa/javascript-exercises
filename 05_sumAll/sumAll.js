const sumAll = function(num1, num2) {
    let finalSum = 0
    if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    } else {
        let min = Math.min(num1, num2)
        let max = Math.max(num1, num2)
        for (let i = min; i <= max; i++){
            finalSum += i;
        }
        return finalSum
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;


/*else if (num1 < num2){
    for (let i = num1; i <= num2; i++){
        finalSum += i;
    }
    return finalSum
} else {
    for (let i = num2; i <= num1; i++){
        finalSum += i;
    }
    return finalSum
}*/
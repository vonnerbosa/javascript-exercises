const repeatString = function(string, num) {
    let finalString = string
    if (num == 0){
        finalString = "";
    } else if(num < 0){
        finalString = "ERROR"
    } else{
        for (let i = 1; i < num; i++){
            finalString += string
        }
    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;

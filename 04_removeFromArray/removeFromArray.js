/*
const removeFromArray = function(OrigArray, rem) {
    const finalArray = []
    for (const num of OrigArray){
        if (num == rem) continue;
        finalArray.push(num)
    }
    return finalArray
};
*/

/*
const removeFromArray = function(OrigArray, rem) {
    //make array
    const finalArray = []

    for (const num of OrigArray){
        if (num == rem) {
            let remPosition = OrigArray.indexOf(rem)
            OrigArray.splice(remPosition, 1)
        } else {
            finalArray.push(num)
        }
    }
    return finalArray
};*/

const removeFromArray = function(OrigArray, ...rem) {
    return OrigArray.filter(item => !rem.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

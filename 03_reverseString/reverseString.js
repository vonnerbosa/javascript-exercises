const reverseString = function(word) {
    let wordArr = [];
    let len = word.length;
    for (let i = len-1; i >= 0; i--){
        wordArr.push(word[i]);
    } 
    let finalReversed = wordArr.join("");
    return finalReversed
};

// Do not edit below this line
module.exports = reverseString;

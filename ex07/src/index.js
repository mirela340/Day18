// Only change code below this line

let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let uniqueArray = [...(new Set(numberArray))].sort((a, b) => { return a - b });

for (i = 0; i < uniqueArray.length; i++) {
    console.log(uniqueArray[i]);
}

// Only change code below this line
module.exports = { numberArray, uniqueArray };





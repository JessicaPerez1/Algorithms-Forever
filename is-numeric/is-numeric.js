// Loop through the given string and determine if it is a valid number.
    //A valid number can only contain:
    //Numeric characters
    //A maximum of one decimal point placed anywhere in the string
    //One `+` or `-` character at the start of the string.
// For example, given the following str:
    // var str = "-0123.00";
// should return `true`
// Given the following str:
    // var str = "+-a13";
// should return `false`

var isNumeric = function (str) {
    const validNumbers = "0123456789".split("");
    let charIsNum = false;
    let hasDecimal = false;
for (let i = 0; i <=str.length ; i ++) {
    const currentChar = str[i];
    if(digits.includes(currentChar)) {
        charIsNum = true;
        continue;
    }
    if(i===0){
        if(currentChar === "-" || currentChar === "+"){
            continue;
        }
    }
    if(currentChar === "."){
        if(hasDecimal){
            return false
        }
        hasDecimal = true;
        continue;
    }
    return false;
}
if(charIsNum){
    return true
}
return false
};

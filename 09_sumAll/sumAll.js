const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    
    let i = num1;
    let length = num2;
    
    if(num1 > num2) {
        i = num2;
        length = num1
    }
    

    let sum = 0;
    for(i; i <= length; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

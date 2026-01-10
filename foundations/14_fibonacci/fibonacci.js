const fibonacci = function(input) {
    let sequence = [];
    let num = Number(input);

    if(num < 0) {
        return "OOPS";
    }

    if(num === 0) {
        sequence.push(0);
        return sequence.at(-1);
    } else if(num === 1) {
        sequence.push(1);
        return sequence.at(-1);
    } else {
        sequence.push(fibonacci(num - 1) + fibonacci(num - 2));
        return sequence.at(-1);
    }
};

// Do not edit below this line
module.exports = fibonacci;

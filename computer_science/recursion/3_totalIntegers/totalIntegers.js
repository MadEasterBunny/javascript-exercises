const totalIntegers = function(input) {
    if(typeof input !== "object") return undefined;

    const values = Object.values(input);

    const total = values.reduce((acc, curr) => {
        if(Number.isInteger(curr)) {
            return acc + 1;
        } else if (typeof curr === "object" && curr !== null) {
            return acc + totalIntegers(curr);
        } else {
            return acc;
        }
    }, 0);
    return total;
};
  
// Do not edit below this line
module.exports = totalIntegers;

const pascal = function(n) {
    if( n === 1) return [1];

    const prevRow = pascal(n - 1);
    let result = [1];

    for(let i = 0; i < prevRow.length - 1; i++) {
        result.push(prevRow[i] + prevRow[i + 1]);
    }

    result.push(1);

    return result;
};
  
// Do not edit below this line
module.exports = pascal;

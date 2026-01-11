const permutations = function(arr) {
    if(arr.length === 0) return [[]];
    if(arr.length === 1) return [arr];

    let results = [];

    for(let i = 0; i < arr.length; i++) {
        let subArr = arr.slice(0, i).concat(arr.slice(i + 1));
        let subPerms = permutations(subArr);

        for(let j = 0; j < subPerms.length; j++) {
            results.push([arr[i], ...subPerms[j]]);
        }
    }

    return results;
};
  
// Do not edit below this line
module.exports = permutations;

const contains = function(obj, searchTerm) {
    const values = Object.values(obj);

    if(values.includes(searchTerm)) return true;

    const nestedObjects = values.filter((value) => 
        typeof value ===  "object" && value !== null
    );

    return nestedObjects.some((nestedObject) => 
        contains(nestedObject, searchTerm)
    );
};
  
// Do not edit below this line
module.exports = contains;

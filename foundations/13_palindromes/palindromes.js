const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleanedString = str.toLowerCase().split("").filter((charater) => alphanumerical.includes(charater)).join("");
    let reversedStr = cleanedString.split("").reverse().join("");

    return cleanedString === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;

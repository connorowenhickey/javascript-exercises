const removeFromArray = function(array, ...removeables) {
    return array.filter(element => !removeables.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;

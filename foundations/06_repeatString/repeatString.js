const repeatString = function(string,num) {

    if (num < 0) return 'ERROR'
    if (num === 0) return ''
    const original = string

    for (let i=1; i<num; i++)
        string += original 
    return string
};

// Do not edit below this line
module.exports = repeatString;

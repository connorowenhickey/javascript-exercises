const fibonacci = function(index) {
    if (typeof index === 'string'){
        index = parseInt(index)
    }
    
    if (index === 0) {
        return 0
    } else if (index < 0) {
        return 'OOPS'
    } 
    let fib = [1,1]
    for (i=2; i<index; i++) {
        let sum = fib.at(-2) + fib.at(-1)
        fib.push(sum)
    }
    return fib.at(index - 1)
};

// Do not edit below this line
module.exports = fibonacci;

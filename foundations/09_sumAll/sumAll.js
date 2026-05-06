const sumAll = function(a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a<0 || b<0) {
            return 'ERROR'
        } else {
            let sort_array = [a,b]
            sort_array.sort((a, b) => a-b)
            let nums_array = []
            for (let i=sort_array[0]; i<=sort_array[1]; i++) {
                nums_array.push(i)
            }
            const total = nums_array.reduce((acc, cur) => acc + cur, 0)
            return total
        }
    } else {
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = sumAll;

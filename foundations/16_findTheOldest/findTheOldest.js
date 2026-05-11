const findTheOldest = function(people) {
    return people.sort((a,b) => {
        aAge = (a.yearOfDeath || 2026) - a.yearOfBirth
        bAge = (b.yearOfDeath || 2026) - b.yearOfBirth
        return aAge > bAge ? 1 : -1
    }).at(-1)
};

// Do not edit below this line
module.exports = findTheOldest;

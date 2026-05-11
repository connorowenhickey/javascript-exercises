const palindromes = function (sentence) {
    const cleaned = sentence.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    for (let i=0; i < cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;

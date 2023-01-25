const removeFromArray = function(array, ...toRemove) {

    for (const arg of toRemove) {
        if (array.includes(arg) ) {
            var index = array.indexOf(arg)
            array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

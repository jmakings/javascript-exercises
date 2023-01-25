const sumAll = function(input1, input2) {
    if (typeof(input1) != "number" || typeof(input2) != "number") {
        return "ERROR"
    }
    var summation = 0
    var int1 = Math.min(input1, input2)
    var int2 = Math.max(input1, input2)
    
    if (int1 < 0 ) {
        return "ERROR"
    }

    for (var i = int1; i <= int2; i++) {
        summation = summation + i
    }
    return summation
};

// Do not edit below this line
module.exports = sumAll;

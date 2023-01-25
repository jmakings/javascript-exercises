const repeatString = function(string, num) {
    if (num < 0)
        return 'ERROR'
        
    ans_str = ''
    for (i = 0; i < num; i++) {
        ans_str = ans_str + string
    }
    return ans_str
};

// Do not edit below this line
module.exports = repeatString;

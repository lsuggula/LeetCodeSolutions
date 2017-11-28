var selfDividingNumbers = function(left, right) {
    var result = [];
    for(;left <= right; left++) {
        var num = left.toString().split("");
        var flag = 0;
        for(var i=0; i<num.length; i++) {
            var digit = parseInt(num[i]);
            if(digit == 0) {
                flag = 0;
            }
            if(left % digit == 0) {
                flag = flag + 1;
            }
        }
        if(flag == num.length) {
            result.push(left);
        }
    }
    return result;
};
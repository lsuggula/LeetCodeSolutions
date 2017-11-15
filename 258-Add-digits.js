var addDigits = function(num) {
    if(num <= 9) {
        return num;
    }
    else {
        var sum = 0;
        while (num) {
            // var rem = num % 10;
            // num = num - rem;
            sum = sum + (num % 10);
            num = Math.floor(num / 10);
        }
    }
    var str = sum.toString();
    return addDigits(sum);
};
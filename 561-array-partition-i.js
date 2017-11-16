var arrayPairSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var result = [];
    for(var i=0; i<nums.length; i = i+2) {
        var test = [];
        test.push(nums[i]);
        test.push(nums[i+1]);
        result.push(test);
    }
    var sum = 0;
    for(var k=0; k<result.length; k++) {
        sum = sum + result[k][0];
    }
    return sum;
};
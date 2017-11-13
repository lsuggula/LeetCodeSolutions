var missingNumber = function(nums) {
    var sum = 0;
    for(var i=0; i<nums.length; i++) {
        sum = sum + nums[i];
    }
    var actualSum = (nums.length * (nums.length + 1)) / 2;
    return actualSum - sum;
};
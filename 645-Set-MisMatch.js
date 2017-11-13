var findErrorNums = function(nums) {
    var sum = 0, result = [];
    nums.sort(function(a, b) {
      return a-b;
    });
    var allSum = (nums.length * (nums.length + 1)) / 2;
    console.log(nums);
    for(var j=0; j<nums.length-1; j++) {
      if(nums[j] == nums[j+1]) {
        result.push(nums[j]);
        nums.splice(j, 1);
      }
    }
    for(var k=0;k<nums.length; k++) {
        sum = sum + nums[k];
    }
    result.push(allSum-sum);
    return result;
};
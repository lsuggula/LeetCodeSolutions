var moveZeroes = function(nums) {
    for(var i=0; i<nums.length; i++) {
        if(nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    for(var i=0; i<nums.length; i++) {
        if(nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};
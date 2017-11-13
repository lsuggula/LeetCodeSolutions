var searchInsert = function(nums, target) {
    for(var i=0; i<nums.length; i++) {
        if(nums[i] == target || nums[i] > target) {
            return i;
        }
        else if(nums[i] < target && target < nums[i+1]) {
            return i+1;
        }
        else if(nums[nums.length - 1] < target) {
            return nums.length;
        }
    }
};
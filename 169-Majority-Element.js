var majorityElement = function(nums) {
    var map = {};
    for(var i=0; i<nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]]++;
        }
        else {
            map[nums[i]] = 1;
        }
    }
    for(var j in map) {
        if(map[j] >= nums.length/2) {
            return parseInt(j);
        }
    }
};
var containsDuplicate = function(nums) {
    if(nums.length <= 0) {
        return false;
    }
    var map1 = {};
    for(var i=0; i<nums.length; i++) {
        if(map1[nums[i]]) {
            map1[nums[i]]++;
        }
        else {
            map1[nums[i]] = 1;
        }
    }
    for(var k in map1) {
        if(map1[k] >= 2) {
            return true;
        }
    }
    return false;
};
var twoSum = function(nums, target) {
    var numArray = nums;
    var result = [];
    
    for(var i=0; i<numArray.length; i++) {
        for(j=i+1; j<numArray.length; j++) {
            if(numArray[i]+numArray[j] == target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};
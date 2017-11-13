var maximumProduct = function (nums) {
    nums.sort(function (a, b) {return a - b});
    if(nums.length <= 3) {
        var product = 1;
        for(var j=0; j<nums.length; j++) {
            product = product * nums[j];
        }
        return product;
    }
    
    for(var i=0; i<nums.length; i++) {
        if(nums[i] == 0) {
          nums.splice(i, 1);
        }
      }
      
      var val1 = nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3];
      var val2 = nums[nums.length-1]*nums[0]*nums[1];
      
      if (val1 > val2) {
        return val1;
      }
      else {
        return val2
      }
    };
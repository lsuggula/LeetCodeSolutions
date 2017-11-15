var singleNumber = function(nums) {
  var map = {};
  for(var i=0; i<nums.length; i++) {
    var elem = nums[i];
    if(map[elem]) {
      map[elem]++;
    }
    else {
      map[elem] = 1;
    }
  }
  for(var j in map) {
    if(map[j] == 1)
      return parseInt(j);
  }
};
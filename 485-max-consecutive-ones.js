var findMaxConsecutiveOnes = function (nums) {
  var map = {};
  var count = 0;
  var max_count = 0;
  for (var i=0, x=0; i<nums.length; i++) {
    var elem = nums[i];
    if (elem == 1 ) {
      count++;
    }
    else {
      count = 0;
    }
    if(count > max_count) {
      max_count = count;
    }
  }
  return max_count;
};
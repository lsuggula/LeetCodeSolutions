var twoSum = function(numbers, target) {
  for(var i=0; i<numbers.length; i++) {
    for(var j=numbers.length-1; j>=0; j--) {
      if(numbers[i]+numbers[j] == target) {
        var result = [];
        result.push(i+1, j+1);
        return result;
      }
    }
  }
};
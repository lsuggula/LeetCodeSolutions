var containsNearbyDuplicate = function(nums, k) {
    if(nums.length < 2 || k == 0) {
        return false;
    }
    
    var dupe = nums.filter((val, ind, arr) => arr.indexOf(val) !== ind);
    //filters duplicates and inserts into dupe array
   
    if(dupe.length == 0) {
        return false;
    }
    
    var map = {};
    for(var i=0; i<nums.length; i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = i.toString();
        }
        else {
             map[nums[i]] =  map[nums[i]] + " " + i;
        }
    }
    
    var resultMin = [];
    
    for(var key in map) {
        var arr = map[key].split(" ");
        if(arr.length > 1) {
            console.log("key: "+map[key]);
            console.log("arr: "+arr);
            for(var i=0; i<arr.length-1; i++) {
                var min = Math.abs(arr[i+1]-arr[i]);
                 console.log("min outside: "+min);
                for(var j = i+1; j<arr.length; j++) {
                    console.log("i: "+arr[i]);
                    console.log("j: "+arr[j]);
                   
                    if(Math.abs(arr[j]-arr[i]) < min) {
                        console.log("min inside: "+min);
                        min = Math.abs(arr[j]-arr[i]);
                    }
                }
                resultMin.push(min);
            }
            
        }
    }
    console.log("resultMin: "+ resultMin);
    var result = Math.min.apply(null, resultMin);
    
    return result <= k ? true : false;
};
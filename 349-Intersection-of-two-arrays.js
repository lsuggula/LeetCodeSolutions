var intersection = function(nums1, nums2) {
    var map1 = {};
    var map2 = {};
    var results = [];
    for(var i=0; i<nums1.length; i++) {
        if(map1[nums1[i]]) {
            map1[nums1[i]]++;
        }
        else {
            map1[nums1[i]] = 1;
        }
    }
    for(var j=0; j<nums2.length; j++) {
        if(map2[nums2[j]]) {
            map2[nums2[j]]++;
        }
        else {
            map2[nums2[j]] = 1;
        }
    }
    for(var k in map1) {
        for(var l in map2) {
            if(k == l) {
                results.push(parseInt(k));
            }
        }
    }
    return results;
};
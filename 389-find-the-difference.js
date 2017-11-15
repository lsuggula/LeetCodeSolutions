var findTheDifference = function(s, t) {
    var map1 = {};
    var map2 = {};
    for(var i=0; i<s.length; i++) {
        var elem1 = s[i];
        if(map1[elem1]) {
            map1[elem1]++;
        }
        else map1[elem1] = 1;
    }
    for(var j=0; j<t.length; j++) {
        var elem2 = t[j];
        if(map2[elem2]) {
            map2[elem2]++;
        }
        else map2[elem2] = 1;
    }
    // var str2 = "", str1 = "";
    for(var k in map2) {
        if(!map1[k]) {
            return k;
        }
        else if(map1[k] != map2[k]) {
            return k;
        }
    }
};
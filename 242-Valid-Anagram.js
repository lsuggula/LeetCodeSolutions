var isAnagram = function(s, t) {
    if(s == t) {
        return true;
    }
    var map1 = {}, map2= {};
    for(var i=0; i<s.length; i++) {
        if(map1[s[i]]) {
            map1[s[i]]++;
        }
        else {
            map1[s[i]] = 1;
        }
    }
    for(var j=0; j<t.length; j++) {
        if(map2[t[j]]) {
            map2[t[j]]++;
        }
        else {
            map2[t[j]] = 1;
        }
    }
    
    function checkIfEqual(a, b){
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        
        if(aProps.length != bProps.length) {
            return false;
        }
        
        for(var k=0; k<aProps.length; k++) {
            var propName = aProps[k];
            if(a[propName] !== b[propName]) {
                return false;
            }
        }
       return true; 
    }
    
    return checkIfEqual(map1, map2);
};
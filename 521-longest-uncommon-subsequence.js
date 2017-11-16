var findLUSlength = function(a, b) {
    if(a == b) {
        return -1;
    }
    if(a.length >= b.length) {
        for(var i=a.length; i >= 1; i--) {
            var test = a.substr(0, i);
            if(!b.includes(test)) {
                return a.length;
            }
        }
    }
    else {
        for(var j=b.length; j >= 1; j--) {
            var test2 = b.substr(0, j);
            if(!a.includes(test2)) {
                return b.length;
            }
        }
    }
};
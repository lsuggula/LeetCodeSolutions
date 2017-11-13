var longestCommonPrefix = function(strs) {
    var str = "";
    if(strs.length >= 1) {
        var first = strs[0];
        var result;
        while(first.length >= 1) {
            // if()
            var count = 1;
            for(var i=1; i<strs.length; i++) {
                if(strs[i].length >= 1) {
                    if(strs[i].startsWith(first)) {
                    count++;
                    }
                }
            }
            if(count == strs.length)
                return first;
            first = first.substring(0,first.length-1);
        }
        return first;
    }
    else {
        return str;
    }
};
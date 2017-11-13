var firstUniqChar = function(s) {
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
            return i;
        }
    }
    return -1;
};
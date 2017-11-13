var lengthOfLastWord = function(s) {
    if(s.length == 0 || s.length == 'undefined' || s.length == 'null') {
        return 0;
    }
    else {
        var str = s.trim();
        var arr = str.split(" ");
        return arr[arr.length-1].length;
    }
};
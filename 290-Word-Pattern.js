var wordPattern = function(pattern, str) {
    var map = {};
    var strArr = str.split(" ");
    if(pattern.length != strArr.length) {
        return false;
    }

    for(var i=0; i<pattern.length; i++) {
        if(!map[pattern[i]]) {
                map[pattern[i]] = strArr[i];
            }
            else {
                if(!map[pattern[i]].includes(strArr[i])) {
                    map[pattern[i]] = map[pattern[i]] + " " + strArr[i];
                }
            }
    }

    var arr = [];
    var keyArr = [];
    for(var key in map) {
        arr.push(key);
        keyArr.push(map[key]);
        if(map[key].includes(" ")) {
            return false;
        }
    }
    
    var result = arr.filter((value, index, array) => array.indexOf(value) === index);
    var anoresult = keyArr.filter((value, index, array) => array.indexOf(value) === index);
    
    if(anoresult.length !== result.length) {
        return false;
    }

    return true;
};
var findWords = function(words) {
    var row1 = "qwertyuiop";
    var row2 = "asdfghjkl";
    var row3 = "zxcvbnm";
    var output = [];
    
    for (var i=0; i<words.length; i++) {
        var item = words[i];
        var result = true;
        
        if (row1.includes(item[0].toLowerCase())) var row = row1;
        if (row2.includes(item[0].toLowerCase())) var row = row2;
        if (row3.includes(item[0].toLowerCase())) var row = row3;
        
        for (var j=1; j<item.length; j++) {
            result = result && row.includes(item[j].toLowerCase());
        }
        if (result == true) {
            output.push(item);
        }
    }
    
    return output;
};
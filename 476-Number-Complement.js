var findComplement = function(num) {
    var a = (num >>> 0).toString(2);
    var comp = "";
    for(var i=0; i<a.length; i++) {
        if(a[i] == 0)
            comp = comp + "1";
        else 
            comp = comp + "0";
    }
    return parseInt(comp, 2);
};
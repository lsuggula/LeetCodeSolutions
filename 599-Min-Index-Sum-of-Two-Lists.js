var findRestaurant = function(list1, list2) {
    var result = {};
    var arr = [];
    var resarr = [];
    var sample = [];
    for(var i=0; i<list1.length; i++) {
        for(var j=0; j<list2.length; j++) {
            if(list1[i] == list2[j]) {
                if(!result[i+j])
                    result[i+j] = "" + list1[i];
                else
                    result[i+j] = result[i+j] + "-" + list1[i];
            }
        }
    }
    for(var k in result) {
        arr.push(k);
    }
    var minres = Math.min.apply(null, arr);
    var hmm = result[minres].split("-");
    return hmm;
};
var findPoisonedDuration = function(timeSeries, duration) {
    var i;
    var sum = 0;
    for (i=0; i<timeSeries.length; i++) {
        var diff = timeSeries[i+1] - timeSeries[i];
        if(diff < duration) {
            sum = sum + diff;
        }
        else sum = sum + duration;
    }
    return sum;
};
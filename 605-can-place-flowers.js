var canPlaceFlowers = function(flowerbed, n) {
    var result = [];
    if(n <= 0) {
        return true;
    }
    if(flowerbed.length < 2 && flowerbed[0] == 0) {
        n = n - 1;
    }
    if((flowerbed.length < 2 && flowerbed[0] == 1) || flowerbed.length <= 0 || (flowerbed.length <= n)) {
        return false;
    }
    if(flowerbed[flowerbed.length-1] == 0 && flowerbed[flowerbed.length-2] == 0) {
        n = n - 1;
        flowerbed.pop();
        flowerbed.push(1);
    }
    if(flowerbed[0] == 0 && flowerbed[1] == 0) {
        n = n - 1;
        flowerbed.shift();
    }
    for(var i=0; i<flowerbed.length; i++) {
        var count = 0;
        while(flowerbed[i] == 0) {
            count++;
            i++;
        }
        result.push(count);
    }
    for(var j=result.length - 1; j>=0; j--) {
        if(result[j] >= 3) {
            if(result[j] % 2 == 1) {
                var usableFlowers = Math.floor(result[j]/2);
                n = n - usableFlowers;
            }
            else {
                var usableFlowers = Math.floor((result[j]-1)/2);
                n = n - usableFlowers;
            }
        }
    }
    return n <= 0 ? true : false;
};
function pad(str, max) {
  str = str.toString();
  if(str.length < max) {
      return pad("0" + str, max);
  }
  else return str;
}

var hammingDistance = function(x, y) {
    var a = (x >>> 0).toString(2);
    var b = (y >>> 0).toString(2);
    var num1 = pad(a,32);
    var num2 = pad(b,32);
    var count = 0;
    for(var i=0; i<num1.length; i++) {
        if(num1[i] != num2[i])
            count++;
    }
    return count;
};
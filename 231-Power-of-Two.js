var isPowerOfTwo = function(n) {
  if(n == 1 || n == 2 || n == 4 || n == 8) {
    return true;
  }
  else if(n == 0) {
    return false;
  }
  else if(n%2 == 1) {
    return false;
  }
  else {
    while(n%2 == 0) {
      n = n/2;
    }
    if(n%2 == 0 || n == 1) {
      return true;
    }
    else {
      return false;
    }
  }
};
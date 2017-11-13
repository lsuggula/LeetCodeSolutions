var isPalindrome = function(x) {
    var pali = ""+x;
    var hmm = pali.split('').reverse().join('');
    if (parseInt(hmm) == x)
        return true;
    else return false;
};
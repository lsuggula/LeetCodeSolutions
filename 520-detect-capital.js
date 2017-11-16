var detectCapitalUse = function(word) {
    var firstLetter = word[0].toUpperCase();
    var others = word.slice(1, word.length);
    var other = others.toLowerCase();
    var capi = firstLetter + other;
    var low = word.toLowerCase();
    var caps = word.toUpperCase();
    
    if(caps === word || capi === word || low === word) {
        return true;
    }
    else return false;
};
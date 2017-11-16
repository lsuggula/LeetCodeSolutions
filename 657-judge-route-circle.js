var judgeCircle = function(moves) {
    var center = [0,0];
    for(var i=0; i<moves.length; i++) {
        var m = moves[i];
        if(m == "U") {
            center[1]++;
        }
        else if(m == "D") {
            center[1]--;
        }
        else if(m == "L") {
            center[0]--;
        }
        else if (m == "R") {
            center[0]++;
        }
    }
    if(center[0] == 0 && center[1] == 0)
        return true;
    else 
        return false;
};
var calPoints = function(ops) {
    var scores = [];
    var sum = 0;
    for(var i=0; i<ops.length; i++) {
        if(ops[i] == "+") {
            if(scores[scores.length-1] && scores[scores.length-2]) {
                var last = scores[scores.length-1];
                var secondLast = scores[scores.length-2];
                sum = sum + parseInt(secondLast) + parseInt(last);
                scores.push(parseInt(secondLast) + parseInt(last));
            }
            else if(scores[scores.length-1]) {
                var last = scores[scores.length-1];
                sum = sum + parseInt(last);
                scores.push(parseInt(last));
            }
        }
        else if(ops[i] == "D") {
            var last = scores[scores.length-1];
            sum = sum + (2 * parseInt(last));
            scores.push((2 * parseInt(last)));
        }
        else if (ops[i] == "C") {
            sum = sum - scores[scores.length - 1];
            scores.pop();
        }
        else {
            sum = sum + parseInt(ops[i]);
            scores.push(parseInt(ops[i]));
        }
    }
    return sum;
};
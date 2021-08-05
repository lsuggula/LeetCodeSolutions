var isValid = function(s) {
    var stack = [];
    if (s.length%2 != 0)
        return false;
    for(i=0; i<s.length; i++) {
        if(s[i] == '{' || s[i] == '(' || s[i] == '[') {
            stack.push(s[i]);
        }
        if(s[i] == ')' || s[i] == ']' || s[i] == '}') {
            var elem = stack[stack.length-1];
            if(elem == '{' && s[i] == '}') {
                stack.pop();
                continue;
            }
            if(elem == '(' && s[i] == ')') {
                stack.pop();
                continue;
            }
            if(elem == '[' && s[i] == ']') {
                stack.pop();
                continue;
            }
        }
    }
    if(stack.length == 0)
        return true;
    return false; 
};

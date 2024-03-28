function checkBrackets(str) {
    let stack = []; 
    for (let c of str) { 
        if (c === '(') stack.push(')');
        else if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (stack.length == 0 || stack.pop() != c) return false;
    }
    return stack.length == 0;
}
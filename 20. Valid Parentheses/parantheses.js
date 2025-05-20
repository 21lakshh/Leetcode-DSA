var isValid = function(s) {
    let stack = []
    let map = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    let popped = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
                stack.push(s[i])
        }
        else if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
            if (stack.length == 0 || stack.pop() !== map[s[i]]) {
                return false
            }
        }
        else{
            continue
        }
    }
    if (stack.length == 0) {
        return true
    }
    else{
        return false
    }
};

console.log(isValid("[}"))
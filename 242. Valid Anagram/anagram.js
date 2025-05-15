var isAnagram = function(s, t) {
    let charCount = {}
    if(s.length != t.length){
        return false
    }
    for(let i = 0;i<s.length;i++){
        let char = s[i]
        if(charCount[char] !==undefined){
            charCount[char] = charCount[char] + 1
        }
        else{
            charCount[char] = 1
        }
    }

    for(let i = 0;i<t.length;i++){
        let char = t[i]

        if(charCount[char] == 0 || charCount[char] === undefined){
            return false
        }
        charCount[char] = charCount[char] - 1
    }
    return true
};

console.log(isAnagram("aab","abb"))
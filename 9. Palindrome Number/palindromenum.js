var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    let temp = x
    let reversednum = 0
    while(x!=0){
        reversednum = reversednum*10 + x%10
        x =  Math.floor(x/10)
    }
    if(reversednum == temp){
        return true
    }
    else{
        return false
    }
};

console.log(isPalindrome(121))
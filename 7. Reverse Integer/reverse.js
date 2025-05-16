var reverse = function(x) {
    let reversednum = 0
    let temp = 0
    if(x<0){
        temp = x
        x = Math.abs(x)
    }
    while(x!=0){
        reversednum = reversednum * 10 + x%10
        x = Math.floor(x / 10)
    }
    if(temp<0){
        reversednum = -(reversednum)
    }
    if(reversednum < Math.pow(-2, 31) || reversednum > Math.pow(2,31) -1){
        return 0
    }
    return reversednum
};

console.log(reverse(-523))
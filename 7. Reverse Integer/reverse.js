var reverse = function(x) {
    let reversednum = 0
    while(x!=0){
        reversednum = reversednum * 10 + x%10
        x = Math.floor(x / 10)
    }
    return reversednum
};

console.log(reverse(523))
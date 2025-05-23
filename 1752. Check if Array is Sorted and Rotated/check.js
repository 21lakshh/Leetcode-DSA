var check = function(nums){
    let count = 1

    for (let i = 1; i < 2*nums.length; i++) {
        if (nums[(i-1)%nums.length] <= nums[(i)%nums.length]) {
                count++
        }
        else{
            count = 1
        }

        if (count === nums.length) {
            return true
        }
    }
    return nums.length===1
}

console.log(check([1,3,2]))
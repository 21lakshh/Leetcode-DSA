var moveZeroes = function(nums){
    if (nums.length === 0 || nums.length === 1) {
        return nums
    }

    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j]!==0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))
var maxProduct = function(nums) {
    let currMax = nums[0]
    let currMin = nums[0]
    let result = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let temp = currMax * nums[i]
        currMax = Math.max(nums[i], currMax*nums[i], currMin*nums[i])
        currMin = Math.min(nums[i], temp, currMin*nums[i])

        result = Math.max(result, currMax)
    }

    return result
};

console.log(maxProduct([2,3,-2,4]))
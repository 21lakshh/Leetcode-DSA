var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0
        }
        currSum += nums[i]
        if (currSum > maxSum) {
            maxSum = currSum
        }
    }
    return maxSum
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
var maxAscendingSum = function(nums){
    let max = -100000
    let currSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] >= nums[i-1]) {
            currSum += nums[i]
        }
        else{
            max = Math.max(max, currSum)
            currSum = nums[i]
        }
    }
    return Math.max(currSum, max)
} 

console.log(maxAscendingSum([12,17,15,13,10,11,12]))
var missingNumber = function(nums) {
    let n = nums.length
    let expectedsum = n*(n+1)/2
    let actualsum = 0
    for(let i = 0;i<nums.length;i++){
        actualsum += nums[i]
    }
    return expectedsum - actualsum
};

console.log(missingNumber([0,1]))
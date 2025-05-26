var majorityElement = function(nums) {
    let candidate = 0
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            count++
            candidate = nums[i]
        }
        else if (candidate === nums[i]) {
            count++
        }
        else{
            count--
        }
    }

    return candidate
};

console.log(majorityElement([3,2,3]))
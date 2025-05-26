var sortColors = function(nums) {
    let l = 0
    let r = nums.length-1
    let temp;

    for (let i = 0; i <= r; i++) {
        if (nums[i] === 0) {
            temp = nums[i]
            nums[i] = nums[l]
            nums[l] = temp
            l++;
        }
        else if (nums[i] === 2) {
            temp = nums[i]
            nums[i] = nums[r]
            nums[r] = temp
            r = r-1;
            i = i-1;
        }
    }
    return nums
};

console.log(sortColors([2,0,2,1,1,0]))
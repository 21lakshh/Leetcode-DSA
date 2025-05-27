var rearrangeArray = function(nums) {
    let positives = []
    let m = 0
    let negatives = []
    let n = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>0) {
            positives[m++] = nums[i]
        }
        if (nums[i]<0) {
            negatives[n++] = nums[i]
        }
    }
    m = 0
    n = 0
    for (let i = 0; i < nums.length; i++) {
        if (i%2===0) {
            nums[i] = positives[m++]
        }
        else{
            nums[i] = negatives[n++]
        }
    }

    return nums
};

console.log(rearrangeArray([-1,1]))
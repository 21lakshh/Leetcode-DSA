var rotate = function(nums, k) {
    k = k % nums.length

    function reverse(nums, start, end){
        while (start<end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }

    reverse(nums,0,nums.length-1) // calling helper function
    reverse(nums,0,k-1)
    reverse(nums,k,nums.length-1)

    return nums

};

console.log(rotate([-1,-100,3,99],2))
var findMin = function(nums) {
    let l = 0
    let r = nums.length-1
    let mid;
    while(l<r){
        mid = Math.floor((l+r)/2)
        if (nums[mid] > nums[r]) {
            l = mid+1
        }
        else{
            r = mid
        }
    }
    return nums[l]
};

console.log(findMin([5,1,2,3,4]))
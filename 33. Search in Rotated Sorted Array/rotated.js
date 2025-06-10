var search = function(nums, target) {
    let l = 0
    let r = nums.length-1
    while (l<=r) {
        let mid = Math.floor((l+r)/2)

        if (nums[mid] === target) {
            return mid
        }
        else if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[r]) {
                r = mid-1
            }
            else{
                l = mid+1
            }
        }
        else{
            if (target > nums[mid] && target <= nums[mid]) {
                l = mid+1
            }
            else{
                r = mid-1
            }
        }
    }
    return -1
};

console.log(search([4,5,6,7,0,1,2], 0))
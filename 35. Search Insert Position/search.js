var searchInsert = function(nums, target) {
    let l = 0
    let r = nums.length - 1
    let mid;
    while (l<=r) {
        mid = Math.floor((l+r)/2)

        if (target < nums[mid]) {
            r = mid - 1
        }
        else if (target > nums[mid]) {
            l = mid + 1
        }
        else{
            return mid
        }
    }

    return l;
};

console.log(searchInsert([1,3],2))
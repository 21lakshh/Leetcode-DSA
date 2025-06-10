var searchRange = function(nums, target) {
    function findFirst(nums, target){
        let l = 0
        let r = nums.length-1
        let first = -1;
        while(l<=r){
            let mid = Math.floor((l+r)/2)
            if(nums[mid] === target){
                r = mid -1 
                first = mid
            }
            else if(nums[mid] < target){
                l = mid + 1
            }
            else{
                r = mid -1
            }
        }
        return first 
    }

    function findlast(nums, target){
        let l = 0
        let r = nums.length-1
        let last = -1;
        while(l<=r){
            let mid = Math.floor((l+r)/2)
            if(nums[mid] === target){
                l = mid +1 
                last = mid
            }
            else if(nums[mid] < target){
                l = mid + 1
            }
            else{
                r = mid -1
            }
        }
        return last 
    }

    let first = findFirst(nums, target)
    let last = findlast(nums, target)

    return [first, last]
};

console.log(searchRange([5,7,7,8,8,10], 8))


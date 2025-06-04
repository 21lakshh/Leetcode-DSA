function merge(nums, left, mid, right){
    let n1 = mid-left+1
    let n2 = right-mid

    let a1 = []
    let a2 = []

    for (let i = 0; i < n1; i++) {
        a1[i] = nums[left+i]
    }
    for (let i = 0; i < n2; i++) {
        a2[i] = nums[mid+1+i] 
    }
    let i = 0
    let j = 0
    let k = left
    while (i<n1 && j<n2) {
        if (a1[i]<=a2[j]) {
            nums[k] = a1[i]
            i++
            k++
        }
        else{
            nums[k] = a2[j]
            k++
            j++
        }
    }
    while (i<n1) {
        nums[k] = a1[i]
        i++
        k++
    }
    while (j<n2) {
        nums[k] = a2[j]
        k++
        j++
    }
}

function mergeSort(nums, left, right){
    if(left<right) {
        let mid = Math.floor((left+right)/2)

        mergeSort(nums,left,mid)
        mergeSort(nums,mid+1,right)
        merge(nums,left,mid,right)
    }
}
var fourSum = function(nums, target) {
    mergeSort(nums, 0, nums.length-1)
    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1] &&i>0) {
            continue
        }
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] === nums[j-1] &&j>i+1) {
                continue
            }

            let left = j+1
            let right = nums.length-1
            while (left<right) {
                if ((nums[i]+nums[j]+nums[left]+nums[right])<target) {
                    left++
                }
                else if ((nums[i]+nums[j]+nums[left]+nums[right])>target) {
                    right--
                }
                else{
                    result.push([nums[i],nums[j],nums[left],nums[right]])
                    left++
                    while (nums[left] === nums[left-1] && left<right) {
                        left++
                    }
                }
            }
        }
    }
    return result
};

console.log(fourSum([2,2,2,2,2],8))
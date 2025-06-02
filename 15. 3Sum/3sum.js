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
var threeSum = function(nums) {
    mergeSort(nums, 0, nums.length-1)
    let result = []
    for (let i = 0; i < nums.length; i++) {

        if (i>0 && nums[i] === nums[i-1]) {
            continue
        }
         let l = i+1
         let r = nums.length-1
         while (l<r) {
            let threeSum = nums[l] + nums[r] + nums[i]
            if (threeSum>0) {
                r--
            }
            else if (threeSum<0) {
                l++
            }
            else{
                result.push([nums[i], nums[l], nums[r]])
                l+=1
                while(nums[l] === nums[l-1] && l<r){
                    l+=1
                }
            }
         }
    }
    return result
};

console.log(threeSum([-1,0,1,0]))
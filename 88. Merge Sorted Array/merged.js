var merge = function(nums1, m, nums2, n) {
    let i = 0
    let j = 0
    let merged = []
    while(i<m && j<n){
        if(nums1[i]<=nums2[j]){
            merged.push(nums1[i])
            i++
        }
        else{
            merged.push(nums2[j])
            j++
        }
    }

    while(i<m){
        merged.push(nums1[i])
        i++
    }
    while(j<n){
        merged.push(nums2[j])
        j++
    }

    return merged
};

nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
console.log(merge(nums1, m, nums2, n))
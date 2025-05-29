var subarraySum = function(nums, k) {
    let currSum = 0
    let count = 0
    let hash = {0: 1}
    let diff

    for(let i = 0;i<nums.length;i++){
        currSum += nums[i]
        diff = currSum - k
        if(diff in hash){
            count += hash[diff]
        }

        if(currSum in hash){
            hash[currSum]++
        }
        else{
            hash[currSum] = 1
        }
    }
    return count;
};

console.log(subarraySum([1,2,3],3))
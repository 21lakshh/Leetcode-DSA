var twoSum = function(nums, target) {
    let obj = {}

    for(let i = 0;i<nums.length;i++){
        let diff = target - nums[i]
        if(obj.hasOwnProperty(diff)){
            return [obj[diff], i]
        }
        else{
            obj[nums[i]] = i
        }
    }
    return []
};

let nums = [3,2,4]
let target  = 6;
console.log(twoSum(nums,target));
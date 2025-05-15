var twoSum = function(nums, target) {
    let index = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
                if (nums[i] + nums[j] == target) {
                    index.push(i);
                    index.push(j);
                    break;
                }
        }
    }
    return index;
};

let nums = [2,7,11,15]
let target  = 9;
console.log(twoSum(nums,target));
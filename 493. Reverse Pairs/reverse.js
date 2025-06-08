function countPairs(nums, low, mid, high) {
    let count = 0
    let j = mid + 1
    for (let i = low; i <= mid; i++) {
        while (j <= high && (nums[i] > (2 * nums[j]))) {
            j++
        }
        count += j - (mid + 1)
    }

    return count
}
function merged(nums, left, mid, right) {
    let n1 = mid - left + 1
    let n2 = right - mid

    let a1 = new Array(n1)
    let a2 = new Array(n2)

    for (let i = 0; i < n1; i++) {
        a1[i] = nums[left + i]
    }

    for (let i = 0; i < n2; i++) {
        a2[i] = nums[mid + 1 + i]
    }

    let i = 0
    let j = 0
    let k = left
    let count = 0
    while (i < n1 && j < n2) {
        if (a1[i] < a2[j]) {
            nums[k++] = a1[i++]
        }
        else if (a1[i] > 2 * (a2[j])) {
            nums[k++] = a2[j++]
        }
        else {
            nums[k++] = a2[j++]
        }
    }

    while (i < n1) {
        nums[k++] = a1[i++]
    }
    while (j < n2) {
        nums[k++] = a2[j++]
    }
}

function mergeSort(nums, l, r) {
    let count = 0
    if (l < r) {
        let mid = Math.floor((l + r) / 2);

        count += mergeSort(nums, l, mid);
        count += mergeSort(nums, mid + 1, r);
        count += countPairs(nums, l, mid, r)
        merged(nums, l, mid, r);
    }

    return count
}

var reversePairs = function (nums) {
    return mergeSort(nums, 0, nums.length - 1)
};

console.log(reversePairs([1,3,2,3,1]))
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let output = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
       let last = output[output.length-1]
       let current = intervals[i]

       if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1])
       }
       else{
        output.push(current)
       }
    }
    return output
};

console.log(merge([[1,4],[4,5]]))
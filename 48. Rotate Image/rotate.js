var rotate = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let temp;

    for (let i = 0; i < m; i++) {
        for (let j = i; j < n; j++) {
            temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < Math.floor(n/2); j++) {
            temp = matrix[i][n-j-1]
            matrix[i][n-j-1] = matrix[i][j]
            matrix[i][j] = temp
        }
    }

    return matrix
};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
var setZeroes = function(matrix) {
    let row = []
    let cols = []

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] == 0) {
            row[i] = 1
            cols[j] = 1
          }  
        } 
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
          if (row[i] == 1 || cols[j] == 1) {
            matrix[i][j] = 0
          }  
        } 
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            process.stdout.write(matrix[i][j]+" ")
        }
        console.log()
    }
};

setZeroes([[1,1,1],[1,0,1],[1,1,1]])
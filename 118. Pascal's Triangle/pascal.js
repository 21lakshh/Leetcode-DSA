var generate = function(numRows) {
    let pascal = [[1]];
    if(numRows ===1){
        return pascal
    }

    for(let i=1;i<numRows;i++){
        const row = []
        for(let j = 0;j<i+1;j++){
            if(j === 0 || j === i){
                row.push(1)
            }
            else{
                row.push(pascal[i-1][j] + pascal[i-1][j-1])
            }
        }
        pascal.push(row)
    }
    return pascal
    
};

console.log(generate(5))
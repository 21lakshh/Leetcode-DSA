var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let res = [];
  let increment = 2 * (numRows - 1);

  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += increment) {
      res.push(s[j]);

      // Handle middle rows (not top or bottom)
      if (i > 0 && i < numRows-1) {
        let diagonalIndex = j + increment - 2 * i;
        if (diagonalIndex < s.length) {
          res.push(s[diagonalIndex]);
        }
      }
    }
  }

  return res.join('');
};

console.log(convert("PAYPALISHIRING",4))
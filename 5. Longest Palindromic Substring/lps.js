var longestPalindrome = function(s) {
    let result = "";
    let resultlen = 0;

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        let l = i, r = i;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if (r - l + 1 > resultlen) {
                result = s.slice(l, r + 1);
                resultlen = r - l + 1;
            }
            l--;
            r++;
        }

        // Even length palindrome
        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if (r - l + 1 > resultlen) {
                result = s.slice(l, r + 1);
                resultlen = r - l + 1;
            }
            l--;
            r++;
        }
    }

    return result;
};

console.log(longestPalindrome("babad")); // Output can be "bab" or "aba"

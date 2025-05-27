var maxProfit = function(prices) {
    let currProfit = 0
    let maxProfit = 0
    let j = 0
    for (let i = 1; i < prices.length; i++) {
            currProfit = prices[i] - prices[j]
            if (currProfit<=0) {
                j=i
                currProfit = 0
            }
            maxProfit = Math.max(currProfit, maxProfit)
    }
    return maxProfit
};

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9]))
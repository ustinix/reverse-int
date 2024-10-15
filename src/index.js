module.exports = function reverse (n) {
    n = Math.abs(n).toString()
    let reverseNumber = "";
    for(let i=n.length-1; i>=0; i--) {
    reverseNumber += n[i]
    }
    return +reverseNumber
}

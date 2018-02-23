module.exports = function getZerosCount(number) {
    
var count = 0,
    k = 5;

while(k<=number) {
  count += Math.floor(number/k);
  k = k*5;
}
    return count;
}
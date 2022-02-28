function highestSum(x, y) {
  const result1 = x.reduce((a, b) => a + b);
  const result2 = y.reduce((a, b) => a + b);
  return result1 > result2 ? result1 : result2;
}

module.exports = highestSum;

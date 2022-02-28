function divisible(a) {
  let result = a.filter((item) => item % 2 === 0 && item > 15);
  return result.length;
}

module.exports = divisible;

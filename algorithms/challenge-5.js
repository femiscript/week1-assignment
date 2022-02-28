function replaceDivisible(x, y) {
  let result = [];
  x.forEach((num) => {
    if (num % y !== 0) {
      result.push(num);
    } else {
      result.push("isDivisible");
    }
  });
  return result;
}

module.exports = replaceDivisible;

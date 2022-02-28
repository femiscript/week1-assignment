function noOfElements(x, y, z) {
  /*let result = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] >= y && x[i] <= z) {
          result++;
        }
    }
    return result; */
  const result = x.filter((item) => item >= y && item <= z);
  return result.length;
}

module.exports = noOfElements;

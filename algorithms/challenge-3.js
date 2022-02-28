function isDivisbleByN(arr, n) {
  const result = arr.filter((num) => num % n === 0);
  return result;
}

module.exports = isDivisbleByN;

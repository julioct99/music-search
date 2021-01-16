function getNElements(array, n) {
  return array.filter((el, idx) => idx < n);
}

export default { getNElements };

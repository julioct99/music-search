export const getNElements = (array, n) => array.filter((el, idx) => idx < n);

export const repeatElement = (element, n) => Array(n).fill(element);

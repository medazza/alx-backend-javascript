export default function appendToEachArrayValue(array, appendString) {
  const returnedArray = [];
  for (const idx of array) {
    returnedArray.push(appendString + idx);
  }

  return returnedArray;
}

export default function hasValuesFromArray(set, array) {
  return array.every((elemnt) => set.has(elemnt));
}

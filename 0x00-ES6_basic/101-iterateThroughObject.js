export default function iterateThroughObject(reportWithIterator) {
  const returnStr = [];
  for (const report of reportWithIterator) {
    returnStr.push(report);
  }
  return returnStr.join(' | ');
}

export default function getListStudentIds(arrList) {
  let newArr = [];
  if (arrList instanceof Array) {
    newArr = arrList.map((item) => item.id);
  }

  return newArr;
}

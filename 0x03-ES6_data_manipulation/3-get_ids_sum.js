export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((agg, student) => agg + student.id, 0);
}

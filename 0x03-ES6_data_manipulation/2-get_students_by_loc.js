export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((student) => student.location === city);
}

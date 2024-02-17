module.exports = (studentList, course) => {
  return studentList.filter((el) => el.course === course);
};

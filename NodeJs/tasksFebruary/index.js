// const express = require('express');
// const studentList = require('./studentList');
// // const filterStudentCourse = require('./filterStudents');
// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.listen(5000, (err) => {
//   err ? console.log('Something went wrong') : console.log('Running');
// });

// app.get('/', (req, res) => {
//   res.send('Welcome');
// });

// app.get('/studentList', (req, res) => {
//   res.send(studentList);
// });

// app.get('/name', (req, res) => {
//   res.send('Rahul');
// });
// app.get('/technology', (req, res) => {
//   res.send('MERN Stack');
// });
// app.get('/college', (req, res) => {
//   res.send('Ramgarhia Institute of Engineering and technology');
// });

// //using URL params
// app.get('/getStudents/:type/:name', (req, res) => {
//   const { type } = req.params;
//   const output = filterStudentCourse(studentList, type);
//   res.send(output);
// });

// //POST METHOD
// app.post('/addStudent', (req, res) => {
//   const { id, name, course } = req.body;
//   const student = {
//     id: id,
//     name: name,
//     course: course,
//   };
//   studentList.push(student);
//   res.send(student);
// });
//using Query string
// app.get('/getStudents', (req, res) => {
//   const { type, name } = req.query;
//   const output = filterStudentCourse(studentList, type);
//   res.send(output);
// });

// app.get('/studentMERN', (req, res) => {
//   const output = filterStudentCourse(studentList, 'MERN');
//   res.send(output);
// });

// app.get('/studentMEAN', (req, res) => {
//   const output = filterStudentCourse(studentList, 'MEAN');
//   res.send(output);
// });

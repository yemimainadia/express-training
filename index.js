// const Joi = require('joi');
// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
//     { id: 1, name: 'course1' },
//     { id: 2, name: 'course2' },
//     { id: 3, name: 'course3' }
// ];

// app.get('/', (req, res) => {
//     res.send('ngantuk bgt')
// });

// app.get('/api/courses', (req, res) => {
//     res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
//     const { error } = validateCourse(req.body); //getting result of error
//     if (error) {
//         //400 Bad Request
//         res.status(400).send(result.error.details[0].message);
//         return;
//     }

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) res.status(404).send('The course with the given ID was not found');

//     const results = validateCourse(req.body);
//     //const { error } = validateCourse(req.body); //getting result of error
//     if (results.error) {
//         //400 Bad Request
//         res.status(400).send(result.error.details[0].message);
//         return;
//     }

//     courses.name = req.body.name;
//     res.send(course);

// });

// function validateCourse(course) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     };

//     return Joi.validate(course, schema);
// }

// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) res.status(404).send('The course with the given ID was not found');
//     res.send(course);
// });

// const port = process.env.PORT || 3000
// app.listen(port, () => console.log('Tidur ajalah ${port} '));
const express = require('express');
const path = require('path');
const studentsDb = require('./data/students');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
	const students = studentsDb.getAll();
	res.render('index', { students });
});

app.get('/:id', function(req, res) {
	const student = studentsDb.getStudentById(req.params.id);
	res.render('students', { student })
});

app.listen(3000);

const students = [
	{
		name: 'abul',
		github: 'https://github.com/abulfs89',
		id: 0,
	},
	{
		name: 'bao',
		github: 'https://github.com/BaoQuangNguyen',
		id: 1,
	},
	{
		name: 'bennet',
		github: 'https://github.com/bcarpenter7',
		id: 2,
	},
	{
		name: 'chris',
		github: 'https://github.com/chrisdotgrubb',
		id: 3,
	},
	{
		name: 'emmanuel',
		github: 'https://github.com/eojeomogha',
		id: 4,
	},
	{
		name: 'faith',
		github: 'https://github.com/faithnicoletti',
		id: 5,
	},
	{
		name: 'james',
		github: 'https://github.com/vogat',
		id: 6,
	},
	{
		name: 'jarrod',
		github: 'https://github.com/jbarcs92',
		id: 7,
	},
	{
		name: 'jason',
		github: 'https://github.com/JCBrown602',
		id: 8,
	},
	{
		name: 'jv',
		github: 'https://github.com/JV-1206',
		id: 9,
	},
	{
		name: 'lexie',
		github: 'https://github.com/lexiedooley',
		id: 10,
	},
	{
		name: 'michael',
		github: 'https://github.com/michaeldang33',
		id: 11,
	},
	{
		name: 'noor',
		github: 'https://github.com/Noordibou',
		id: 12,
	},
	{
		name: 'randy',
		github: 'https://github.com/Randiipaulus',
		id: 13,
	},
	{
		name: 'shakiba',
		github: 'https://github.com/shakiba333',
		id: 14,
	},
	{
		name: 'smithy',
		github: 'https://github.com/Stelusno',
		id: 15,
	},
	{
		name: 'tobias',
		github: 'https://github.com/teyotobias',
		id: 16,
	},
	{
		name: 'veronica',
		github: 'https://github.com/veecastro',
		id: 17,
	},
];

function getAll() {
	return students;
}

function getStudentById(id) {
	return students.find(student => student.id === parseInt(id));
}

module.exports = { getAll, getStudentById };

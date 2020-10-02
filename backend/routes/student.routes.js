const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error ' + err));
});

// Create
router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const number = req.body.number;
    const entryClass = req.body.entryClass;
    const entryYear = req.body.entryYear;

    const newStudent = new Student({
        firstName,
        lastName,
        age,
        number,
        entryClass,
        entryYear
    });

    newStudent.save()
    .then(() => res.json('Student Added!'))
    .catch(err => res.status(400).json(`Error, ${err}`));
});

// Read
router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
    .then(student => res.json(student)) // Returning JSON Object
    .catch(err => res.status(400).json(`Error, ${err}`))
});


// Update
router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
    .then(student => {
        student.firstName = req.body.firstName,
        student.lastName = req.body.lastName,
        student.age = Number(req.body.age),
        student.number = Number(req.body.number),
        student.entryClass =  req.body.entryClass,
        student.entryYear = Number(req.body.entryYear),

        student.save()
        .then(() => res.json('User Updated!'))
        .catch(err => res.status(400).json(`Error, ${err}`))
    })
    .catch(err => res.status(400).json(`Error, ${err}`))
})

// Destroy
router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Deleted!'))
    .catch(err => res.status(400).json(`Error, ${err}`))
})

module.exports = router;

const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Create a new student
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  try {
    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

// Read all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.json({ message: err });
  }
});

// Read a specific student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a student
router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a student
router.delete('/:id', async (req, res) => {
  try {
    const removedStudent = await Student.remove({ _id: req.params.id });
    res.json(removedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

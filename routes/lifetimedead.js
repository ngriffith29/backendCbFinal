const express = require('express')
const router = express.Router()

const Student = require('../models/lifetimeModel')

// get all students
router.get('/', async (req, res) => {
    try{
        const students = await Student.find()
        res.json(students)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }

})



// get one student
router.get('/:id', getStudent, (req, res) => {
    res.send(res.student)
    
})

// create student
router.post('/', async (req, res) => {
    const student = new Student({
        assetTag: req.body.assetTag,
        brokeReason: req.body.brokeReason,
        grade: req.body.grade,
        email: req.body.email
    })
    try{
        const newStudent = await(student.save())
        res.status(201).json(newStudent)
    }catch (err){
        res.status(400).json({message: err.message})
    }

 
 
})


// update student

router.patch('/id', (req, res) => {
    
    
})


// delete student

router.delete('/:id', getStudent, async (req, res) => {
    console.log(res.student)
    try{
        await res.student.remove()
        res.json('Deleted Student')
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    
})









async function getStudent (req, res, next){
    let student
    try{
        student = await Student.findById(req.params.id)
        if(student == null) {
            return res.status(404).json({message: 'Cant find student'})
        }

        

    }catch (err){
        return res.status(500).json({message: err.message})
    }


    res.student = student
    next()
}







module.exports= router;
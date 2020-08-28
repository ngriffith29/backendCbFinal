const express = require('express')
const router = express.Router()

const Student = require('../models/forgotModel')

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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        assetTag: req.body.assetTag,
     
    })
    try{
        const newStudent = await(student.save())
        res.status(201).json(newStudent)
    }catch (err){
        res.status(400).json({message: err.message})
    }

 
 
})


// update student


// delete student

router.delete('/:id', getStudent, async (req, res) => {
    
    try{
        await res.student[0].remove()
        res.json('Deleted Student')
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    
})








//.find({},{HomeTown:1})
async function getStudent (req, res, next){
    let student
    try{
        student = await Student.find( { assetTag:req.params.id } )
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
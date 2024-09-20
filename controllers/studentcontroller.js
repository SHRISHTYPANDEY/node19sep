const Student = require('../models/Student');
async function addStudent(req,res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.end("<h1>data added sucessfully</h1>");
    } catch(err) {
        console.log(err);
    }
}
module.exports = {
    addStudent
}
const complaintmodel = require('../models/complaintmodel')

module.exports.getComplaintManagementSystem = async (req,res) => {
    const todo = await complaintmodel.find()
    res.send(todo)
}

module.exports.savetodo = async (req,res) => {
    
    const { text } = req.body

    complaintmodel
         .create({ text })
         .then((data) => {
            console.log("Added Successfully....");
            console.log(data);
            res.send(data)
         })
}

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    complaintmodel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Successfully...."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body
    complaintmodel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully...."))
    .catch((err) => console.log(err))
}
const {Router} = require("express");
const { getComplaintManagementSystem, savetodo, updateToDo, deleteToDo  } = require("../controllers/complaintcontrollers");

const router = Router()

router.get('/', getComplaintManagementSystem )
router.post('/save', savetodo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;
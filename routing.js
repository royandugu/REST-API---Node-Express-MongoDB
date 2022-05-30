const router=require("express").Router();
const {getTask,getTaskSingle,postTask,updateTask,deleteTask}=require("./controller");
router.route("/").get(getTask).post(postTask);
router.route("/:id").get(getTaskSingle).patch(updateTask).delete(deleteTask);
module.exports=router;
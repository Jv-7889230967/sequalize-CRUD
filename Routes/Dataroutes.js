const express=require("express");
const router=express.Router();
const {Create,All,Search,Update,Delete}=require("../controllers/Datacontrollers");

router.route("/create").post(Create);
router.route("/all").get(All);
router.route("/search").get(Search);
router.route("/update").put(Update);
router.route("/delete").delete(Delete);

module.exports=router;
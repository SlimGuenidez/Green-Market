const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/selectItems", itemController.selectAll);
router.post("/insertItem",itemController.insertItem)
router.delete('/d/:id',itemController.deleteItem)
router.put('/u/:id',itemController.updateItem)

module.exports = router;

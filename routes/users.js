const router = require("express").Router();



//get a user
router.get("/", async (req, res) => {
    res.send("hey, it's user route")
});


module.exports = router;
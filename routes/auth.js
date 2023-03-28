const User = require("../models/User");
const router = require("express").Router();

//Register
router.get("/register", async (req, res) => {
    const user = await new User({
        username:"nada",
        email:"nada@gamil.com",
        password:123456
    })
    await user.save();
    res.send("OK");
});


module.exports = router;
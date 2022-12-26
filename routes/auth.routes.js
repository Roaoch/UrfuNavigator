const {Router} = require("express")
const router = new Router()

router.post("/register", async (req, res) => {
    try {
        console.log("Login")
    } catch(e) {
        res.status(500).json({message: "Login went wrong"})
    }
})

module.exports = router
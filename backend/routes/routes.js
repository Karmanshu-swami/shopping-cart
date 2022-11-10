const router = require('express').Router();
const Reg = require('../models/registration')
const admintable = require("../models/adminLogin")

router.get('/', (req, res) => {
    res.status(200).json({ message: "Home page" })
});

// -------------USER ROUTES / FRONTEND ROUTES---------------
router.post("/reg", async (req, res) => {
    try {
        const { username, password } = req.body;
        const verifyUser = await Reg.findOne({ username: username });
        if (verifyUser == null) {
            const Regdata = new Reg({
                username: username,
                password: password
            });
            await Regdata.save()
            res.status(201).json(Regdata)
        } else {
            res.status(200).json({ message: "User already exist!" })
        }
    } catch (error) {
        res.status(400).json({ message: "Something went wrong!" })
    }
});

router.post("/login", async (req, res) => {
    // console.log(req.body);
    try {
        const { username, password } = req.body;
        const verifyUser = await Reg.findOne({ username: username });
        if (verifyUser !== null) {
            if (verifyUser.password == password) {
                res.status(200).json(verifyUser)
            } else {
                res.status(400).json({ message: "Bad request or wrong credentials!" })
            }
        } else {
            res.status(400).json({ message: "Bad request or wrong credentials!" })
        }
    } catch (error) {
        res.status(400).json({ message: "Bad request or wrong credentials!" })
    }
});

// ----------------ADMIN ROUTES---------------
router.get('/admin/', (req, res) => {
    res.status(200).json({ message: "Admin Home page" })
});

router.post("/admin/login", async (req, res) => {
    console.log(req.body);
    try {
        const { adminName, adminPassword } = req.body;
        const verifyadmin = await admintable.findOne({ adminName: adminName });
        if (verifyadmin !== null) {
            if (verifyadmin.adminPassword == adminPassword) {
                res.status(200).json(verifyadmin)
            } else {
                res.status(400).json({ message: "Wrong credentials!" })
            }
        } else {
            res.status(400).json({ message: "User not found!" })
        }
    } catch (error) {
        res.status(400).json({ message: message.error })
    }
});


module.exports = router
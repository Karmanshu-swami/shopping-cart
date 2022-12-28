const router = require('express').Router();
const Reg = require('../models/registration');
const admintable = require("../models/adminLogin");
const Products = require('../models/Products');
const Orders = require('../models/Order')
const MyOrders = require('../models/MyOrders')

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

router.get('/getallproducts', async (req, res) => {
    try {
        const productdata = await Products.find({ productStatus: "Published" })
        res.status(200).json(productdata)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

// Router to add the cart details in the database
router.post("/addcartproducts", async (req, res) => {
    // console.log(req.body);
    const ids = req.body.ids;
    const cartdata = await Products.find({ _id: { $in: ids } })
    res.status(200).json(cartdata)
});

// Router to make the checkout
router.post('/checkout/:username', async (req, res) => {
    const username = req.params.username;
    let cartids = req.body.items
    for (const key in cartids) {
        // console.log(key, cartids[key]);
        const orderdata = new Orders({
            userName: username,
            productId: key,
            productQunty: cartids[key],
            productStatus: "New"
        });
        await orderdata.save()
    }

    const orderrec = await Orders.find({ productStatus: "New" })
    orderrec.forEach(async (result) => {
        const orderid = result._id
        const products = await Products.findById(result.productId)
        // console.log(result);
        const myorderdata = new MyOrders({
            userName: username,
            productPrice: products.productPrice,
            productDesc: products.productDesc,
            productQunty: result.productQunty
        });
        await myorderdata.save()
        await Orders.findByIdAndUpdate(orderid, { productStatus: "Old" })
    })
});

// Route to check the orders i did in past
router.get('/myorders/:username', async (req, res) => {
    const username = req.params.username
    const myorder = await MyOrders.find({ userName: username })
    res.status(200).json(myorder)
})








// ----------------ADMIN ROUTES---------------
router.get('/admin/', (req, res) => {
    res.status(200).json({ message: "Admin Home page" })
});

router.post("/admin/login", async (req, res) => {
    // console.log(req.body);
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

router.post('/admin/addproducts', async (req, res) => {
    try {
        // console.log(req.body);
        const { productName, productDesc, productPrice } = req.body
        const productdata = new Products({
            productName: productName,
            productDesc: productDesc,
            productPrice: productPrice,
            productStatus: "Unpublished"
        })
        await productdata.save()
        res.status(201).json(productdata)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

});

router.get('/admin/getallproducts', async (req, res) => {
    try {
        const productdata = await Products.find()
        res.status(200).json(productdata)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.get('/admin/getsingleproduct/:id', async (req, res) => {
    try {
        const id = req.params.id
        const productdata = await Products.findById(id)
        res.status(200).json(productdata)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.put('/admin/updateproduct/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { productName, productDesc, productPrice, productStatus } = req.body;
        const updatedproduct = await Products.findByIdAndUpdate(id, {
            productName: productName,
            productDesc: productDesc,
            productPrice: productPrice,
            productStatus: productStatus
        });
        res.status(200).json({ message: "Successfully updated the product" })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong" })
    }
})

module.exports = router
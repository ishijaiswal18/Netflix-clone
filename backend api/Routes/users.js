const router = require("express").Router();
const User = require("../models/User");
const cryptoJS = require("crypto-js");
const verify = require("../verifyToken");



// update
router.put("/:id", verify, async (req, res) => {
    
    if (req.user.id === req.params.id || req.user.isAdmin) {
      if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString();
      }
  
      try {
        //   console.log(req.body);
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        // console.log(updatedUser);
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can update only your account!");
    }
  });

// delete
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can delete only your account!");
    }
});

// get

router.get("/find/:id",  async (req, res) => {
    try {
        console.log(req.params.id);
        const user = await User.findById(req.params.id);



        // const user = await User.findById(req.params.id);
        console.log(user);
        const {password, ...info} = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all
router.get('/', verify, async(req, res) => {
    const query = req.query.new;
    
    if(req.user.isAdmin){
        try {
            if (query === 'true') {
                const users = await User.find({ isNew: true }).sort({_id: -1}).limit(10);
                res.status(200).json(users);
            } else {
                const users = await User.find({ isNew: false });
                res.status(200).json(users);
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else{
        console.log(req.user.isAdmin);
        res.status(403).json("You can't see all users!");
    }
});


// get user stats
router.get('/stats', verify, async(req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.getFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: { month: "$month" },
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;




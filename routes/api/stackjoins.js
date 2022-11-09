const express = require("express");
const router = express.Router();

const Stackjoin = require("../../models/Stackjoin");

router.get("/test", (req, res) => res.json({ msg: "backend works" }));

// @route GET /api/stackjoins
// @desc Get stackjoins (public)
router.get("/", (req, res) => {
  Stackjoin.find()
    .then((info) => res.json(info))
    .catch((err) => res.status(404).json({ msg: "no stackjoins found" }));
});

// @route POST /api/stackjoins
// @desc Create new stackjoin (public)
router.post("/", (req, res) => {
  if (Number.isNaN(Number(req.body.amount))) {
    console.log("Ignoring stackjoin with non-numeric amount " + req.body.amount);
  }
  
  const newStackjoin = new Stackjoin({
    amount: req.body.amount,
    miner: req.body.miner,
    spent: false,
    twitterURL: req.body.twitterURL,
  });

  newStackjoin.save().then((info) => res.json(info));
});

// @route DELETE /api/stackjoins
// @desc Delete stackjoin (public)
router.delete("/", (req, res) => {
  Stackjoin.findOneAndRemove({ _id: req.body.id }).then(() => {
    res.json({ success: true });
  });
});

// @route UPDATE /api/stackjoins/update/:id
// @desc Update stackjoin (public)
router.post("/update/:id", (req, res) => {
  Stackjoin.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        amount: req.body.amount,
        miner: req.body.miner,
        twitterURL: req.body.twitterURL,
        spent: req.body.spent,
      },
    },
    { new: true }
  )
    .then((info) => {
      res.json(info);
    })
    .catch((err) => res.status(400).json({ msg: "update failed" }));
});

module.exports = router;

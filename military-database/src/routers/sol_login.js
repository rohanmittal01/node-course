const express = require("express");
const Sol_login = require("../models/sol_login");
const router = new express.Router();
const bcrypt = require("bcryptjs");
router.post("/sol_login/register", async (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  req.body.password = await bcrypt.hash(req.body.password, 8);
  const sol_login = new Sol_login(req.body);
  sol_login
    .save()
    .then(() => {
      res.status(201);
      res.send(sol_login);
    })
    .catch((e) => {
      res.status(400);
      res.send(e);
      console.log(e);
    });
});

router.get("/sol_login", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  Sol_login.find({})
    .then((categories) => {
      res.send(categories);
    })
    .catch((e) => {
      res.status(500);
      res.send();
    });
});

router.post("/sol_login/login", async (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  try {
    const user = await Sol_login.findOne({ S_id: req.body.S_id });
    console.log(user);
    if (!user) {
      console.log("errororororo");
      res.status(404).send("User not found");
    } else {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        res.status(400).send("Unable to Login");
      }
      res.send(user);
    }
  } catch (e) {
    console.log("here");
    res.status(400).send();
  }
});

// router.post("/sol_login/login", async (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   const _id = req.params.id;
//   try {
//     const category = await Sol_login.find({ S_id: _id });
//     if (!category) {
//       return res.status(404).send();
//     }
//     res.status(200).send(category);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

router.patch("/sol_login/forgotPassword/:id", async (req, res) => {
  console.log("In forgot password");
  req.body.password = await bcrypt.hash(req.body.password, 8);
  try {
    const category = await Sol_login.findOneAndUpdate(
      { S_id: req.body.S_id, email: req.body.email },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!category) {
      return res.status(404).send("User not found");
    }
    res.send(category);
  } catch (e) {
    res.status(400).send("Unable to update password.");
  }
});

router.patch("/sol_login/updatePassword", async (req, res) => {
  console.log(req.body);
  req.body.newPassword = await bcrypt.hash(req.body.newPassword, 8);
  data = {S_id: req.body.S_id, password: req.body.newPassword};
  try {
    const user = await Sol_login.findOne({ S_id: req.body.S_id });
    if (!user) {
      res.status(400).send('User ID not found!');
    } else {
      const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
      if (!isMatch) {
        res.status(400).send("Invalid credetials");
      }
      const category = await Sol_login.findOneAndUpdate(
        { S_id: req.body.S_id },
        data,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!category) {
        return res.status(404).send("User not found");
      }
      res.send(category);
    }
  } catch (e) {
    res.status(400).send("Unable to update password.");
  }
});

router.patch("/sol_login/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const category = await Sol_login.findOneAndUpdate({ name: _id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      return res.status(404).send();
    }
    res.send(category);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/sol_login/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const category = await Sol_login.findOneAndDelete({ name: _id });
    console.log(category);
    if (!category) {
      return res.status(404).send();
    }
    res.send(category);
  } catch {
    res.status(500).send();
  }
});

module.exports = router;

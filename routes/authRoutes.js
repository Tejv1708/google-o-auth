import passport from "passport";
import express from "express";

const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/auth/google/callback", passport.authenticate("google") , (req , res) => {
    res.redirect('/survey')
});

router.get("/api/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
  console.log(req.user);
});

export default router;

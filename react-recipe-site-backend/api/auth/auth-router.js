const router = require("express").Router();
const { checkUsernameExists, validateRoleName } = require("./auth-middleware");
const JWT_SECRET = process.env.PORT;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", validateRoleName, (req, res, next) => {
  const { username, password } = req.body;
  const { role_name } = req;
  const hash = bcrypt.hashSync(password, 10);

  // Add User
});

function generateToken(user) {
  const payload = {
    subject: user.user_id,
    role_name: user.role_name,
    username: user.username,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = router;

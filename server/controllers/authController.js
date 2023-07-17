import bcrypt from "bcrypt";
import UsersData from "../mongodb/models/admin.js";

const handleLogin = async (req, res) => {
  const AdminInfo = req.body;

  if (!AdminInfo.username || !AdminInfo.pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  // find the user in DB
  const foundUser = await UsersData.findOne({ username: AdminInfo.username });
  if (!foundUser) return res.sendStatus(401);

  // evaluate password
  const match = await bcrypt.compare(AdminInfo.pwd, foundUser.pwd);
  if (match) {
    res.json({ success: `User ${AdminInfo.username} is logged in!` });
  } else {
    res.sendStatus(401);
  }
};

export { handleLogin };

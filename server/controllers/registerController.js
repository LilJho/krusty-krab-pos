import bcrypt from "bcrypt";
import UsersData from "../mongodb/models/admin.js";

const handleNewUser = async (req, res) => {
  const AdminInfo = req.body;

  if (!AdminInfo.username || !AdminInfo.pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  // check for duplicate usernames in the db
  const duplicate = await UsersData.findOne({
    username: AdminInfo.username,
  }).exec();
  if (duplicate) return res.sendStatus(409);
  try {
    // encrypt the password
    const hashPwd = await bcrypt.hash(AdminInfo.pwd, 10);
    const newUser = await UsersData.create({
      username: AdminInfo.username,
      pwd: hashPwd,
    });

    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { handleNewUser };

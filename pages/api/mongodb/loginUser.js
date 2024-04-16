/**
 *
 *  This is the loginUser api
 *
 */

export default function handler(req, res) {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = "Logged In User";

    // res.setHeader("Set-Cookie", `token=${token}; Path=/; HttpOnly`);

    res.status(200).json({ message: "Login successful", token });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
}

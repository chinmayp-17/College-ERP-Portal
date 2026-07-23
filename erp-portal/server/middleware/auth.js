import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET || "sEcReT");
      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Authentication failed. Invalid token." });
  }
};

export default auth;

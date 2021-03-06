import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
const expiration = "7d";

export const authMiddleware = ({ req }: any) => {
  // allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const data = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch (err) {
    console.error(err);
  }

  return req;
};

export const signToken = ({ firstName, lastName, email, _id, admin }: any) => {
  const payload = { firstName, lastName, email, _id, admin };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

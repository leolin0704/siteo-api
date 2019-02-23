const TOKEN_KEY = 'token';

const getUserByToken = (token) => {
  if(token.toUpperCase() === "ADMIN") {
    return {
      id:1,
      account: "admin"
    };
  }

  return null;
}

export default (req, res, next) => {
  const token = req.headers[TOKEN_KEY];
  if(token) {
    const user = getUserByToken(token);
    
    if(user) {
      req.currentUser = user;
      next();
      return;
    }
  }

  res.sendStatus(403);
  res.end();
}
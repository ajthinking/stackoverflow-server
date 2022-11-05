export const questionAuth = (req, res, next) => {
  if (req.question.author._id.equals(req.user.id) || req.user.role === 'admin') return next();
  res.status(401).end();
};

import asyncHandler from 'express-async-handler';

// @desc    Auth User/Set Token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' });
});

export { authUser };

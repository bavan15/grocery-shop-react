import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, "MERN_SECRET", {
    expiresIn: '90d',
  })
}

export default generateToken

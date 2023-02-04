import bcrypt from 'bcryptjs'

const saltRounds = 10;

const password1 = 'HelloWorld'
const password2 = 'helloworld'

const salt = bcrypt.genSaltSync(saltRounds)
console.log('Salt: ', salt)

const hash1 = bcrypt.hashSync(password1, salt)
const hash2 = bcrypt.hashSync(password2, salt)
console.log(hash1)

const verifyPassword1 = bcrypt.compareSync('HelloWorld', hash1)
const verifyPassword2 = bcrypt.compareSync(password1, hash2)
console.log('verify', verifyPassword1)
console.log('verify2', verifyPassword2)
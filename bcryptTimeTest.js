import bcrypt from 'bcryptjs'
const password = 'Hello World'

for(let saltRounds = 10; saltRounds < 19; saltRounds++) {
    console.time(`bcrypt | cost ${saltRounds}, time to hash`)
    bcrypt.hashSync(password, saltRounds)
    console.timeEnd(`bcrypt | cost ${saltRounds}, time to hash`)
}
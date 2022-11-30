const dataBase = require('../../config/mogoose')
const User = require('../user')

const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
   ]

   dataBase.once('open',()=> {
    console.log('MongoDB connected!')

    //建立種子資料
    users.forEach(user => {
        User.create({
          firstName: user.firstName,
          email: user.email,
          password: user.password,
          })
    
    });
    console.log('seed created!')
})
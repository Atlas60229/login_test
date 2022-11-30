const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/',(req,res)=>{
  const id = req.cookies.userId
  console.log(id)
  if (id){
    User.findById(id)
    .lean()
    .then(user => {
      if (user) {
        const firstName = user.firstName
        res.render('welcome', { user })
      } else {
        res.render('index')
      }
    })
  }else{
    res.render('index')
  }
})

router.post('/login',(req,res)=>{
  const { email, password } = req.body

  User.findOne({ email, password })
      .lean()
      .then(user =>{
        if (user) {
          const userId = user._id.toString()
          res.cookie('userId', userId)
          res.render('welcome', { user })
        } else {
          res.render('index')
        }})
      .catch(error => console.log(error))
    
})
module.exports = router 
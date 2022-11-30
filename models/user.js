const mongoose = require('mongoose') //用const mongoose代表整個mongoose函式庫
const Schema = mongoose.Schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema, "users") // require restaurant.js時會得到mongoose.model('Restaurant',restaurantSchema)
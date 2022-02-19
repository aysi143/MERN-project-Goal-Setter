const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Name here']
        },

        email:{
            type: String,
            required: [true, 'Add email'],
            unique: true
        },

        password:{
            type: String,
            required: [true, 'Add password']
        },
  
    },

    {
        timestamps: true
    }
)

module.exports =mongoose.model('User', userSchema)
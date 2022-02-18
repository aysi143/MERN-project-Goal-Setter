const express= require('express')
const colors =require('colors')
const dotenv= require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const connectDB =require('./config/db')
const port =process.env.port
const app =express()

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.listen(port, ()=>console.log(`Server is now working on ${port}`))


app.use(errorHandler)

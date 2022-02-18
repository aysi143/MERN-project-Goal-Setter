const express= require('express')
const dotenv= require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const port =process.env.port
const app =express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.listen(port, ()=>console.log(`Server is now working on ${port}`))


app.use(errorHandler)

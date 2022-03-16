

const express = require('express');
const connectDb = require('./config/connectdb');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const rateRoute = require('./routes/rate');
const storeRoute = require('./routes/store');
const userRouter= require('./routes/user')
const path = require('path')

const app =express()
require('dotenv').config()

connectDb();
app.use (express.json())
app.use('/api/auth',authRoute)
app.use('/api/product',productRoute)
app.use('/api/store',storeRoute)
app.use('/api/rate',rateRoute)
// app.use('/api/user',userRouter)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')))

    app.get('*', (req, res) =>{ 
    res.sendFile(path.resolve(__dirname,'./client','build','index.html'))
    });
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
  }

app.listen(process.env.PORT || 5000 , ()=>console.log(`port is running : ${process.env.PORT}`))
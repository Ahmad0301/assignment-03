const express=require('express')
const fs=require('fs')
const app = express()
app.use(express.json())

app.listen(3000,(req,resp)=>{
    console.log('Server is running on port 3000')
})
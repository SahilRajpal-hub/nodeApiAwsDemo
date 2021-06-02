const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        msg:'This is api endpoint'
    })
})


app.listen(3000,()=>{
    console.log('API running...')
})
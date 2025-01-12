const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())

const port = 8000
// สำหรับเก็บ User
let users = []
let counter = 1

app.get('/user',(req,res)=>{
    res.json(users)
})

// path /users 
app.post('/users',(req,res)=>{
    let user = req.body
    user.id = counter
    counter += 1
    users.push(user)
    res.json({
        massage : "Add data แล้วโว้ยยยยย",
        data : user
    })
})

//path /users:id
app.put('/users/:id',(req,res)=>{
    let id = req.params.id
    let updateUser = req.body
    
    let seletedIndex = users.findIndex(user => user.id == id)
    res.send(seletedIndex + '')
})
    

app.listen(port,(req,res)=>{
    console.log("run server at port"+port)
})
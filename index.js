const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q.q)
    console.log(q.name)
    res.json({'userid': q.name})
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    
    if (name == "dog") {
        console.log(name)
        res.json({'sound': '멍멍'})
    } else if (name == "cat") {
        console.log(name)
        res.json({'sound': '야옹'})
    } else if (name == "pig") {
        console.log(name)
        res.json({'sound': '꿀꿀'})
    } else {
        console.log(name)
        res.json({'sound': '알수없음'})
    }
})

app.listen(3000)
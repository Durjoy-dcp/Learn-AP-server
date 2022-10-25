const express = require('express')
const app = express()
const port = 5000
const courses = require('./data/courses.json')
const catagories = require('./data/catagory.json');
const cors = require('cors')

app.use(cors())
app.get('/courses/:id', (req, res) => {
    const CatagoryId = req.params.id;
    const catagoryCourses = courses.filter(c => c.catagory === req.params.id);
    res.send(catagoryCourses)
})
app.get('/catagory', (req, res) => {
    res.send(catagories);
})
app.get('/allcourses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
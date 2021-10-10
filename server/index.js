const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const routes = require('./routes')
const router = express.Router()
const {connect} = require('./config/db')
const cors = require('cors')
const url =  "mongodb+srv://H01263218566:H01263218566@cluster0.h92cq.mongodb.net/clone_medium?retryWrites=true&w=majority";
// | "mongodb://localhost:27017/medium"

//Pare json
app.use(express.json());

//Pare bod
app.use(express.urlencoded({ extended: true }));  

app.use(cors()) 

//connect to mongodb server
connect(url)

//Set router
routes(router) 
app.use('/api', router)

app.use(express.static(path.join(__dirname, 'build')))
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(PORT, ()=>{console.log('Listening on port 5000')})
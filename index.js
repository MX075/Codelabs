const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')



const app = express()

//estrategia de passport
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.use("/", require("./Router"));


app.listen(3000, () => {
    console.log('server on port', '3000')
})
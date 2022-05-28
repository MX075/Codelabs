const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index')
})
router.post('/', (req, res) => {
    try {
        const { user, email, tel, description } = req.body
        const output = user
        console.log(output)
        res.redirect('/Solicitud-Enviada')
    } catch {

    }
})
router.get('/Solicitud-Enviada', (req, res) => {
    res.render('Revision')
})
module.exports = router
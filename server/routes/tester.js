const express = require('express')
const Tester = require('../models/tester')
const router = express.Router()


router.get('/', (req, res) => {
    res.json({mssg: 'Test Route'})
})

router.get('/:id', (req, res) =>{
    res.json({mssg: 'Test Route ID'})
})

router.post('/', async (req, res)=> {
    const {title, description, price, stock} = req.body
    try {
        const tester = await Tester.create({title, description, price, stock})
        res.status(200).json(tester) 
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }

    res.json({mssg: 'Test Route Post'})
})

router.delete('/:id', (req, res)=> {
    res.json({mssg: 'Delete Test Route '})
})

router.patch('/', (req, res)=> {
    res.json({mssg: 'Patch Test Route '})
})


module.exports = router;
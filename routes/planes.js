const express = require('express')
const router = express.Router()
const path = require('path')
const {getPlanes} = require("../controllers/plains");

//@route GET /api/planes
//@des Отримати всі літаки
router.get('/', getPlanes)

//@route GET /api/planes/:id
//@des Отримати контретний літак по id
router.get('/:id', (req,res) => res.send('Get single planes'))

//@route POST /api/planes
//@des Створити літак
router.post('/', (req,res) => res.send('Create plane'))

module.exports = router
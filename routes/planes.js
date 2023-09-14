const express = require('express')
const router = express.Router()
const path = require('path')
const {getPlanes, createPlane, getPlane} = require("../controllers/plains");
const multer = require('multer')

//показуємо де зберігати завантажені файли
const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })


//@route GET /api/planes
//@des Отримати всі літаки
router.get('/', getPlanes)

//@route GET /api/planes/:id
//@des Отримати контретний літак по id
router.get('/:id', getPlane)

//@route POST /api/planes
//@des Створити літак
router.post("/", upload.single('planeImage'), createPlane);


module.exports = router
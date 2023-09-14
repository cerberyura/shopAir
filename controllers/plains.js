const Plane = require('../models/plane')

const getPlanes = async (req, res) => {
  try {
    const planes = await Plane.find()
    res.status(200).json(planes)
  } catch (error) {
    res
      .status(500)
      .json({message: 'Не вдалося отримати список літаків, повторіть спробу'})
  }
}

const createPlane = async (req, res) => {
  const errors = {}

  if (!req.body.name){
    errors.name = {message: 'Вкажіть назву'}
  }

  if (!req.body.price){
    errors.price = {message: 'Вкажіть ціну'}
  }

  if (!req.body.description){
    errors.description = {message: 'Вкажіть опис'}
  }

  if (!req.body.description && req.body.description.length > 700){
    errors.description = {message: 'Занадто великий опис'}
  }

  if (!req.body.capacity){
    errors.capacity = {message: 'Вкажіть кількість місць'}
  }

  if (!req.body.capacity && req.body.capacity.length > 2){
    errors.capacity = {message: 'Кількість місць не може бути більша ніж 99'}
  }

  if (!req.file){
    errors.planeImage = {message: 'Додайте фото літака'}
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors)
  }

  try {
    const {name, price, description, capacity} = req.body
    const plane = await Plane.create({
      name,
      price,
      description,
      capacity,
      planeImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
    })

    res.status(201).json(plane)
  } catch (error) {
    res
      .status(500)
      .json({message: 'Не вдалося cтворити літак, повторіть спробу'})
  }
}

module.exports = {
  getPlanes,
  createPlane
}
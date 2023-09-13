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
  try {
     const {name, price, description, capacity} = req.body
     const plane = await Plane.create({
      name,
      price,
      description,
      capacity
    })

    res.status(201).json(plane)
  } catch (error) {
    res
      .status(500)
      .json({message: 'Не вдалося творити літак, повторіть спробу'})
  }
}

module.exports = {
  getPlanes
}
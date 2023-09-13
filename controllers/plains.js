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

module.exports = {
  getPlanes
}
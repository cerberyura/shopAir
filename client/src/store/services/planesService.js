import axios from "axios";

const getPlanes = async () => {
  const planes = await axios.get('/api/planes')

  return planes.data
}

const  planesService = () => {
  return(
    getPlanes()
  )
}

export default planesService

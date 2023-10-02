import React, {useCallback, useState} from "react";
import {ContentWrapper} from "../../components/content-wrapper/content-wrapper";
import styles from './styles.module.scss'
import {Button} from "../../components/button";
import {useNavigate} from "react-router-dom";
import {Input} from "../../components/input";
import {useDispatch, useSelector} from "react-redux";
import {createPlane} from "../../store/plane/planeSlice";
import {Path} from "../../Path";

export const CreatePlanePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {errors} = useSelector(state => state.plane)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [capacity, setCapacity] = useState('')
  const [planeImage, setPlaneImage] = useState(null)

  const handleCreatePlane = useCallback(() => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', price)
      formData.append('description', description)
      formData.append('capacity', capacity)
      formData.append('planeImage', planeImage)

    dispatch(createPlane(formData)).then(res => {
      if (!res.error){
        navigate(`${Path.plane}/${res.payload._id}`, {replace: true})
      }
    })
  },[name, price, description, capacity, planeImage, dispatch, navigate])

  return (
    <>
      <ContentWrapper className={styles.createPlane}>
        <Button containerClassName={styles.backButtonContainer} onClick={() => navigate(-1)}>
          Назад
        </Button>

        <form className={styles.form}>
          <h1 className={styles.title}>Створити літак</h1>
          <Input
            name='name'
            placeholder='Назва літака'
            error={errors && errors.name && errors.name.message}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            name='price'
            placeholder='Ціна літака'
            error={errors && errors.price && errors.price.message}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Input
            name='description'
            placeholder='Опис літака'
            error={errors && errors.description && errors.description.message}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            name='capacity'
            placeholder='Кількість місць в літаку'
            error={errors && errors.capacity && errors.capacity.message}
            onChange={(e) => setCapacity(e.target.value)}
          />

          <Input
            name='planeImage'
            type='file'
            placeholder='Фотографія літака'
            error={errors && errors.planeImage && errors.planeImage.message}
            onChange={(e) => setPlaneImage(e.target.files[0])}
          />

          <Button
            containerClassName={styles.buttonContainer}
            onClick={handleCreatePlane}
          >
            Створити
          </Button>

        </form>
      </ContentWrapper>
    </>
  )
}
import React from "react";
import {ContentWrapper} from "../../components/content-wrapper/content-wrapper";
import styles from './styles.module.scss'
import {Button} from "../../components/button";
import {useNavigate} from "react-router-dom";
export const OrderPage = () => {
  const navigate = useNavigate()
  return(
    <>
    <ContentWrapper className={styles.order}>
      <h1>Ваше замовлення буде доставлене в найблищий час</h1>
      <Button
        containerClassName={styles.button}
        onClick={() => navigate('/')}
      >
        На головну
      </Button>
    </ContentWrapper>
    </>
  )
}
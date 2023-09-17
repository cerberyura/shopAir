import React from "react";
import styles from './Header.module.scss'
import WaveImage from './wave.svg'
import {ContentWrapper} from "../content-wrapper/content-wrapper";
export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <ContentWrapper className={styles.content}>
          <h1 className={styles.title}>
            {`Подорож із\n Зручністю`}
          </h1>
          <p className={styles.desc}>
            {`З нашою компанією ви забудите про все, окрім\n Високого рівня подорожів`}
          </p>
        </ContentWrapper>
        <img src={WaveImage} alt='Wave' className={styles.wave}/>
      </div>
    </>
  )
}
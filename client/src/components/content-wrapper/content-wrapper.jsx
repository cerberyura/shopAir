import React from "react";
import styles from './styles.module.scss'
export const ContentWrapper = ({children, className=''}) => {
  return(
    <>
    <div className={`${styles.contentWrapper} ${className}`}>{children}</div>
    </>
  )
}
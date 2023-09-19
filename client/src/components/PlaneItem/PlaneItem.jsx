import React from "react";
import {Link} from "react-router-dom";
import {Path} from '../../Path'
import styles from './styles.module.scss'
export const PlaneItem = ({
                            name = '',
                            price = 0,
                            description = '',
                            capacity = '',
                            planeImage = '',
                            _id = ''
                          }) => {
  return (<>
  <Link to={`${Path.plane}/${_id}`} className={styles.planeItem}>
    <div className={styles.capacity}>
      {capacity}
    </div>
    {planeImage && <img className={styles.image} src={planeImage} alt=''/>}
    <div className={styles.info}>
      <h2 className={styles.title}> {name} </h2>
      <span className={styles.price}>{price}</span>
    </div>
  </Link>
    </>
    )
}
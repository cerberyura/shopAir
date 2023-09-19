import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPlanes} from "../../store/planes/planesSlice";
import {Spinner} from "../spinner";
import {ContentWrapper} from "../content-wrapper/content-wrapper";
import {PlaneItem} from "../PlaneItem";
import styles from './styles.module.scss'
import {Link} from "react-router-dom";
import {Path} from "../../Path";


export const Planes = () => {
  const dispatch = useDispatch()
  const {planes, isLoading} = useSelector((state) => state.planes)

  useEffect(() => {
    dispatch(getPlanes())
  }, [dispatch]);

  if (isLoading) {
    return <Spinner/>
  }

  return(
    <>
      <div>
        {/*<div className={styles.sort}>*/}
        {/*  <ContentWrapper>*/}
        {/*    <button>*/}
        {/*      Фільтрувати по ціні*/}
        {/*    </button>*/}
        {/*    <Link to={Path.createPlane}>*/}
        {/*      Добавити літак*/}
        {/*    </Link>*/}
        {/*  </ContentWrapper>*/}
        {/*</div>*/}
        <ContentWrapper className={styles.planesGrid}>
          {planes && planes.map(plane => <PlaneItem key={plane._id} {...plane} />)}
        </ContentWrapper>
      </div>
    </>
  )
}
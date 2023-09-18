import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPlanes} from "../../store/planes/planesSlice";


export const Planes = () => {
  const dispatch = useDispatch()
  const {planes, isLoading} = useSelector((state) => state.planesSlice)

  useEffect(() => {
    dispatch(getPlanes())
  }, [dispatch]);
  return(
    <>
      <div>
        Planes
      </div>
    </>
  )
}
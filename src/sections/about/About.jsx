import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const About = () => {

  const reduxValue = useSelector((state) => state.countValue)
  
  return (
    <>
        <div className="container">
            <h1>About page Counter Number: {reduxValue}</h1>
        </div>
    </>
  )
}

export default About
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../slices/counterSlice'

const Home = () => {

  let [count, setCount] = useState('0')
  const reduxValue = useSelector((state) => state.countValue)
  const dispatch = useDispatch()

  let handleIncrement = () => {
    count++
    setCount(count)
    dispatch(increment(count))
  }

  let handleDecrement = () => {
    count--
    setCount(count)
    dispatch(decrement(count))
  }

  return (
    <>
        <div className="container">
            <div className="count_area">
              <button onClick={handleIncrement}>increment</button>
              <h1>Count Number: {count}</h1>
              <button onClick={handleDecrement}>decrement</button>
            </div>
        </div>
    </>
  )
}

export default Home
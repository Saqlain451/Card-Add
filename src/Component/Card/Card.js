import React from 'react'
import './card.css';
const Card = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <button onClick={()=>{props.delClick(props.index)}}>delete</button>
    </>
  )
}

export default Card
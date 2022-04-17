import React from 'react'
import styles from './Restro.module.css'

function Restro({imgURL,name,categories,costforone,min,paymentMethods,rating,reviews,totalVotes}) {
  return (
  <div style={{border:"1px solid #d7d7d7",boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
    <div className={styles.restro}>
    <div className={styles.imgdiv} >
      <img src={imgURL} alt="" />
    </div>
    <div className={styles.info}>
        <h2>{name}</h2>
        <p>{categories}</p>
        <p>Cost {costforone} for one</p>
        <p>Min: {min}</p>
        <p>{paymentMethods}</p>
    </div>
    <div className={styles.but}>
        <button id={styles.btn}>{rating}</button>
        <p>{totalVotes} votes</p>
        <p>{reviews} reviews</p>
    </div>
    </div>
    <div className={styles.order}>

    <button>Order Online</button>
    </div>
    </div>
  )
}

export default Restro

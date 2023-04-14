import React from 'react'
import styles from './../../styles/card.module.scss'
const Card = ({img, title, list, desc, heading}) => {
  return (
    <div className={styles.card_container}>
        <img src={img} alt="" />
        <div className={styles.card_title}>
            {title}
        </div>
        <h3 className={styles.card_heading}>
            {heading}
        </h3>
        <div className={styles.card_desc}>
            {desc}
        </div>
        {list.map(item => {
            return <div className={styles.item_list} key={item.text}>{item.text}</div>
        })}
    </div>
  )
}

export default Card
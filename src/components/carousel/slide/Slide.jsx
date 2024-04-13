import React from 'react'
import styles from "./slide.module.css"

const Slide = ({ slide_data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={slide_data.slide_img} alt={slide_data.slide_description} />
            </div>
            <div className={styles.details}>
                <p>{slide_data.slide_heading}</p>
                <h3>{slide_data.slide_description}</h3>
            </div>
        </div>
    )
}

export default Slide
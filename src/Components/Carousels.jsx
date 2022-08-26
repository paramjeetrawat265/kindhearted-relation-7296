import React, { useEffect, useState } from 'react'
import { CarouselData } from './CarouselData';
import styles from "../Styles/Carousels.module.css"
import { FaChevronLeft,FaChevronRight } from "react-icons/fa"

const Carousels = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }, 4000)
    return () => clearInterval(id)
})

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const preSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className={styles.slider}>
        <FaChevronLeft className={styles.leftArrow} onClick={preSlide} />
        <FaChevronRight className={styles.rightArrow} onClick={nextSlide} />
        {CarouselData.map((slide, index) => (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<div><img src={slide.image} alt="products" className={styles.image} />
                        <h1 className={styles.head}>{slide.title}</h1>
                        <p className={styles.desc}>{slide.desc}</p>
                        <button className={styles.button}>{slide.link}</button>
                        </div>)}

          </div>
        ))
        }
      </section >
    </div>
  )
}

export default Carousels
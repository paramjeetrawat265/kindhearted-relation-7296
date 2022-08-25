import React, { useEffect, useState } from 'react'
import { CarouselData } from './CarouselData';
import styles from "./Carousels.module.css"
import { Button } from "@chakra-ui/react"
import { BsChevronCompactRight,BsChevronCompactLeft } from "react-icons/bs"

const Carousels = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log(length)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }, 4000)
    console.log(id)
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
        <BsChevronCompactLeft className={styles.leftArrow} onClick={preSlide} />
        <BsChevronCompactRight className={styles.rightArrow} onClick={nextSlide} />
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
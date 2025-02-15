'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import {AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import ScreenSize from '@/data/screenSize'
import { CarouselProps } from "@/data/types";
import styles from '@/app/page.module.css'


const Carousel = ({ 
  autoSlide,
  autoSlideInterval = 0,
  slides,
  carouselNavBtn,
  carouselIdicator,
}: CarouselProps) => {
  const [curr, setCurr] = useState(0);
  // const [lineWidth, setLineWidth] = useState<number>(1)

 useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const { screenWidth, screenHeight } = ScreenSize()

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}
        // style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        <AnimatePresence mode="popLayout">
        { slides.map(({id, title, subTitle, img}, idx) => 
             curr === idx && (
                <motion.div key={id}
                layout
                initial={{ x:'100%', opacity: 0 }}
                animate={{ x:0, opacity: 1 }} 
                exit={{opacity:0}}
                transition={{ ease: "easeInOut", duration: 1 }}

                style={{width:screenWidth, height:screenHeight, display:'flex'}}> 
                <div className={styles.bannerCaption}>
                  <motion.h1 
                    initial={{y: 40, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: -20, opacity: 0 }}
                    transition={{ease: 'easeInOut', duration:0.5, delay: 0.5}}
                  style={{color:'whitesmoke', fontSize:'6rem'}}>{title}</motion.h1>
                  <motion.p 
                  initial={{y: 20, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  exit={{y: -20, opacity: 0 }}
                  transition={{ease: 'easeInOut', duration:0.5, delay: 0.75}}
                  style={{color:'wheat', fontSize:"1.5rem"}}>{subTitle}</motion.p>
                </div>
                <div className={styles.imgContainer}>
                  <Image src={img} alt="slides" width={1000} height={450} style={{ objectFit:'fill', borderRadius:'2%'}} />
                </div>
              </motion.div> 
            ))}
        </AnimatePresence>
      </div>
      {carouselNavBtn && 
        <div className={styles.carouselNav}>
          <button
            onClick={prev}
            className={styles.carouselBtn}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className={styles.carouselBtn}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      }
      
      {
        carouselIdicator && (
          <div className={styles.carouselIndicatorWrapper}>
            <div style={{display:'flex', alignItems: 'center', justifyContent:'center', gap:'2px'}} >
              {slides.map((_, i) => (
                <div key={i}
                  style={curr === i ? {padding: '.5rem'} : {opacity: .5}}
                  className={styles.carouselIndicators}
                />
              ))}
            </div>
          </div>
        )
      }
      
    </div>
  );
}

export default Carousel
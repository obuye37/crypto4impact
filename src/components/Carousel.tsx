'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import {AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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


  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}
        // style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        <AnimatePresence mode="wait">
        <motion.div 
            initial={{ width: screenWidth * 0.001}}
            animate={{ width: screenWidth}}
            transition={{ duration: ((autoSlideInterval/1000 -1)), ease: 'easeInOut', repeat: Infinity }}
            style={{ width:screenWidth, height:'2px', background:'green', position:'absolute', top: '.1rem', left:0}} />
        { slides.map(({id, title, subTitle, img}, idx) => 
             curr === idx && (
                <motion.div key={id}
                layout
                initial={{ x:20, opacity: 0 }}
                animate={{ x:0, opacity: 1 }} 
                exit={{x: -20, opacity:0}}
                transition={{ ease: "easeInOut", duration: 0.75 }}

                style={{width:screenWidth, height:screenHeight, display:'flex'}}> 
                <div className={styles.bannerCaption}>
                  <motion.h1 
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: -20, opacity: 0 }}
                    transition={{ease: 'easeInOut', duration:0.5, delay: 0.5}}
                  style={{color:'whitesmoke', fontSize:'3rem'}}>{title}</motion.h1>
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
          <div style={{display:'absolute', inset:'20px 0 4px 0'}}>
            <div style={{display:'flex', alignItems: 'center', justifyContent:'center', gap: 2}} >
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
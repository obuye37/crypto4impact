'use client'

import { useEffect, useState } from 'react'

const ScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window?.innerWidth)
  const [screenHeight, setScreenHeight] = useState<number>(window?.innerHeight)
  
    useEffect(() => {
        const handleResize = () => {
          if (typeof window == "undefined") return
          setScreenHeight(window?.innerHeight);
          setScreenWidth(window?.innerWidth)
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      

  return  {screenHeight, screenWidth}
}

export default ScreenSize
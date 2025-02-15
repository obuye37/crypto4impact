'use client'

import { useEffect, useState } from 'react'

const ScreenSize = () => {

    useEffect(() => {
        const handleResize = () => {
          if (typeof window !== "undefined"){
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth)
          }
          
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight)
    
  return  {screenHeight, screenWidth}
}

export default ScreenSize
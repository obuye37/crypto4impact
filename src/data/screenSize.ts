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
      const [screenWidth, setScreenWidth] = useState<number>(0)
    const [screenHeight, setScreenHeight] = useState<number>(0)

  return  {screenHeight, screenWidth}
}

export default ScreenSize
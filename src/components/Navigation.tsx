'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, XCircle } from 'react-feather'

import Logo from '../../public/c4iLogo.png'
import styles from '@/app/page.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = ():React.JSX.Element => {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const [closeBtn, setCloseBtn] = useState(false)
    const path = usePathname()
    console.log("pathname:" , path)
    const handleClick = () => {setShowMobileMenu(!showMobileMenu)}
    const handleCloseBtn = () => {setCloseBtn(true)}
  return (
    <header className={styles.header}>
        <Link className={styles.logoLink} href='/' >
            <Image className={styles.c4ilogo} width={100}  alt='c4iLogo' src={Logo} style={{maxHeight:'100px'}}/>
        </Link>
        <nav style={{display:'flex'}}>
            <div className={styles.navLinks}>
                <Link className={styles.navList} href='/about'>ABOUT</Link>
                <Link className={styles.navList} href='/blog'>BLOG</Link>
                <Link className={styles.navList} href='/impact'>IMPACT</Link>
            </div> 
            <button onClick={()=>handleClick} className={styles.mobileMenuBtn} style={{backgroundColor:'transparent', border:'none'}}>
                <Menu size={20} style={{color:'whitesmoke'}}/>
            </button>
        </nav>
        <Link className={styles.navList} href='/donate'>
            DONATE
        </Link>
        <div className={styles.mobileMenu}>
            <XCircle size={20} style={{position:'absolute', inset:'15px 25px auto auto', color:'wheat'}}
                onClick={handleCloseBtn}
            />
            
            <Link className={styles.navList} href='/about'>ABOUT</Link>
            <Link className={styles.navList} href='/blog'>BLOG</Link>
            <Link className={styles.navList} href='/impact'>IMPACT</Link>
            <Link className={styles.navList} href='/donate'>DONATE</Link>
        </div>
    </header>
  )
}

export default Navigation
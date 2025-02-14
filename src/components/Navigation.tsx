'use client'

import React from 'react'
import Image from 'next/image'
import Logo from '../../public/c4iLogo.png'
import styles from '@/app/page.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = ():React.JSX.Element => {
    const path = usePathname()
    console.log("pathname:" , path)
  return (
    <header className={styles.header}>
        <Link href='/' >
            <Image width={100}  alt='c4iLogo' src={Logo} style={{maxHeight:'100px'}}/>
        </Link>
        <nav >
            <div className={styles.navLinks}>
                <Link className={styles.navList} href='/about'>ABOUT</Link>
                <Link className={styles.navList} href='/blog'>BLOG</Link>
                <Link className={styles.navList} href='/impact'>IMPACT</Link>
            </div>
        </nav>
        <Link className={styles.navList} href='/donate'>
            DONATE
        </Link>
    </header>
  )
}

export default Navigation
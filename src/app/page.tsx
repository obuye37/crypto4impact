import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

import Carousel from "@/components/Carousel";
import { Slides } from "@/data/Slides"
import { Donors } from "@/data/donors";
import '@/app/cssPatterns/greenGrid.css'
import '@/app/cssPatterns/aboutBlob.css'

export default function Home() {
  return (
    <div>
     <Carousel slides={Slides} autoSlide = {true}  autoSlideInterval = {5000}/>
     <section className='greenPatternBg'>
      <div 
      style={{display:'flex', flexDirection:'column', gap:20, justifyContent:'center', alignItems:'center', padding: '4rem 10rem', height:'450px', width:'70%'}}>
        <h1 style={{fontSize:'4rem', }}> <span style={{color:'yellow', backgroundColor:'#000', padding:'.5rem', borderRadius:'25%'}}>AB</span>OUT</h1>
        <p style={{fontSize:'1.5rem', textAlign:'center'}}>
          Crypto for Impact is a crypto charity brand dedicated to using crypto to impact humanity positively. We believe Crypto isn't just about hype or the money made. We believe Crypto is a tool to bless lives, put smiles on the faces of the needy, give hope to the hopeless. We believe Crypto is about freedom, peace, love, and kindness. <span style={{color:'green', fontWeight:'bolder'}}>CRYPTO IS HUMANITY. CRYPTO IS POSITIVITY.</span>
        </p>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'25%', position:'relative', padding:0}}>
        <div className="aboutBlob"/>
      </div>
      
     </section>
     <section className="donor-section">
        <div>
          <h1 style={{color:'whitesmoke', fontSize:'2rem', textAlign: 'center', margin:'4rem 0 0 0'}}> OUR DONORS </h1>
        </div>
        <div className={styles.donorsContainer}>
          {Donors.map(({name, img, uri}, idx) => 
            <Link href={uri} key={`${name+idx}`} className={styles.donors}>
              <Image src={img} alt={`${name}-logo`} width={100} height={100} style={{borderRadius: '50%'}}/>
              <p>{name}</p>
            </Link>
        )}
        </div>
     </section>
     <section style={{height:'500px'}}>
      <div style={{textAlign:'center', color:'whitesmoke', padding:'1.5rem', fontSize:'1.5rem', fontWeight:'bolder'}}>
        <h1> IMPACTS MADE </h1>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <iframe width="600" height="350" src="https://www.youtube.com/embed/UQmceS9GJXI?si=n8iIs22IHUzdmG8j" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
     </section>
    </div>
  );
}

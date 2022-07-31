import React from 'react'
import './../../style/portfolio.css';

import p1 from './../../img/portfolio/p1.JPG';
import p2 from './../../img/portfolio/p2.JPG';
import p3 from './../../img/portfolio/p3.JPG';
import p4 from './../../img/portfolio/p4.JPG';
import p5 from './../../img/portfolio/p5.JPG';
import p6 from './../../img/portfolio/p6.JPG';
import p7 from './../../img/portfolio/p7.JPG';
import p8 from './../../img/portfolio/p8.JPG';
import p9 from './../../img/portfolio/p9.JPG';
import p10 from './../../img/portfolio/p10.JPG';
import p11 from './../../img/portfolio/p11.JPG';
import p12 from './../../img/portfolio/p12.JPG';
import p13 from './../../img/portfolio/p13.JPG';
import p14 from './../../img/portfolio/p14.JPG';
import p15 from './../../img/portfolio/p15.jpg';
import p16 from './../../img/portfolio/p16.JPG';
import p17 from './../../img/portfolio/p17.JPG';
import p18 from './../../img/portfolio/p18.JPG';

export default function Portfolio() {
  return (
    <>
      <h1 className='pageTitle'>Portfolio</h1>
      <div className='flex'>
        <img alt='viking' src={p1} className='pImage'></img>
        <img alt='girl' src={p2} className='pImage'></img>
        <img alt='mom and son' src={p3} className='pImage'></img>
        <img alt='girl' src={p4} className='pImage'></img>
        <img alt='girl' src={p5} className='pImage'></img>
        <img alt='girl' src={p6} className='pImage'></img>
        <img alt='girl' src={p7} className='pImage'></img>
        <img alt='woman' src={p8} className='pImage'></img>
        <img alt='family' src={p9} className='pImage'></img>
        <img alt='girl' src={p10} className='pImage'></img>
        <img alt='pregnant woman' src={p11} className='pImage'></img>
        <img alt='siblings dressed as elfs' src={p12} className='pImage'></img>
        <img alt='girl in underwear' src={p13} className='pImage'></img>
        <img alt='girl' src={p14} className='pImage'></img>
        <img alt='wedding' src={p15} className='pImage'></img>
        <img alt='ballerina' src={p16} className='pImage'></img>
        <img alt='christmas elf' src={p17} className='pImage'></img>
        <img alt='girl' src={p18} className='pImage'></img>
      </div>
    </>
  )
}

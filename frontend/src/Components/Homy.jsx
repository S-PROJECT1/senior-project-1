import React from 'react';
import '../css/Homy.css';
import p1 from './Assets/p1.jpg';
import p2 from './Assets/p2.jpg';
import p4 from './Assets/p4.jpg';
import p6 from './Assets/p6.jpg';
import p7 from './Assets/p7.jpg';
import p9 from './Assets/p9.jpg';
import pp1 from './Assets/pp1.jpg'
import pp2 from './Assets/pp2.jpg'
import pp3 from './Assets/pp3.jpg'
import pp4 from './Assets/pp4.webp'
import pp5 from './Assets/pp5.webp'
import pp6 from './Assets/pp6.jpg'








 const Homy = () => {
  return (
      <div>
    <div>
        <img  className="i1"src={p1} alt="" />
        <img  className="i1"src={p2} alt="" />
        <img className="i1"src={p4} alt="" />
        <img className="i1"src={p6} alt="" />
        <img className="i1"src={p7} alt="" />
        <img className="i1"src={p9} alt="" />
        </div>

        <div>
  <img className="i2" src={pp1} alt="" />
  <img className="i2" src={pp2} alt="" />
  <img className="i2" src={pp3} alt="" />
  <img className="i2" src={pp4} alt="" />
  <img className="i2" src={pp5} alt="" />
  <img className="i2" src={pp6} alt="" />
</div>


</div>
  )

 }
export default Homy
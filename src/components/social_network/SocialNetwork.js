import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import { Facebook, Mail, Instagram } from 'react-feather';

const SocialNetwork = () => {

  const el = useRef(null);

  useEffect(() => {
    gsap.from(el.current, {opacity:0,x:-100, duration:1})
  })

  return (
    <div className="social-network" ref={el}>
      <a href="https://www.facebook.com/"><Facebook /></a>
      <a href="https://mail.google.com/"><Mail /></a>
      <a href="https://instagram.com/"><Instagram /></a>
 
    </div>
  );
};

export default SocialNetwork;
import './Header.css';
import lakeTop from '../../assets/lake_top.jpg';
import lakeBottom from '../../assets/lake_bottom.png';

import { motion, useScroll, useTransform } from 'framer-motion';

import { useRef } from 'react';

const Header = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);

  return (
    <header
      ref={ref}
      className="header"
    >
      <motion.h1
        className="h1"
        style={{ y: textY }}
      >
        PARALLAX
      </motion.h1>
      <div className="bar" />
      <motion.div
        className="lakeFull"
        style={{
          backgroundImage: `url(${lakeTop})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />
      <div
        className="lakeBottom"
        style={{
          backgroundImage: `url(${lakeBottom})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        }}
      />
    </header>
  );
};

export default Header;

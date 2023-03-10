import { FC, useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { motion } from 'framer-motion';

const buttonTransition = {
  duration: 0.7,
  ease: 'anticipate'
};

const buttonVariants = {
  hidden: {
    bottom: -112,
    transition: buttonTransition
  },
  visible: {
    bottom: 60,
    transition: buttonTransition
  }
};

const ScrollToTopButton: FC = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  function showScrollButton() {
    const isWindowSmall = window.innerWidth < 768;
    const scrolledFar = window.scrollY > 300;
    setIsScrolling(!isWindowSmall && scrolledFar);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    showScrollButton();
    window.addEventListener('scroll', showScrollButton);
    return () => {
      window.removeEventListener('scroll', showScrollButton);
    };
  });

  return (
    <motion.button
      variants={buttonVariants}
      animate={isScrolling ? 'visible' : 'hidden'}
      className="theme-btn fixed -bottom-28 flex right-8 shadow-4xl text-white dark:text-dark aspect-square rounded-circle z-[1000] items-center justify-center"
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp size={22} />
    </motion.button>
  );
};
export default ScrollToTopButton;

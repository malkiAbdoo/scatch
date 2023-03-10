import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import NavbarMenu from './NavbarMenu';
import { motion } from 'framer-motion';
import { easeInOutExpo } from '../constants';
import DarkThemeButton from './DarkThemeButton';
import { withRouter, NextRouter } from 'next/router';

type NavbarProps = {
  router: NextRouter;
};

const navVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeInOutExpo
    }
  }
};

function Navbar(props: NavbarProps) {
  const [open, setOpen] = useState<boolean>(false);

  const animationProps =
    props.router.pathname == '/'
      ? { variants: navVariants, initial: 'hidden', animate: 'visible' }
      : null;

  return (
    <>
      <header className="relative h-20 w-full px-8">
        {undefined}
        <motion.nav
          {...animationProps}
          className="flex items-center justify-between max-w-7xl h-full mx-auto overflow-y-hidden"
        >
          <Link href="/">
            <Image
              src="/logotype.svg"
              alt="Logo"
              width={144}
              height={39}
              className="logo"
            />
          </Link>
          <div className="hidden md:block">
            <Link href="/search" className="theme-link">
              Search
            </Link>
            <Link href="/albums" className="theme-link">
              My albums
            </Link>
            <DarkThemeButton
              containerClassName="inline-flex items-center gap-3 mr-10"
              buttonClassName="w-10 h-5"
            />
            <Link href="/" className="theme-btn">
              Login
            </Link>
          </div>
          <button
            className="nav-menu-btn"
            onClick={() => setOpen(!open)}
          ></button>
        </motion.nav>
      </header>
      <NavbarMenu open={open} setOpen={setOpen} />
    </>
  );
}
export default withRouter(Navbar);

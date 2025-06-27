'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Socials from './Socials';

function NavLink({ href, title }) {
  return (
    <Link
      href={`/${href}`}
      className="block p-4 w-full text-center bg-[rgba(255,255,255,0.05)] rounded-full lg:w-fit lg:bg-transparent hover:bg-[rgba(255,255,255,0.05)]">
      {title}
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [logoImage, setLogoImage] = useState('logo.svg');
  const [socialsColor, setSocialsColor] = useState('bg-light');
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/projects' || pathname === '/about') {
      setLogoImage('logo2.svg');
    } else {
      setLogoImage('logo.svg');
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/projects' || pathname === '/about') {
      setSocialsColor('bg-muted');
    } else {
      setSocialsColor('bg-light');
    }
  }, [pathname]);

  useEffect(() => {
    setNavIsOpen(false);
  }, [pathname]);

  return (
    <nav className="flex justify-between items-center absolute left-0 right-0 px-10 top-6 md:top-12 md:px-16 lg:top-24 lg:px-32 z-50">
      <div className="lg:w-38">
        <Link href="/">
          <img src={`/icons/${logoImage}`} alt="logo" className="h-4.25" />
        </Link>
      </div>
      <div
        className={`bg-dark text-light font-satoshi font-medium text-base flex flex-col rounded-4xl p-6 gap-2 sm:max-w-85 sm:w-full lg:py-2.5 lg:px-5 lg:w-fit lg:rounded-full lg:flex-row lg:gap-2 lg:max-w-none absolute ${navIsOpen ? 'top-14' : '-top-88'} left-10 sm:left-auto right-10 md:right-16 lg:static transition-all z-20 duration-300 ease-linear`}>
        <NavLink href="projects" title="Projects" />
        <NavLink href="services" title="Services" />
        <NavLink href="about" title="About" />
        <NavLink href="career" title="Career" />
      </div>
      <Socials color={socialsColor} hidden>
        <button
          aria-label="open/close mobile menu"
          onClick={() => {
            setNavIsOpen((prev) => !prev);
          }}
          className="size-10 bg-dark rounded-full lg:hidden flex flex-col items-center justify-center gap-1 group">
          <span className="w-4 h-0.25 bg-light block group-hover:translate-y-1.25 transition-all"></span>
          <span className="w-4 h-0.25 bg-light block group-hover:bg-transparent transition-all"></span>
          <span className="w-4 h-0.25 bg-light block group-hover:-translate-y-1.25 transition-all"></span>
        </button>
      </Socials>
    </nav>
  );
}

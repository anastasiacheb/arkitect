import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="text-light max-w-400 mx-auto px-10 py-12 md:px-16 md:py-20 lg:py-40 lg:px-36">
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12">
        <Link href="/">
          <img src="/icons/logo.svg" alt="logo" className="h-4.25" />
        </Link>
        <div className="flex flex-col gap-3.5">
          <a href="mailto:hello@example.com" className="font-medium text-base md:text-2xl lg:text-[26px]">
            hello@example.com
          </a>
          <a href="tel:+4917612345678" className="font-medium text-base md:text-2xl lg:text-[26px]">
            +49 176 123 456 78
          </a>
        </div>
        <Socials color="bg-light" />
      </div>
    </footer>
  );
}

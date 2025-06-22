import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import Socials from './Socials';
import { Projects } from '@/data';

function FooterLink({ href, title }) {
  return (
    <Link href={`/${href}`} className="xl:w-50 xl:block">
      {title}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="text-light px-10 py-12 md:px-16 md:py-20 lg:py-40 lg:px-36 bg-dark">
      <div className="max-w-400 mx-auto flex flex-col gap-16 items-center md:flex-row md:items-start lg:justify-between">
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 items-center md:items-start flex-none">
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
        <div className="text-light text-base md:text-lg flex flex-col gap-16 items-center text-center md:text-left md:items-start md:grid md:grid-cols-2 md:w-full lg:grid-cols-3 xl:flex xl:flex-row lg:max-w-148 xl:max-w-fit xl:gap-29">
          <div className="flex flex-col gap-4">
            <FooterLink href="" title="Home" />
            <FooterLink href="projects" title="Projects" />
            <FooterLink href="services" title="Services" />
            <FooterLink href="about" title="About" />
            <FooterLink href="career" title="Career" />
          </div>
          <div className="flex flex-col gap-4">
            {Projects.map((project, index) => (
              <FooterLink key={index} href={`projects/${project.slug}`} title={`${project.title1} ${project.title2}`} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <FooterLink href="contact" title="Contact" />
            <FooterLink href="404" title="404 Error Page" />
          </div>
        </div>
      </div>
    </footer>
  );
}

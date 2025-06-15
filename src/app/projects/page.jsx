import Image from 'next/image';
import Link from 'next/link';
import { Socials, PreFooter, ProjectItem } from '@/components';
import { Projects } from '@/data';

export default function Page() {
  return (
    <>
      <header className="bg-light rounded-t-4xl overflow-clip md:rounded-t-[60px] lg:rounded-t-[96px] text-center pt-13.5 md:pt-19 lg:pt-37.5">
        <div className="py-12 px-10 md:py-24 md:px-16 lg:py-40">
          <h1 className="text-xs md:text-base uppercase font-medium">Projects</h1>
          <p className="text-[48px] md:text-[80px] lg:text-[128px] font-medium leading-[1.1] pb-2">Design & Build</p>
          <p className="text-lg md:text-xl lg:text-[32px]">
            Innovation, luxury, and timeless design to <br className="hidden sm:block" />
            create inspiring, modern spaces.
          </p>
        </div>
      </header>
      <section className="bg-light">
        {Projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </section>
      <PreFooter
        section="Contact"
        title1="Curious about what"
        title2="we can do for you?"
        link="/contact"
        button="Get in touch"
      />
    </>
  );
}

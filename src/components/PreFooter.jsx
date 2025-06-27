import Link from 'next/link';
import { AnimationScroll } from '@/components';

export default function PreFooter({ section, title1, title2, link, button }) {
  return (
    <section className="bg-light rounded-b-4xl md:rounded-b-[60px] lg:rounded-b-[96px] text-center px-10 py-16 md:px-16 md:py-24 lg:py-48 lg:px-10">
      <AnimationScroll>
        <h2 className="text-xs md:text-base uppercase font-medium pb-4">{section}</h2>
        <p className="text-[40px] md:text-[64px] lg:text-[96px] font-medium leading-none pb-8 lg:pb-12 lg:leading-[1.1]">
          {title1} <br className="hidden sm:block" />
          {title2}
        </p>
        <Link
          href={link}
          className="text-light bg-dark uppercase font-medium leading-none text-base rounded-full px-7.5 py-5 block w-fit mx-auto">
          {button}
        </Link>
      </AnimationScroll>
    </section>
  );
}

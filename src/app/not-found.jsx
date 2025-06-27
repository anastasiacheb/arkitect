import Image from 'next/image';
import Link from 'next/link';
import { Socials, PreFooter, ProjectItem, Card, Header, Accordion, Animation, AnimationParallax } from '@/components';

export default function NotFound() {
  return (
    <>
      <header className="rounded-t-4xl  overflow-clip md:rounded-t-[60px] lg:rounded-t-[96px] relative h-[calc(100dvh-20px)] md:h-[calc(100dvh-24px)] lg:h-[calc(100dvh-32px)]">
        <Image
          src="/images/image123.png"
          alt="building"
          width={0}
          height={0}
          sizes="100vw"
          // style={{ width: '100%', height: 'auto' }}
          className="w-full h-full absolute object-cover rounded-b-4xl md:rounded-b-[60px] lg:rounded-b-[96px]"
        />
        <div className="w-full h-full absolute z-0 bg-dark opacity-20 rounded-t-4xl md:rounded-t-[60px] lg:rounded-t-[96px]"></div>
        <div className="z-20 relative text-light w-full px-10  md:px-16 lg:px-36 pt-28 pb-16 md:pt-40 md:pb-24 lg:pb-32 lg:pt-38.5 flex flex-col gap-6 h-full justify-end md:flex-row md:items-end md:justify-between">
          <Animation>
            <h1 className="font-satoshi text-[48px] md:text-[88px] lg:text-[128px] leading-none uppercase pb-5 md:pb-6 lg:pb-8 font-medium">
              404
              <span className="font-zodiak block">Error</span>
            </h1>
            <p className="max-w-100 text-base md:text-2xl lg:text-[32px]">
              The page your are looking for could not be found.
            </p>
          </Animation>
          <Link
            href="/"
            className="bg-light text-dark uppercase font-medium leading-none text-base rounded-full px-7.5 py-5 text-center">
            Back to homepage
          </Link>
        </div>
      </header>
    </>
  );
}

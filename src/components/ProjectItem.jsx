import Image from 'next/image';
import Link from 'next/link';
import { AnimationScroll } from '@/components';

export default function ProjectItem({ image, title1, title2, text, tag1, tag2, different, children, slug, noSticky }) {
  const Wrap = different ? 'div' : Link;
  return (
    <Wrap
      {...(!different && { href: `/projects/${slug}` })}
      className={`${different ? '' : 'rounded-4xl md:rounded-[60px] lg:rounded-[96px]'}  ${noSticky ? 'relative' : 'sticky'} overflow-clip top-0 block`}>
      <Image
        src={`/images/${image}`}
        alt="building"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full absolute object-cover"
      />
      {!different && <div className="w-full h-full absolute z-0 bg-dark opacity-20"></div>}
      <div className="relative z-10 text-light lg:h-dvh lg:flex lg:flex-col lg:justify-between p-10 md:p-15 lg:p-28 lg:pb-24">
        <AnimationScroll>
          <div className="pb-16 md:pb-32">
            <h2 className="font-libre text-[48px] md:text-[88px] lg:text-[128px] leading-none uppercase pb-5 md:pb-6 lg:pb-8 font-medium">
              {title1}
              <span className="font-manrope block">{title2}</span>
            </h2>
            <p className="max-w-150 text-base md:text-2xl lg:text-[32px]">{text}</p>
          </div>
        </AnimationScroll>
        {different ? (
          children
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <p className="uppercase font-medium text-sm px-4 py-2.5 rounded-full border border-light w-fit leading-none hidden sm:block">
                {tag1}
              </p>
              <p className="uppercase font-medium text-sm px-4 py-2.5 rounded-full border border-light w-fit leading-none hidden sm:block">
                {tag2}
              </p>
            </div>
            <button className="bg-light text-dark uppercase font-medium leading-none text-base rounded-full px-7.5 py-5">
              Explore
            </button>
          </div>
        )}
      </div>
    </Wrap>
  );
}

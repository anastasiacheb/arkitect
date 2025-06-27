import Image from 'next/image';
import {
  Socials,
  PreFooter,
  ProjectItem,
  Card,
  Header,
  Accordion,
  Animation,
  AnimationParallax,
  AnimationScroll,
} from '@/components';
import { Projects, Team } from '@/data';

const Values = [
  {
    number: '1',
    title: 'Timeless Innovation',
    text: 'We blend modern design with enduring elegance, creating architectural masterpieces that remain relevant, functional, and inspiring for generations.',
  },
  {
    number: '2',
    title: 'Sustainable Vision',
    text: 'Our commitment to eco-conscious architecture ensures that every project harmonizes with nature, prioritizing efficiency, longevity, and environmental responsibility.',
  },
  {
    number: '3',
    title: 'Exceptional Craftsmanship',
    text: 'Precision, quality, and artistry define our work, transforming architectural concepts into refined, luxurious spaces that exceed expectations and inspire.',
  },
];

function ValueCard({ number, title, text, index }) {
  let style = '';
  if (index === 0) {
    style = 'pb-10 md:pb-12 lg:pb-16';
  } else if (index === 1) {
    style = 'border-y border-border py-10 md:py-12 lg:py-16';
  } else if (index === 2) {
    style = 'pt-10 md:pt-12 lg:pt-16';
  }
  return (
    <AnimationScroll>
      <div className={`${style} flex flex-col md:flex-row md:gap-16 lg:gap-20`}>
        <p className="font-libre text-2xl md:text-[32px] pb-8">{number}</p>
        <div>
          <h3 className="text-2xl lg:text-[32px] font-medium pb-4">{title}</h3>
          <p className="text-base md:text-lg leading-[1.8]">{text}</p>
        </div>
      </div>
    </AnimationScroll>
  );
}

function TeamMember({ name, position, avatar }) {
  return (
    <div className="xl:break-inside-avoid pb-8 md:pb-0 xl:pb-24">
      <Image
        src={`/images/${avatar}`}
        alt="avatar"
        width={0}
        height={0}
        sizes="100vw"
        // style={{ width: '100%', height: 'auto' }}
        className="w-full rounded-[64px] overflow-clip aspect-[640/870] object-cover"
      />
      <div className="flex flex-col xl:flex-row xl:items-center gap-2 justify-between px-6 xl:px-16 pt-4">
        <div>
          <h3 className="text-2xl lg:text-[32px] font-medium pb-2">{name}</h3>
          <p className="text-xs md:text-base uppercase font-medium">{position}</p>
        </div>
        <Socials color={'bg-muted'} />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="bg-light rounded-t-4xl overflow-clip md:rounded-t-[60px] lg:rounded-t-[96px] text-center pt-13.5 md:pt-19 lg:pt-37.5 px-10  md:px-16 lg:px-36">
        <Animation>
          <div className="py-12 px-10 md:py-24 md:px-16 lg:px-0 lg:pt-32 lg:pb-20 lg:-mx-30">
            <h1 className="text-xs md:text-base uppercase font-medium">About</h1>
            <p className="text-[48px] md:text-[80px] lg:text-[128px] font-medium leading-[1.1] pb-2">We love design</p>
            <p className="text-lg md:text-xl lg:text-[32px]">
              We craft extraordinary spaces that inspire,
              <br className="hidden sm:block" />
              elevate, and endure beautifully.
            </p>
          </div>
        </Animation>
        <div className="flex gap-2 md:gap-4 rounded-4xl md:rounded-[60px] lg:rounded-[80px] overflow-clip max-w-400 mx-auto aspect-[650/430] xl:aspect-[2/1] relative">
          <AnimationParallax simple depth={-100}>
            <div className="flex flex-col gap-2 md:gap-4 w-full h-full -mt-5 md:-mt-10 xl:-mt-20">
              <Image
                src="/images/nastuh-abootalebi-rSpMla5RItA-unsplash.jpg"
                alt="building"
                width={0}
                height={0}
                sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className="w-full h-full object-cover"
              />
              <Image
                src="/images/nastuh-abootalebi-ZtC4_rPCRXA-unsplash.jpg"
                alt="building"
                width={0}
                height={0}
                sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimationParallax>
          <AnimationParallax simple depth={100}>
            <div className="flex flex-col gap-2 md:gap-4 w-full h-full">
              <Image
                src="/images/nastuh-abootalebi-JdcJn85xD2k-unsplash.jpg"
                alt="building"
                width={0}
                height={0}
                sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className="w-full h-full object-cover -mt-15 md:-mt-30 xl:-mt-60"
              />
              <Image
                src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg"
                alt="building"
                width={0}
                height={0}
                sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimationParallax>
        </div>
      </header>
      <section className="bg-light relative z-10 p-10 pb-0 md:p-16 lg:pt-32 lg:px-36 md:pb-0 lg:pb-0">
        <div className="lg:grid lg:grid-cols-[42%_58%] max-w-350 mx-auto">
          <h2 className="text-xs md:text-base uppercase font-medium pb-12 md:pb-16 lg:sticky self-start top-10">
            Our Values
          </h2>
          <div>
            {Values.map((value, index) => (
              <ValueCard key={index} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-light relative z-10 p-10 pb-0 md:p-16 lg:pt-40 lg:px-36 md:pb-0 lg:pb-0 -mb-8 md:mb-0 xl:-mb-24">
        <div className="md:grid md:grid-cols-2 xl:block xl:columns-2 break-inside-avoid gap-8 md:gap-16 xl:gap-30 max-w-400 mx-auto">
          <div className="mb-8 md:mb-0 xl:mb-24 md:col-span-2 xl:col-span-1">
            <h2 className="text-xs md:text-base uppercase font-medium pb-2">Our TEam</h2>
            <h2 className="text-5xl md:text-[56px] lg:text-[62px] font-medium pb-4 leading-[1.2]">
              Design Lies <br />
              In Our DNA
            </h2>
            <p className=" text-xl md:text-[22px] leading-[1.8] max-w-160">
              Every project we undertake is shaped by visionary architects, designers, and creators who push boundaries
              and redefine excellence. With expertise, creativity, and attention to detail, we bring bold architectural
              concepts to life.
            </p>
          </div>
          {Team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
      <PreFooter
        section="Career"
        title1="Want to be part "
        title2="of our team?"
        link="/career"
        button="See open Positions"
      />
    </>
  );
}

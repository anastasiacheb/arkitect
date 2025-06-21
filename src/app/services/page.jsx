import Image from 'next/image';
import { Socials, PreFooter, ProjectItem, Card, Header, AnimationScroll } from '@/components';

const CardsInfo = [
  {
    number: '300',
    sign: '+',
    title: 'Projects',
    text: 'We have designed and completed over 300 projects, each reflecting our dedication to innovation, precision, and timeless architectural excellence.',
  },
  {
    number: '200',
    sign: '+',
    title: 'Clients',
    text: 'With over 200 satisfied clients, we have built lasting relationships through exceptional design, strategic planning, and unparalleled craftsmanship.',
  },
  {
    number: '100',
    sign: '%',
    title: 'Happy Clients',
    text: 'Client satisfaction is our priority—every project is delivered with precision, passion, and attention to detail, ensuring outstanding results.',
  },
];

const Awards = [
  {
    year: '2025',
    title: 'Excellence in Modern Architecture',
    description:
      'Recognizing our commitment to cutting-edge design, this award celebrates our innovative approach to contemporary, luxurious, and sustainable architecture.',
  },
  {
    year: '2024',
    title: 'Best Luxury Residential Design',
    description:
      'Awarded for our outstanding work in crafting high-end, elegant homes that seamlessly blend aesthetics, functionality, and architectural excellence.',
  },
  {
    year: '2023',
    title: 'Innovative Urban Design Award',
    description:
      'Honoring our visionary contributions to urban landscapes, creating dynamic, future-forward spaces that redefine modern city living.',
  },
  {
    year: '2022',
    title: 'Sustainable Architecture Excellence',
    description:
      'This award highlights our dedication to eco-friendly, energy-efficient designs that harmonize with nature while maintaining sophistication and innovation.',
  },
];

function AwardItem({ year, title, description, index, awardLength }) {
  let style = '';
  if (index === 0) {
    style = 'pb-12';
  } else if (index > 0 && index < awardLength - 1) {
    style = 'py-12 border-t border-border';
  } else {
    style = 'pt-12 border-t border-border';
  }

  return (
    <AnimationScroll>
      <div className={`flex flex-col gap-4 lg:flex-row lg:items-center md:gap-7 xl:gap-32 ${style} `}>
        <p className="text-sm md:text-base uppercase font-medium">{year}</p>
        <p className="text-sm md:text-base uppercase font-medium md:whitespace-nowrap lg:min-w-100">{title}</p>
        <p className="text-base md:text-lg leading-[1.8]">{description}</p>
      </div>
    </AnimationScroll>
  );
}

export default function Page() {
  return (
    <>
      <Header
        image="image8.png"
        title="Services"
        subtitle1="We design luxurious, modern spaces with"
        subtitle2="precision, innovation, and timeless elegance."
      />
      <section className="bg-light rounded-t-4xl md:rounded-t-[60px] lg:rounded-t-[96px] -mt-8 md:-mt-15 lg:-mt-32 relative z-10 p-10 pb-16 md:p-16 md:pb-24 lg:pt-32 lg:pb-48 lg:px-36">
        <div className="max-w-350 mx-auto flex justify-between items-center gap-2 overflow-clip">
          <img src="/icons/logo-7.svg" alt="logo" className="h-6 w-auto" />
          <img src="/icons/logo-6.svg" alt="logo" className="h-7.5 w-auto" />
          <img src="/icons/logo-1.svg" alt="logo" className="h-8.5 w-auto" />
          <img src="/icons/logo-2.svg" alt="logo" className="h-7.5 w-auto" />
          <img src="/icons/logo-3.svg" alt="logo" className="h-5 w-auto" />
          <img src="/icons/logo-4.svg" alt="logo" className="h-8.5 w-auto" />
          <img src="/icons/logo-5.svg" alt="logo" className="h-7.5 w-auto" />
        </div>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 max-w-350 mx-auto mt-8 md:mt-14 lg:mt-20">
          {CardsInfo.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="px-10 md:px-16 lg:px-36 bg-light">
        <div className="flex flex-col gap-10 md:gap-16 lg:gap-30 lg:flex-row max-w-400 mx-auto items-start">
          <div className="flex flex-col gap-10 md:gap-16 lg:gap-32">
            <div>
              <h2 className="text-5xl md:text-[56px] lg:text-[62px] font-medium pb-4 md:pb-8 leading-[1.2]">
                Laying the foundation for visionary architecture.
              </h2>
              <p className=" text-xl md:text-[22px] leading-[1.8]">
                Every great project begins with a meticulous plan. We analyze your vision, site conditions, and
                functional requirements to create a strategic framework. Our planning process ensures efficiency,
                feasibility, and seamless project execution, setting the stage for an architectural masterpiece tailored
                to your needs.
              </p>
            </div>
            {/* <Image
              src="/images/imagesdw.png"
              alt="person"
              width={0}
              height={0}
              sizes="100vw"
              // style={{ width: '100%', height: 'auto' }}
              className="w-full h-full object-cover rounded-4xl md:rounded-[40px] lg:rounded-[60px]"
            /> */}
            <div className="aspect-[640/860] w-full rounded-4xl md:rounded-[40px] lg:rounded-[60px] overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                // poster="/images/imagesdw.png"
              >
                <source src="/videos/7438237-uhd_2160_4096_25fps.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-16 lg:gap-32 lg:flex-col-reverse justify-self-start items-end">
            <div>
              <h2 className="text-5xl md:text-[56px] lg:text-[62px] font-medium pb-4 md:pb-8 leading-[1.2]">
                Transforming ideas into architectural excellence.
              </h2>
              <p className=" text-xl md:text-[22px] leading-[1.8]">
                With a clear plan in place, we craft a sophisticated design that blends aesthetics, functionality, and
                innovation. Every detail is thoughtfully considered, from spatial flow to material selection, ensuring a
                seamless integration of luxury and modernity. The result is a timeless architectural experience built
                for the future.
              </p>
            </div>
            {/* <Image
              src="/images/imagehjgui.png"
              alt="person"
              width={0}
              height={0}
              sizes="100vw"
              // style={{ width: '100%', height: 'auto' }}
              className="w-full h-full object-cover rounded-4xl md:rounded-[40px] lg:rounded-[60px]"
            /> */}
            <div className="aspect-[640/860] w-full rounded-4xl md:rounded-[40px] lg:rounded-[60px] overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                // poster="/images/imagehjgui.png"
              >
                <source src="/videos/7437512-uhd_2160_4096_25fps.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light relative z-10 p-10 pb-0 md:p-16 lg:pt-40 lg:px-36">
        <h2 className="text-sm md:text-base uppercase text-center pb-16 md:pb-24 lg:pb-32 font-medium">Awards</h2>
        <div className="max-w-400 mx-auto">
          {Awards.map((award, index) => (
            <AwardItem key={index} index={index} {...award} awardLength={Awards.length} />
          ))}
        </div>
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

import Image from 'next/image';
import Link from 'next/link';
import { Socials, PreFooter, ProjectItem, Card, Animation } from '../components';
import { Projects, Team } from '../data';
import { motion } from 'motion/react';

function ArrowLink({ text, href, white }) {
  return (
    <Link
      href={`/${href}`}
      className={`flex gap-6 items-center font-medium text-lg md:text-[22px] group hover:-my-0.5 transition-all hover:gap-5.5 duration-200 w-fit ease-linear ${white ? 'text-light' : 'text-dark'}`}>
      {text}
      <span
        className={`p-3 md:p-4.5 border ${white ? 'border-light' : 'border-border'}  rounded-full block w-fit group-hover:p-3.5 group-hover:md:p-5 transition-all duration-200 ease-linear`}>
        <img
          src={`/icons/${white ? 'ri_arrow-down-line.svg' : 'ri_arrow-right-line.svg'}`}
          alt="arrow right icon"
          className="size-6 group-hover:-rotate-45 transition-all duration-200 ease-linear"
        />
      </span>
    </Link>
  );
}

const Services = [
  {
    number: '01',
    title: 'Architecture Design',
    description:
      'We create innovative, modern architectural designs that blend luxury, functionality, and timeless aesthetics. Every structure is meticulously planned to harmonize with its surroundings while delivering exceptional quality and sophistication.',
    services: ['Concept Development', 'Space Planning', '3D Visualization'],
  },
  {
    number: '02',
    title: 'Interior Design',
    description:
      'Our interior designs elevate spaces with refined materials, thoughtful layouts, and a seamless blend of elegance and comfort, ensuring every detail enhances both aesthetics and functionality.',
    services: ['Luxury Furnishings & Materials', 'Custom Lighting Design', 'Spatial Optimization'],
  },
  {
    number: '03',
    title: 'Exterior Design',
    description:
      'We craft striking exteriors that integrate seamlessly with nature and urban environments, combining form, texture, and innovative materials for a bold yet timeless presence.',
    services: ['Facade Design', 'Landscape Integration', 'Outdoor Living Spaces'],
  },
];

function ServiceItem({ number, title, description, services, index }) {
  let style = '';
  if (index === 0) {
    style = 'pb-12 md:pb-16';
  } else if (index === 1) {
    style = 'py-12 md:py-16 border-y border-[#E8E8E8]';
  } else if (index === 2) {
    style = 'pt-12 md:pt-16';
  }

  return (
    <div className={`flex flex-col gap-12 md:flex-row ${style} `}>
      <p className="text-xl md:text-2xl lg:text-[32px] font-libre md:min-w-20 lg:min-w-25">{number}</p>
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-16">
        <h3 className="text-2xl lg:text-[32px] font-medium lg:flex-1/2">{title}</h3>
        <div className="flex flex-col gap-12 lg:flex-1/2 lg:gap-8">
          <p className="text-xl md:text-[22px] leading-[1.8]">{description}</p>
          <div className="flex flex-col gap-5">
            {services.map((service, index) => (
              <p key={index} className="text-xs md:text-base uppercase font-medium">
                {service}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
  {
    number: '110',
    sign: '%',
    title: 'Commitment',
    text: 'We go beyond expectations, delivering creative excellence, meticulous execution, and unwavering dedication to every architectural vision we bring to life.',
  },
];

function TeamMember({ avatar, name, position, index, teamLength }) {
  let style = '';
  if (index === 0) {
    style = 'md:pb-12';
  } else if (index > 0 && index < teamLength - 1) {
    style = 'md:py-12 md:border-t md:border-border';
  } else {
    style = 'md:pt-12 md:border-t md:border-border';
  }

  return (
    <div className={`flex flex-col gap-6 md:flex-row md:gap-12 md:items-center  ${style}`}>
      <Image
        src={`/images/${avatar}`}
        alt="building"
        width={0}
        height={0}
        sizes="100vw"
        // style={{ width: '100%', height: 'auto' }}
        className="w-full h-full object-cover rounded-3xl md:max-w-40"
      />
      <div className="flex flex-col gap-4 lg:flex-row lg:w-full lg:gap-32 lg:items-center">
        <p className="text-xs md:text-base uppercase font-medium lg:hidden whitespace-nowrap w-fit">{position}</p>
        <h3 className="font-medium text-2xl lg:text-5xl lg:w-full">{name}</h3>
        <p className="text-xs md:text-base uppercase font-medium hidden lg:block whitespace-nowrap">{position}</p>
        <Socials color="bg-muted" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="rounded-t-4xl overflow-clip md:rounded-t-[60px] lg:rounded-t-[96px] relative h-auto flex justify-center items-center md:h-auto">
        <Image
          src="/images/image.png"
          alt="building"
          width={0}
          height={0}
          sizes="100vw"
          // style={{ width: '100%', height: 'auto' }}
          className="w-full h-full absolute object-cover"
        />
        <div className="w-full h-full absolute z-0 bg-dark opacity-20"></div>
        <div className="w-full h-2/3 bottom-0 absolute z-0 bg-linear-to-t from-dark to-transparent opacity-60"></div>
        <div className="text-light relative z-20 w-full max-w-390 pb-8 md:pb-15 lg:pb-24 ">
          <div className="h-svh lg:h-dvh flex flex-col justify-center items-center">
            <Animation>
              <h1 className="font-manrope text-center text-[56px] md:text-[96px] lg:text-[160px] leading-none uppercase font-medium lg:pt-38.5">
                Your
                <span className="font-libre block">Dream</span>
                Place
              </h1>
            </Animation>
            <p className="text-center pt-4 text-lg md:text-xl lg:text-[32px]">
              Designing timeless, luxurious spaces that <br /> redefine modern architecture and living.
            </p>
          </div>
          <div className="hidden lg:flex justify-between pb-40 w-full max-w-350 mx-auto lg:pt-100">
            <div className="flex flex-col gap-16 max-w-150">
              <h2 className="font-medium text-5xl md:text-[56px] lg:text-[62px] leading-[1.2]">
                We love & live <br /> architecture
              </h2>
              <ArrowLink href="about" text="Our Story" white />
            </div>
            <div className="font-normal text-base md:text-2xl lg:text-[32px] max-w-150">
              <p>
                Arkitect creates luxurious, modern spaces where innovation meets timeless elegance. Our designs push
                boundaries, blending precision, creativity, and functionality. <br />
                <br />
                With a commitment to excellence, we craft architectural masterpieces that inspire and endure. Every
                project reflects our passion for bold ideas, meticulous craftsmanship, and the future of contemporary
                living.
              </p>
              <a href="mailto:hello@example.com" className="pt-12 block">
                hello@example.com
              </a>
              <a href="tel:+4917612345678" className="pt-3.5 block">
                +49 176 123 456 78
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-light rounded-t-4xl md:rounded-t-[60px] lg:rounded-t-[96px] -mt-8 md:-mt-15 lg:-mt-24 relative z-10 p-10 pb-16 md:p-16 md:pb-24 lg:pt-24 lg:pb-48 lg:px-36">
        <h2 className="text-sm md:text-base uppercase text-center pb-16 md:pb-24 lg:pb-32 font-medium">Our Services</h2>
        <div className="max-w-400 mx-auto">
          {Services.map((service, index) => (
            <ServiceItem key={index} index={index} {...service} />
          ))}
        </div>
      </section>
      <section className="bg-light">
        {Projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </section>
      <section className="bg-light p-10 pt-16 md:p-16 md:pt-24 lg:pt-48 lg:px-36">
        <div className="max-w-400 mx-auto flex flex-col gap-12 md:gap-16 xl:flex-row lg:gap-24">
          <div className="xl:flex-1/3">
            <h2 className="text-5xl md:text-[56px] lg:text-[62px] font-medium pb-4 leading-[1.2]">
              Architecture <br />
              in Motion
            </h2>
            <p className="text-xl md:text-[22px] leading-[1.8] pb-6 md:pb-12">
              We analyze your vision, site conditions, and functional <br /> requirements to create a strategic
              framework.
            </p>
            <ArrowLink href="services" text="Our Services" />
          </div>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 xl:flex-2/3 ">
            {CardsInfo.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-light px-10 py-16 md:px-16 md:py-24 lg:py-48 lg:px-36">
        <h2 className="text-xs md:text-base uppercase font-medium text-center pb-8 md:pb-16 lg:pb-20">Our TEam</h2>
        <div className="flex flex-col gap-12 md:gap-0 max-w-400 mx-auto">
          {Team.map((member, index) => (
            <TeamMember key={index} index={index} {...member} teamLength={Team.length} />
          ))}
        </div>
      </section>
      <section>
        <ProjectItem
          image="image8.png"
          title1="Bold"
          title2="Design"
          text="With a clear plan in place, we craft a sophisticated design that blends aesthetics, functionality, and innovation. "
          different>
          <ArrowLink href="about" text="Our Story" white />
        </ProjectItem>
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

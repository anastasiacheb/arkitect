import Image from 'next/image';
import { Socials, PreFooter, ProjectItem, Card, Header, Accordion, AnimationScroll } from '@/components';

const Benefits = [
  {
    title: 'Prestige',
    text: 'Be part of cutting-edge, luxurious architecture projects that push design boundaries and shape the future of modern living.',
  },
  {
    title: 'Collaboration',
    text: 'Join a team of visionary architects and designers who inspire, challenge, and support each other to create extraordinary spaces.',
  },
  {
    title: 'Growth',
    text: 'We invest in your development with mentorship, workshops, and opportunities to work on innovative architectural concepts.',
  },
  {
    title: 'Rewards',
    text: 'Industry-leading salaries, bonuses, and benefits that recognize your expertise, dedication, and contribution.',
  },
  {
    title: 'Environment',
    text: 'Work in a beautifully designed, modern office with the latest technology and tools to bring your ideas to life.',
  },
  {
    title: 'Opportunities',
    text: 'Collaborate on international projects, gain exposure to global architectural trends, and build a portfolio that stands out worldwide.',
  },
];

function BenefitItem({ title, text }) {
  return (
    <AnimationScroll>
      <div className="p-8 md:p-10 lg:p-12 border border-border rounded-2xl h-full">
        <h3 className="text-2xl lg:text-[32px] font-medium pb-2">{title}</h3>
        <p className="text-base md:text-lg leading-[1.8]">{text}</p>
      </div>
    </AnimationScroll>
  );
}

const Positions = [
  {
    position: 'Senior Architect',
    location: 'BERLIN',
    description:
      'Lead the design and execution of high-end, modern architectural projects. Collaborate with clients, engineers, and designers to create luxurious, innovative spaces. Ensure project feasibility, oversee construction details, and maintain design excellence. Ideal for architects with 8+ years of experience in high-end residential, commercial, or hospitality architecture.',
  },
  {
    position: 'Junior Architect',
    location: 'REMOTE',
    description:
      'Support the design team in creating modern, luxurious spaces. Assist in drafting, 3D modeling, and project research. Work closely with senior architects to develop design concepts and technical drawings. Ideal for architects with 1-3 years of experience and a passion for contemporary, high-end architecture.',
  },
  {
    position: 'Interior Designer',
    location: 'BERLIN',
    description:
      'Create sophisticated interiors that complement our modern architectural designs. Select materials, furniture, and finishes to enhance luxurious living and working spaces. Collaborate with architects and clients to develop cohesive, high-end interiors. Ideal for designers with 3+ years of experience in luxury residential, commercial, or hospitality projects.',
  },
  {
    position: '3D Artist',
    location: 'BERLIN',
    description:
      'Bring architectural concepts to life with stunning 3D renderings and animations. Work closely with architects and designers to visualize luxurious, modern spaces. Use cutting-edge software to create photorealistic imagery for presentations and marketing. Ideal for visualization artists with a strong portfolio in high-end architecture.',
  },
  {
    position: 'Project Manager',
    location: 'BERLIN',
    description:
      'Oversee the planning, coordination, and execution of luxury architectural projects. Manage timelines, budgets, and communication between clients, contractors, and the design team. Ensure seamless project delivery while maintaining Arkitect’s high standards. Ideal for professionals with 5+ years of experience in architecture or construction project management.',
  },
];

export default function Page() {
  return (
    <>
      <Header
        video="7437509-uhd_4096_2160_25fps.mp4"
        image="image4.png"
        title="Career"
        subtitle1="Create, innovate, and elevate—be part of"
        subtitle2="our architecture team today."
      />
      <section className="bg-light rounded-t-4xl md:rounded-t-[60px] lg:rounded-t-[96px] -mt-8 md:-mt-15 lg:-mt-32 relative z-10 p-10 pb-0 md:p-16 lg:pt-32 lg:px-36">
        <h2 className="text-xs md:text-base uppercase font-medium pb-10 md:pb-12 lg:pb-16 text-center">
          Your Benefits
        </h2>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 md:grid md:grid-cols-2 xl:grid-cols-3 max-w-350 mx-auto">
          {Benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </section>
      <section className="bg-light relative z-10 p-10 pb-0 md:p-16 lg:pt-40 lg:px-36">
        <div className="msx-w-400 mx-auto xl:grid xl:grid-cols-2 gap-32">
          <div className="h-[calc(100vh-160px)] hidden xl:block sticky top-20 self-start">
            <Image
              src="/images/pexels-cottonbro-7439767.jpg"
              alt="building"
              width={0}
              height={0}
              sizes="100vw"
              // style={{ width: '100%', height: 'auto' }}
              className="w-full h-full rounded-[64px] overflow-clip object-cover"
            />
          </div>
          <div>
            <h2 className="text-xs md:text-base uppercase font-medium pb-10 md:pb-12 lg:pb-20 text-center xl:text-left">
              Open Positions
            </h2>
            <div>
              {Positions.map((position, index) => (
                <Accordion key={index} index={index} arrayLength={Positions.length} {...position} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <PreFooter
        section="Questions?"
        title1="Have questions about"
        title2="an open position?"
        link="/contact"
        button="Get in touch"
      />
    </>
  );
}

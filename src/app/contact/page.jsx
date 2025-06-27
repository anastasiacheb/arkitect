import Image from 'next/image';
import { Socials, PreFooter, ProjectItem, Card, Header, Accordion, Animation, AnimationParallax } from '@/components';

const Questions = [
  {
    question: 'What type of architecture does Arkitect specialize in?',
    description:
      'Arkitect specializes in luxurious and modern architecture, blending innovation, elegance, and functionality. We design high-end residential, commercial, and hospitality spaces that push architectural boundaries while maintaining timeless sophistication.',
  },
  {
    question: 'Can Arkitect handle both architecture and interior design?',
    description:
      'Yes, we offer a comprehensive approach to design, ensuring seamless integration between architecture and interiors. Our team creates bespoke spaces with high-end materials, custom details, and a focus on both aesthetics and functionality.',
  },
  {
    question: 'Does Arkitect work on international projects?',
    description:
      'Absolutely. We collaborate with clients worldwide, bringing our expertise in modern luxury architecture to projects across different locations. We tailor our designs to the specific cultural, environmental, and functional needs of each project.',
  },
  {
    question: 'What is Arkitect’s design process?',
    description:
      'Simply contact us to schedule an initial consultation. We’ll discuss your vision, project requirements, and timeline to determine how we can bring your architectural dreams to life with our expertise in modern and luxurious design.',
  },
  {
    question: 'How do I start a project with Arkitect?',
    description:
      'Simply contact us to schedule an initial consultation. We’ll discuss your vision, project requirements, and timeline to determine how we can bring your architectural dreams to life with our expertise in modern and luxurious design.',
  },
];

function Input({ title, type }) {
  return (
    <label htmlFor="name" className="text-xs md:text-base uppercase font-medium flex flex-col gap-3">
      {title}
      {type === 'message' ? (
        <textarea
          name={title}
          id={title}
          required
          placeholder={`Your ${title}`}
          className="border border-border rounded-2xl py-4.5 px-6 text-base lg:text-lg outline-none focus:border-dark placeholder:text-[#CCCCCC] placeholder:capitalize resize-none h-35"></textarea>
      ) : (
        <input
          type={type}
          name={title}
          id={title}
          required
          placeholder={`Your ${title}`}
          className="border border-border rounded-2xl py-4.5 px-6 text-base lg:text-lg outline-none focus:border-dark placeholder:text-[#CCCCCC] placeholder:capitalize"
        />
      )}
    </label>
  );
}

export default function Page() {
  return (
    <>
      <header className="rounded-t-4xl  overflow-clip md:rounded-t-[60px] lg:rounded-t-[96px] relative h-auto md:h-auto lg:h-[calc(100dvh-32px)] lg:min-h-210.5 lg:flex lg:justify-center lg:items-center bg-light">
        <AnimationParallax>
          <div className="rounded-4xl md:rounded-[60px] lg:rounded-[96px]">
            <Image
              src="/images/image0.png"
              alt="building"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full absolute object-cover rounded-b-4xl md:rounded-b-[60px] lg:rounded-b-[96px]"
            />
            <div className="w-full h-full absolute z-0 bg-dark opacity-20 rounded-4xl md:rounded-[60px] lg:rounded-[96px]"></div>
          </div>
        </AnimationParallax>
        <div className="z-20 relative text-light w-full px-10  md:px-16 lg:px-36 pt-28 pb-16 md:pt-40 md:pb-24 lg:py-0 lg:pt-38.5">
          <div className="max-w-350 mx-auto flex flex-col gap-12 md:gap-16 lg:flex-row lg:gap-4 lg:justify-between">
            <Animation>
              <div className="w-125 md:w-150 mx-auto xl:mx-0 lg:w-auto">
                <h1 className="text-[48px] md:text-[80px] xl:text-[128px] font-medium leading-[1.1] pb-4">Contact</h1>
                <div className="font-normal text-base md:text-2xl xl:text-[26px] max-w-150">
                  <p>
                    Have a project in mind? <br className="hidden lg:block xl:hidden" />
                    Let’s discuss your <br className="lg:hidden xl:block" />
                    vision and bring it to life.
                  </p>
                  <a href="mailto:hello@example.com" className="mt-9 md:mt-12 inline-block">
                    hello@example.com
                  </a>
                  <a href="tel:+4917612345678" className="mt-3.5 inline-block">
                    +49 176 123 456 78
                  </a>
                </div>
              </div>
            </Animation>
            <form
              action="#"
              className="bg-light text-dark max-w-125 md:max-w-150 lg:max-w-110 xl:max-w-135 mx-auto p-8 md:p-12 rounded-3xl lg:rounded-4xl w-full flex flex-col gap-5 md:gap-6 lg:gap-8 lg:mx-0">
              <Input title="name" type="text" />
              <Input title="Email" type="email" />
              <Input title="message" type="message" />
              <button
                type="submit"
                className="text-light bg-dark uppercase font-medium leading-none text-base rounded-full px-7.5 py-5 block w-full hover:bg-[rgba(0,0,0,0.8)]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </header>
      <section className="bg-light rounded-b-4xl md:rounded-b-[60px]  lg:rounded-b-[96px] p-10 md:p-16 lg:py-32 lg:px-36">
        <div className="max-w-350 mx-auto flex flex-col gap-12 lg:flex-row justify-between">
          <h2 className="font-medium text-[40px] md:text-5xl lg:sticky self-start top-32">
            Frequently <br />
            Asked Questions
          </h2>
          <div className="lg:max-w-170">
            {Questions.map((question, index) => (
              <Accordion key={index} {...question} index={index} arrayLength={Questions.length} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

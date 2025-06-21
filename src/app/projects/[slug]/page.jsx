import { Projects, Team } from '@/data';
import Image from 'next/image';
import { Socials, PreFooter, ProjectItem } from '@/components';

function TableRow({ arrayLength, index, data }) {
  let style = '';
  if (index === 0) {
    style = 'pb-5 md:pb-6 lg:pb-8';
  } else if (index > 0 && index < arrayLength - 1) {
    style = 'py-5 md:py-6 lg:py-8 border-t border-border';
  } else {
    style = 'pt-5 md:pt-6 lg:pt-8 border-t border-border';
  }

  const Titles = ['Type', 'Timeframes', 'Services', 'Location'];

  return (
    <div className={`${style} flex justify-between items-center`}>
      <p className="text-xs md:text-base uppercase font-medium">{Titles[index]}</p>
      <p className="text-xs md:text-base">{data}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return Projects.map((project) => ({ slug: project.slug }));
}

export default function Page({ params }) {
  const { slug } = params;
  const project = Projects.find((p) => p.slug === slug);
  const Index = Projects.findIndex((p) => p.slug === slug);
  const nextProject = Index < Projects.length - 1 ? Projects[Index + 1] : Projects[0];
  const tableData = [project.tag1, project.time, project.service, project.tag2];
  return (
    <>
      <header className="rounded-t-4xl overflow-clip md:rounded-t-[60px] lg:rounded-t-[96px] relative h-auto flex justify-center items-center md:h-auto">
        <Image
          src={`/images/${project.image}`}
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
          <div className="h-svh lg:h-dvh flex flex-col justify-center items-center lg:min-h-210.5 lg:pt-38.5">
            <p className="uppercase font-medium text-sm px-4 py-2.5 rounded-full border border-light w-fit leading-none hidden sm:block">
              {project.tag2}
            </p>
            <h1 className="font-manrope text-center text-[56px] md:text-[96px] lg:text-[160px] leading-none uppercase font-medium">
              {project.title1}
              <span className="font-libre block">{project.title2}</span>
            </h1>
            <p className="text-center pt-4 text-lg md:text-xl lg:text-[32px] max-w-150 px-10 md:px-16 lg:px-0">
              {project.text}
            </p>
          </div>
        </div>
      </header>
      <section className="bg-light rounded-t-4xl md:rounded-t-[60px] lg:rounded-t-[96px] -mt-8 md:-mt-15 lg:-mt-24 relative z-10 p-10 pb-0 md:p-16 md:pb-0 lg:pt-24 lg:pb-0 lg:px-36">
        <h2 className="text-xs md:text-base uppercase font-medium text-center pb-12 md:pb-16 lg:pb-24">
          Project Details
        </h2>
        <div className="flex flex-col gap-8 md:gap-12 lg:flex-row xl:gap-32 max-w-350 mx-auto">
          <div className="flex flex-col gap-4 lg:gap-8">
            <h3 className="text-[32px] md:text-5xl lg:text-[56px] font-medium leading-[1.2] tracking-normal">
              {project.title3}
              <br className="hidden md:block lg:hidden" />
              <span> </span>
              {project.title4}
            </h3>
            <p className="text-xl md:text-[22px] leading-[1.8]">{project.text2}</p>
            <p className="text-xl md:text-[22px] leading-[1.8]">{project.text3}</p>
          </div>
          <div className="bg-muted p-8 rounded-2xl md:p-10 md:rounded-4xl lg:p-16 lg:rounded-[48px] w-full lg:min-w-100 self-start xl:min-w-120 2xl:min-w-150 lg:sticky lg:top-10">
            {tableData.map((data, index) => (
              <TableRow key={index} index={index} data={data} arrayLength={tableData.length} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-light p-10 pb-0 md:p-16 md:pb-0 lg:pt-24 lg:pb-0 lg:px-36">
        <h2 className="text-xs md:text-base uppercase font-medium text-center pb-12 md:pb-16 lg:pb-24">Gallery</h2>
        <div className="flex flex-col md:block md:columns-2 gap-4 md:gap-8 lg:gap-12">
          <Image
            src="/images/1image.png"
            alt="building"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-2xl md:rounded-3xl lg:rounded-4xl aspect-[670/870]"
          />
          <Image
            src="/images/2image.png"
            alt="building"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-2xl md:rounded-3xl lg:rounded-4xl aspect-square md:mt-8 lg:mt-12"
          />
          <Image
            src="/images/3image.png"
            alt="building"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-2xl md:rounded-3xl lg:rounded-4xl aspect-square"
          />
          <Image
            src="/images/4image.png"
            alt="building"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-2xl md:rounded-3xl lg:rounded-4xl aspect-[670/870] md:mt-8 lg:mt-12"
          />
        </div>
      </section>
      <div className="bg-light -mb-8 md:-mb-15 lg:-mb-24 px-10 pb-24 pt-16 md:px-16 md:pt-24 md:pb-39 lg:pb-64 lg:pt-40 lg:px-36">
        <img src="/icons/ri_double-quotes-l.svg" alt="icon" className="size-10 mx-auto mb-6 md:mb-8" />
        <p className="font-medium text-2xl lg:text-5xl text-center max-w-250 mx-auto pb-8 md:pb-10 lg:pb-16">
          "{project.comment}"
        </p>
        <p className="text-xs md:text-base uppercase font-medium text-center pb-1">{project.author}</p>
        <p className="text-xs md:text-base text-center">{project.company}</p>
      </div>
      <ProjectItem {...nextProject} noSticky />
    </>
  );
}

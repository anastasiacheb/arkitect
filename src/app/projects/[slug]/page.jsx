import { Projects, Team } from '@/data';
import Image from 'next/image';
import { Socials, PreFooter, ProjectItem } from '@/components';

export async function generateStaticParams() {
  return Projects.map((project) => ({ slug: project.slug }));
}

export default function Page({ params }) {
  const { slug } = params;
  const project = Projects.find((p) => p.slug === slug);
  const Index = Projects.findIndex((p) => p.slug === slug);
  const nextProject = Index < Projects.length - 1 ? Projects[Index + 1] : Projects[0];
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
          <div className="h-svh lg:h-dvh flex flex-col justify-center items-center">
            <p className="uppercase font-medium text-sm px-4 py-2.5 rounded-full border border-light w-fit leading-none hidden sm:block">
              {project.tag2}
            </p>
            <h1 className="font-manrope text-center text-[56px] md:text-[96px] lg:text-[160px] leading-none uppercase font-medium">
              {project.title1}
              <span className="font-libre block">{project.title2}</span>
            </h1>
            <p className="text-center pt-4 text-lg md:text-xl lg:text-[32px] max-w-150">{project.text}</p>
          </div>
        </div>
      </header>
      <section className="bg-light rounded-t-4xl md:rounded-t-[60px] lg:rounded-t-[96px] -mt-8 md:-mt-15 lg:-mt-24 relative z-10 p-10 pb-0 md:p-16 md:pb-0 lg:pt-24 lg:pb-0 lg:px-36">
        <h2 className="text-xs md:text-base uppercase font-medium text-center">Project Details</h2>
        <div>
          <div>
            <h3>
              {project.title3}
              <br />
              {project.title4}
            </h3>
            <p>{project.text2}</p>
            <p>{project.text3}</p>
          </div>
          <div></div>
        </div>
      </section>
      <ProjectItem {...nextProject} />
    </>
  );
}

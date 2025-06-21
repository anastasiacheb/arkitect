import Image from 'next/image';
import { Animation } from '@/components';

export default function Header({ image, title, subtitle1, subtitle2, button, video }) {
  return (
    <header className="rounded-t-4xl overflow-clip md:rounded-t-[60px] lg:rounded-t-[96px] relative h-auto flex justify-center items-center md:h-auto ">
      {video ? (
        <video
          className="w-full h-full absolute object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={`/images/${image}`}>
          <source src={`/videos/${video}`} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={`/images/${image}`}
          alt="building"
          width={0}
          height={0}
          sizes="100vw"
          // style={{ width: '100%', height: 'auto' }}
          className="w-full h-full absolute object-cover"
        />
      )}

      <div className="w-full h-full absolute z-0 bg-dark opacity-20"></div>
      <div className="text-light relative z-20 w-full pb-8 md:pb-15 lg:pb-24 pt-13.5 md:pt-19 lg:pt-37.5 px-10 md:px-16 lg:px-36">
        <Animation>
          <div className="pb-10 pt-30  md:pb-20 md:pt-60  max-w-400 mx-auto">
            <h1 className="text-[48px] md:text-[80px] lg:text-[128px] font-medium leading-[1.1] pb-4">{title}</h1>
            <p className="text-lg md:text-xl lg:text-[32px]">
              {subtitle1} <br className="hidden sm:block" />
              {subtitle2}
            </p>
          </div>
        </Animation>
        {button && (
          <button className="bg-light text-dark uppercase font-medium leading-none text-base rounded-full px-7.5 py-5">
            See open positions
          </button>
        )}
      </div>
    </header>
  );
}

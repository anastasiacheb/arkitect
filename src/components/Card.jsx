import { AnimationCount } from '@/components';

export default function Card({ number, sign, title, text }) {
  return (
    <div className="bg-muted p-8 md:p-10 lg:p-12 rounded-2xl">
      <h3 className="font-medium text-[40px] md:text-5xl">
        <AnimationCount>{number}</AnimationCount>
        {sign}
      </h3>
      <h3 className="text-xs md:text-base uppercase font-medium pt-2">{title}</h3>
      <p className="text-base md:text-lg pt-4">{text}</p>
    </div>
  );
}

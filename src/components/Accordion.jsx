'use client';
import { useState, useRef } from 'react';

export default function Accordion({ question, position, location, description, index, arrayLength }) {
  const [isOpen, setIsOpen] = useState(false);
  const desc = useRef(null);

  let style = '';
  if (index === 0) {
    style = 'pb-8 md:pb-10 lg:pb-12';
  } else if (index > 0 && index < arrayLength - 1) {
    style = 'py-8 md:py-10 lg:py-12 border-t border-border';
  } else {
    style = 'pt-8 md:pt-10 lg:pt-12 border-t border-border';
  }

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={`flex flex-col cursor-pointer overflow-hidden ${style}`}>
      <div className="flex gap-4 lg:gap-8 items-center">
        {position && <h3 className="text-2xl lg:text-[32px] font-medium">{position}</h3>}
        {question && <h3 className="text-xl lg:text-[26px] font-medium">{question}</h3>}
        {location && (
          <p className="uppercase text-xs md:text-sm font-medium bg-muted py-2.5 px-4 rounded-full">{location}</p>
        )}
        <button className="ml-auto size-8 md:size-12 rounded-full flex items-center justify-center border border-border flex-none">
          <img
            src="/icons/ri_add-line.svg"
            alt="plus icon"
            className={`size-4 md:size-6 transition-all ease-linear duration-300 ${isOpen ? 'rotate-135' : ''}`}
          />
        </button>
      </div>
      <div
        ref={desc}
        style={{
          maxHeight: isOpen ? desc.current?.scrollHeight + 'px' : '0px',
        }}
        className={` ${isOpen ? 'max-h-none' : 'max-h-0'} overflow-hidden transition-all ease-linear duration-300`}>
        <p className="text-base md:text-lg leading-[1.8] pt-4 lg:pt-8 ">{description}</p>
      </div>
    </div>
  );
}

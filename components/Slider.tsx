import Link from "next/link";
import React, { FC, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import { getSlideSelector } from "../redux/reducer/sliderItemReducer";

export const Slider: FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const slides = useSelector(getSlideSelector);

  const nextSlide = () => {
    const currentSlide = currentSlideIndex === slides.length - 1;
    const newSlide = currentSlide ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(newSlide);
  };
  const prevSlide = () => {
    const currentSlide = currentSlideIndex === 0;
    const newSlide = currentSlide ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(newSlide);
  };

  const gotToIndex = (slideIndex: React.SetStateAction<number>) => {
    setCurrentSlideIndex(slideIndex);
  };

  return (
    <div className=" max-w-full h-[720px] w-full relative m-auto group">
      <div
        style={{ backgroundImage: `url(${slides[currentSlideIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-1000">
        <p className="text-4xl w-[350px] leading-[50px] font-display text-white absolute top-[+45%] translate-x-0 translate-y-[-45%] left-[10%] cursor-pointer">
          {slides[currentSlideIndex].name}
        </p>
        <Link href="/">
          <p className="text-lg font-display uppercase bg-violet-600 text-white inline-block px-8 py-2 absolute top-[+60%] translate-x-0 translate-y-[-60%] left-[10%] cursor-pointer">
            Shop Now
          </p>
        </Link>
      </div>
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[+50%] translate-x-0 translate-y-[-50%] left-5 cursor-pointer text-violet-200 hover:text-violet-600">
        <BsChevronLeft size={60} />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[+50%] translate-x-0 translate-y-[-50%] right-5 cursor-pointer  text-violet-200 hover:text-violet-600">
        <BsChevronRight size={60} />
      </div>
      <div className="flex py-2 absolute top-[+95%] translate-x-[-60%] translate-y-[-95%] left-[+60%] cursor-pointer">
        {slides.map((item, slideIndex) => (
          <div
            className="w-[10%]"
            onClick={() => gotToIndex(slideIndex)}
            key={slideIndex}>
            {slideIndex === currentSlideIndex ? (
              <BsDot className=" text-gray-700" size={70} />
            ) : (
              <BsDot size={70} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

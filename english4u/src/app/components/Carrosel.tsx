import React, { useState } from 'react';
import Button from '../components/Button';

interface Testimonial {
  content: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const showPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full relative flex flex-col items-center mt-20 h-[400px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full bg-[#F3F4F5] ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex items-center justify-center transition-opacity duration-500  ${
              index === currentSlide ? 'opacity-100' : 'opacity-100 pointer-events-none'
            }`}
          >
            <div className="rounded-lg bg-white w-2/4 flex flex-col items-center justify-end h-[400px]">
              <div className="bg-[#F6281B] h-20 w-20 absolute rounded-full -top-10 flex items-center justify-center">
                <img src="/aspas.svg" alt="comentario" width="100" height="100" />
              </div>
              <div className="mt-20 text-sm text-center w-9/12">
                {testimonial.content}
              </div>
              <div className="text-white bg-[#004AAD] text-black w-full text-center text-4xl mt-32">
                {testimonial.author}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 flex justify-center w-full mb-4">
        <Button
          name="<"
          className="mr-4 lg:hidden"
          onClick={showPrevSlide}
        />
        <Button
          name=">"
          className='lg:hidden'
          onClick={showNextSlide}
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;

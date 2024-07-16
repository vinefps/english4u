'use client'

import React, { useState } from 'react';
import Button from './Button';
const testimonials = [
  {
    content:
      'exercícios práticos e objetivos. O inglês da English4u Online está permitindo me projetar e concorrer no mercado de trabalho internacional.',
    author: 'Vinicius',
  }, {
    content: 'teste1 exercícios práticos e objetivos. O inglês da English4u Online está permitindo me projetar e concorrer no mercado de trabalho internacional',
    author: "Lucas Silva"
  }, {
    content: 'teste2 exercícios práticos e objetivos. O inglês da English4u Online está permitindo me projetar e concorrer no mercado de trabalho internacional',
    author: "Robert"
  }, {
    content: 'teste3 exercícios práticos e objetivos. O inglês da English4u Online está permitindo me projetar e concorrer no mercado de trabalho internacional',
    author: "Augusto"
  }

];

interface Testimonial {
  content: string;
  author: string;
}

// interface TestimonialCarouselProps {
//   testimonials: Testimonial[];
// }

// { testimonials }: TestimonialCarouselProps
const TestimonialCarousel = () => {
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
      <div className="flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full bg-[#F3F4F5] ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`md:block  flex items-center justify-center transition-opacity duration-500  ${index === currentSlide ? 'block' : 'hidden'
              }`}
          >
            <div className="rounded-lg bg-white w-3/4 flex flex-col items-center justify-end ">
              <div className="bg-[#F6281B] h-20 w-20 absolute rounded-full -top-10 flex items-center justify-center">
                <img src="/aspas.svg" alt="comentario" width="100" height="100" />
              </div>
              <div className="mt-20 text-sm text-center w-9/12">
                {testimonial.content}
              </div>
              <div className="rounded-lg text-white bg-[#004AAD] text-black w-full text-center text-4xl mt-32">
                {testimonial.author}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 flex justify-center w-full mb-4">
        <Button
          name="<"
          className="mr-4 md:hidden"
          onClick={showPrevSlide}
        />
        <Button
          name=">"
          className='md:hidden'
          onClick={showNextSlide}
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;

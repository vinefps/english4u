import { useState } from "react";
import Image from "next/image";
import Content from './content/ContentOne';
import Menu from '../components/Menu';
import Button from '../components/Button';
import Footer from '../components/Footer';
import React from "react";
import TestimonialCarousel from '../components/Carrosel';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-gray-50">
      {/* Menu de navegação */}
      <Menu />
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16 md:mb-24">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-10 xl:gap-16">
          {/* Conteúdo principal */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="flex flex-col max-w-lg mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center lg:text-left">
                English <span className="text-[#F6281B]">4</span><span className="text-[#004AAD]">U!</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2 text-center lg:text-left">
                Come and Unlock <br/>Your Potential!
              </h2>
              <p className="mt-6 text-lg text-gray-700 text-center lg:text-left">
                Prepare-se para expandir seus horizontes e alcançar novas alturas com o English 4U!
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Button
                  name="COMECE AGORA"
                  className="bg-[#F6281B] hover:bg-[#E01B0E] transition-colors duration-300 text-white font-bold py-4 px-8 rounded-full text-lg shadow-md"
                />
              </div>
            </div>
          </div>
          
          {/* Imagem de destaque */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="bg-[#004AAD] rounded-full w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] flex items-center justify-center shadow-xl">
              <img 
                src="/mundo.svg" 
                className="h-[90%] w-[90%] object-contain rounded-full" 
                alt="Mundo English 4U"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Diferenciais Section */}
      <section className="w-full bg-[#004AAD] py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Só quem é <span className="text-[#F6281B]">English 4U Online</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              estuda assim:
            </h3>
            <p className="text-lg text-white max-w-3xl mx-auto">
              O English 4U é 100% digital com um método inovador.
              Estude onde quiser com conteúdos exclusivos.
            </p>
          </div>
          
          {/* Cards de diferenciais */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-[#F6281B] rounded-lg p-6 flex flex-col w-[280px] h-[350px] shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="rounded-full border-2 border-[#004AAD] w-16 h-16 flex items-center justify-center bg-white mb-6">
                <img src="/multe.svg" alt="Multiplataforma" className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Multiplataforma</h4>
              <div className="flex mb-4">
                <div className="h-3 w-8 rounded-lg bg-[#004AAD]"></div>
                <div className="h-3 w-4 rounded-lg ml-1 bg-[#004AAD]"></div>
              </div>
              <p className="text-white flex-grow">
                Acesse a plataforma em qualquer dispositivo, quando e onde quiser.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#F6281B] rounded-lg p-6 flex flex-col w-[280px] h-[350px] shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="rounded-full border-2 border-[#004AAD] w-16 h-16 flex items-center justify-center bg-white mb-6">
                <img src="/maoss.svg" alt="Documentários" className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Documentários</h4>
              <div className="flex mb-4">
                <div className="h-3 w-8 rounded-lg bg-[#004AAD]"></div>
                <div className="h-3 w-4 rounded-lg ml-1 bg-[#004AAD]"></div>
              </div>
              <p className="text-white flex-grow">
                Assista a documentários originais produzidos nos E.U.A. para aprendizado imersivo.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-[#F6281B] rounded-lg p-6 flex flex-col w-[280px] h-[350px] shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="rounded-full border-2 border-[#004AAD] w-16 h-16 flex items-center justify-center bg-white mb-6">
                <img src="/conteudo.svg" alt="Conteúdo" className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">500h de conteúdos</h4>
              <div className="flex mb-4">
                <div className="h-3 w-8 rounded-lg bg-[#004AAD]"></div>
                <div className="h-3 w-4 rounded-lg ml-1 bg-[#004AAD]"></div>
              </div>
              <p className="text-white flex-grow">
                Vídeos de gramática e vocabulário e mais de 5 mil exercícios para praticar.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Metodologia Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/metodologia.svg" 
                alt="Metodologia English 4U" 
                width={600} 
                height={400} 
                className="w-full h-auto" 
                priority 
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004AAD] mb-6 text-center lg:text-left">
                Metodologia
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center lg:text-left">
                O English 4U Online é completamente digital,
                onde você aprende o inglês aplicado na prática
                em situações reais de acordo com o tema do seu interesse.
                Tudo para oferecer a você uma experiência de imersão cultural instigante,
                te ajudando a pensar em inglês e tornando seu aprendizado muito mais fácil.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  name="COMECE AGORA"
                  className="bg-[#F6281B] hover:bg-[#E01B0E] transition-colors duration-300 text-white font-bold py-4 px-8 rounded-full text-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Como Estudar Section */}
      <section className="w-full bg-[#004AAD] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-center lg:text-left">
                Como estudar com <span className="text-[#F6281B]">o English 4U Online?</span>
              </h2>
            </div>
            
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/celular.gif" 
                  alt="Celular com English 4U" 
                  width={400} 
                  height={600} 
                  className="w-full h-auto" 
                  unoptimized 
                  priority 
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 text-white">
              <div className="max-w-md mx-auto lg:mx-0">
                <p className="text-lg mb-6">O English 4U Online é bem simples e intuitivo. Em três passos, você desenvolve seu inglês:</p>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#F6281B] mb-2">Aprenda</h3>
                  <p>com documentários originais que apresentam o inglês aplicado na prática.</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#F6281B] mb-2">Explore</h3>
                  <p>com os vídeos de vocabulário, gramática e guides de palavras com listening.</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#F6281B] mb-2">Pratique</h3>
                  <p>com mais de 4 mil exercícios de fixação.</p>
                </div>
                
                <Button
                  name="ASSINE JÁ"
                  className="bg-[#F6281B] hover:bg-[#E01B0E] transition-colors duration-300 text-white font-bold py-4 px-8 rounded-full text-lg shadow-md w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Depoimentos Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004AAD] mb-12 text-center">
          Depoimentos
        </h2>
        <TestimonialCarousel />
      </section>
      
      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-16">
        <Faq />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

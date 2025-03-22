'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Content from './content/ContentOne';
import Menu from '../components/Menu';
import Button from '../components/Button';
import Footer from '../components/Footer';
import React from "react";
import TestimonialCarousel from '../components/Carrosel';
import Faq from '../components/Faq';

export default function Home() {
  // Estado para controlar animação de entrada
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Adicionar classe para animação de scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Elementos decorativos de fundo */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#004AAD] opacity-5 blur-[100px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#F6281B] opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#004AAD] opacity-5 blur-[100px]"></div>
      </div>
      
      {/* Menu de navegação */}
      <div className="sticky top-0 z-50">
        <div className="absolute inset-0 bg-[#004AAD] opacity-90 backdrop-blur-md z-0"></div>
        <div className="relative z-10">
          <Menu />
        </div>
      </div>
      
      {/* Hero Section */}
      <section 
        className={`relative w-full min-h-screen flex items-center pt-24 transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* Conteúdo principal */}
            <div className="w-full lg:w-1/2 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" 
                 style={{animationDelay: '0.2s'}}>
              <div className="backdrop-blur-sm bg-white/30 p-8 lg:p-12 rounded-2xl shadow-2xl border border-white/40">
                <div className="inline-block mb-6">
                  <span className="text-sm uppercase tracking-widest text-[#004AAD] font-semibold bg-blue-50 py-1 px-3 rounded-full">
                    Curso de Inglês Online
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-800 mb-6">
                  English 
                  <span className="relative">
                    <span className="relative z-10 text-[#F6281B]">4</span>
                    <span className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-200 rounded-full blur-md opacity-60 z-0"></span>
                  </span>
                  <span className="text-[#004AAD]">U!</span>
                </h1>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-6">
                  Unlock Your Potential!
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Prepare-se para expandir seus horizontes e alcançar novas alturas com o método inovador do English 4U!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    name="COMECE AGORA"
                    className="relative overflow-hidden bg-gradient-to-r from-[#F6281B] to-[#FF4B40] text-white font-bold py-5 px-10 rounded-full text-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
                  />
                  <button className="group relative bg-transparent border-2 border-[#004AAD] text-[#004AAD] font-bold py-5 px-10 rounded-full text-lg transition duration-500 overflow-hidden">
                    <span className="relative z-10 group-hover:text-white transition duration-500">SAIBA MAIS</span>
                    <span className="absolute inset-0 bg-[#004AAD] transform -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Imagem de destaque */}
            <div className="w-full lg:w-1/2 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
                 style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#004AAD] to-[#0066FF] rounded-full blur-md opacity-30 transform scale-110"></div>
                <div className="relative bg-gradient-to-br from-[#004AAD] to-[#0057CC] rounded-full w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] mx-auto flex items-center justify-center shadow-2xl">
                  {/* Círculos decorativos */}
                  <div className="absolute w-full h-full rounded-full border-4 border-white/10 animate-pulse"></div>
                  <div className="absolute w-[90%] h-[90%] rounded-full border-2 border-white/20"></div>
                  
                  <img 
                    src="/mundo.svg" 
                    className="h-[80%] w-[80%] object-contain drop-shadow-2xl transform transition-transform duration-10000 hover:rotate-[360deg]" 
                    alt="Mundo English 4U"
                  />
                </div>
                
                {/* Elementos decorativos flutuantes */}
                <div className="absolute top-[10%] right-[10%] bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg transform rotate-6 animate-float">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium">100% Online</span>
                  </div>
                </div>
                <div className="absolute bottom-[15%] left-[5%] bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg transform -rotate-6 animate-float-delay">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm font-medium">Aprenda onde quiser</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats cards */}
          <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
               style={{animationDelay: '0.6s'}}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40 group hover:bg-[#004AAD] hover:border-[#004AAD] transition-all duration-500">
              <div className="flex items-center mb-4 transition-all duration-500 group-hover:text-white">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 transition-all duration-500 group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#004AAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Estude no seu ritmo</h3>
              </div>
              <p className="text-gray-600 transition-all duration-500 group-hover:text-white/90">
                Acesse o conteúdo quando e onde quiser, adaptando o estudo à sua rotina.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40 group hover:bg-[#F6281B] hover:border-[#F6281B] transition-all duration-500">
              <div className="flex items-center mb-4 transition-all duration-500 group-hover:text-white">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 transition-all duration-500 group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F6281B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Método comprovado</h3>
              </div>
              <p className="text-gray-600 transition-all duration-500 group-hover:text-white/90">
                Mais de 10.000 alunos já conquistaram fluência com nosso método exclusivo.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40 group hover:bg-[#004AAD] hover:border-[#004AAD] transition-all duration-500">
              <div className="flex items-center mb-4 transition-all duration-500 group-hover:text-white">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 transition-all duration-500 group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#004AAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">100% na nuvem</h3>
              </div>
              <p className="text-gray-600 transition-all duration-500 group-hover:text-white/90">
                Estude em qualquer dispositivo, sem necessidade de downloads ou instalações.
              </p>
            </div>
          </div>
        </div>
        
        {/* Formas decorativas */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-3xl"></div>
      </section>
      
      {/* Diferenciais Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#004AAD] to-[#002A80] skew-y-6 transform origin-top-right z-0 shadow-xl"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-20">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              DIFERENCIAIS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Só quem é <span className="text-[#F6281B] relative">
                English 4U Online
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#F6281B]/30"></span>
              </span>
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              estuda assim:
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              O English 4U é 100% digital com um método inovador.
              Estude onde quiser com conteúdos exclusivos.
            </p>
          </div>
          
          {/* Cards de diferenciais com efeito glass */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-6">
            {/* Card 1 */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
                 style={{animationDelay: '0.2s'}}>
              <div className="relative overflow-hidden rounded-2xl bg-[#F6281B]/90 backdrop-blur-sm shadow-2xl h-full transform transition duration-500 hover:scale-105 hover:shadow-2xl group">
                {/* Padrão de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-0"></div>
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-white/10 rounded-full"></div>
                
                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="rounded-full bg-white shadow-xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <img src="/multe.svg" alt="Multiplataforma" className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Multiplataforma</h3>
                  
                  <div className="flex mb-6">
                    <div className="h-1 w-16 rounded-full bg-white/60"></div>
                    <div className="h-1 w-6 rounded-full ml-1 bg-white/60"></div>
                  </div>
                  
                  <p className="text-white/90 text-lg mb-6 flex-grow">
                    Acesse a plataforma em qualquer dispositivo, quando e onde quiser, sem limitações.
                  </p>
                  
                  <div className="pt-4 mt-auto">
                    <span className="inline-flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Saiba mais
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
                 style={{animationDelay: '0.4s'}}>
              <div className="relative overflow-hidden rounded-2xl bg-[#F6281B]/90 backdrop-blur-sm shadow-2xl h-full transform transition duration-500 hover:scale-105 hover:shadow-2xl group">
                {/* Padrão de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-0"></div>
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-white/10 rounded-full"></div>
                
                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="rounded-full bg-white shadow-xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <img src="/maoss.svg" alt="Documentários" className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Documentários</h3>
                  
                  <div className="flex mb-6">
                    <div className="h-1 w-16 rounded-full bg-white/60"></div>
                    <div className="h-1 w-6 rounded-full ml-1 bg-white/60"></div>
                  </div>
                  
                  <p className="text-white/90 text-lg mb-6 flex-grow">
                    Assista a documentários originais produzidos nos E.U.A. para um aprendizado imersivo e contextualizado.
                  </p>
                  
                  <div className="pt-4 mt-auto">
                    <span className="inline-flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Saiba mais
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
                 style={{animationDelay: '0.6s'}}>
              <div className="relative overflow-hidden rounded-2xl bg-[#F6281B]/90 backdrop-blur-sm shadow-2xl h-full transform transition duration-500 hover:scale-105 hover:shadow-2xl group">
                {/* Padrão de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-0"></div>
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-white/10 rounded-full"></div>
                
                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="rounded-full bg-white shadow-xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <img src="/conteudo.svg" alt="Conteúdo" className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">500h de conteúdos</h3>
                  
                  <div className="flex mb-6">
                    <div className="h-1 w-16 rounded-full bg-white/60"></div>
                    <div className="h-1 w-6 rounded-full ml-1 bg-white/60"></div>
                  </div>
                  
                  <p className="text-white/90 text-lg mb-6 flex-grow">
                    Vídeos de gramática e vocabulário e mais de 5 mil exercícios para um aprendizado completo.
                  </p>
                  
                  <div className="pt-4 mt-auto">
                    <span className="inline-flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Saiba mais
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Metodologia Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#004AAD]/20 to-[#F6281B]/20 rounded-3xl blur-xl"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image 
                    src="/metodologia.svg" 
                    alt="Metodologia English 4U" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700" 
                    priority 
                  />
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F6281B] rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#004AAD] rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
                 style={{animationDelay: '0.3s'}}>
              <div className="max-w-lg">
                <span className="inline-block px-4 py-1 bg-blue-100 text-[#004AAD] rounded-full text-sm font-medium mb-6">
                  NOSSA METODOLOGIA
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8 relative">
                  Metodologia
                  <div className="absolute -z-10 -bottom-3 left-0 w-20 h-3 bg-[#F6281B]/20 rounded-full blur-sm"></div>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  O English 4U Online é completamente digital,
                  onde você aprende o inglês aplicado na prática
                  em situações reais de acordo com o tema do seu interesse.
                </p>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Tudo para oferecer a você uma experiência de imersão cultural instigante,
                  te ajudando a pensar em inglês e tornando seu aprendizado muito mais fácil.
                </p>
                
                {/* Lista de benefícios */}
                <div className="mb-10 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-4">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Conteúdo 100% adaptado ao seu nível</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-4">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Suporte personalizado durante todo o curso</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-4">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Experiência de imersão cultural completa</span>
                  </div>
                </div>
                
                <Button
                  name="COMECE AGORA"
                  className="relative overflow-hidden bg-gradient-to-r from-[#004AAD] to-[#0066FF] text-white font-bold py-5 px-10 rounded-full text-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl group"
                >
                  <span className="absolute right-0 w-8 h-8 rounded-full bg-white/20 group-hover:scale-[20] transition-all duration-1000 origin-center"></span>
                  <span className="relative z-10">COMECE AGORA</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Formas decorativas */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#F6281B]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#004AAD]/10 rounded-full blur-3xl"></div>
      </section>
      
      {/* Como Estudar Section com design 3D e elementos interativos */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#004AAD] to-[#002D85] -skew-y-6 transform origin-top-right z-0 shadow-xl"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
              <div className="text-white">
                <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                  MÉTODO DE APRENDIZADO
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-8 relative">
                  Como estudar com 
                  <span className="text-[#F6281B] block mt-2 relative">
                    o English 4U Online?
                    <span className="absolute -bottom-1 left-0 w-40 h-1 bg-[#F6281B]/30"></span>
                  </span>
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  O English 4U Online é bem simples e intuitivo. Em três passos, você desenvolve seu inglês:
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 flex justify-center animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
                 style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform perspective-1000 hover:rotate-y-12 transition-all duration-700">
                  <Image 
                    src="/celular.gif" 
                    alt="Celular com English 4U" 
                    width={400} 
                    height={600} 
                    className="w-full h-auto" 
                    unoptimized 
                    priority 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004AAD]/50 to-transparent"></div>
                </div>
                
                {/* Elementos decorativos flutuantes */}
                <div className="absolute top-6 -right-12 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl transform rotate-12 animate-float">
                  <span className="text-sm font-bold text-[#004AAD]">+500 horas</span>
                </div>
                <div className="absolute -bottom-8 -left-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl transform -rotate-6 animate-float-delay">
                  <span className="text-sm font-bold text-[#F6281B]">Multiplataforma</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
                 style={{animationDelay: '0.6s'}}>
              <div className="text-white space-y-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#F6281B]"></div>
                  <h3 className="text-2xl font-bold text-[#F6281B] mb-3 relative">
                    Aprenda
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#F6281B] group-hover:w-full transition-all duration-300"></div>
                  </h3>
                  <p className="text-white/90 text-lg">
                    com documentários originais que apresentam o inglês aplicado na prática.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#F6281B]"></div>
                  <h3 className="text-2xl font-bold text-[#F6281B] mb-3 relative">
                    Explore
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#F6281B] group-hover:w-full transition-all duration-300"></div>
                  </h3>
                  <p className="text-white/90 text-lg">
                    com os vídeos de vocabulário, gramática e guides de palavras com listening.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#F6281B]"></div>
                  <h3 className="text-2xl font-bold text-[#F6281B] mb-3 relative">
                    Pratique
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#F6281B] group-hover:w-full transition-all duration-300"></div>
                  </h3>
                  <p className="text-white/90 text-lg">
                    com mais de 4 mil exercícios de fixação que garantem seu aprendizado.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button
                    name="ASSINE JÁ"
                    className="w-full bg-[#F6281B] hover:bg-[#E01B0E] text-white font-bold py-5 px-8 rounded-xl text-lg shadow-xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF5640]/40 to-transparent bg-[length:200%_100%] bg-right group-hover:bg-left transition-all duration-1000"></span>
                    <span className="relative z-10">ASSINE JÁ</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Depoimentos Section com design de carrossel moderno */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
            <span className="inline-block px-4 py-1 bg-blue-100 text-[#004AAD] rounded-full text-sm font-medium mb-4">
              DEPOIMENTOS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
              O que dizem nossos alunos
              <div className="absolute -z-10 -bottom-3 left-1/4 right-1/4 h-3 bg-[#F6281B]/20 rounded-full blur-sm"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira os resultados reais de quem já está transformando seu inglês com o English 4U.
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
               style={{animationDelay: '0.3s'}}>
            <TestimonialCarousel />
          </div>
          
          {/* Stats counter */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
               style={{animationDelay: '0.5s'}}>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="text-4xl font-bold text-[#004AAD] mb-2">10.000+</div>
              <div className="text-gray-500">Alunos ativos</div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="text-4xl font-bold text-[#004AAD] mb-2">4.8/5</div>
              <div className="text-gray-500">Avaliação média</div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="text-4xl font-bold text-[#004AAD] mb-2">95%</div>
              <div className="text-gray-500">Taxa de satisfação</div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="text-4xl font-bold text-[#004AAD] mb-2">5.000+</div>
              <div className="text-gray-500">Exercícios interativos</div>
            </div>
          </div>
        </div>
        
        {/* Formas decorativas */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#004AAD]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-[#F6281B]/10 rounded-full blur-3xl"></div>
      </section>
      
      {/* FAQ Section com acordeão moderno */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
            <Faq />
          </div>
          
          {/* Chamada para ação */}
          <div className="mt-20 relative animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10"
               style={{animationDelay: '0.3s'}}>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#004AAD]/20 via-[#F6281B]/20 to-[#004AAD]/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-2/3 p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Pronto para transformar seu inglês?</h3>
                  <p className="text-xl text-gray-600 mb-8">
                    Comece hoje mesmo e descubra como o English 4U pode mudar completamente sua forma de aprender inglês.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      name="COMECE AGORA"
                      className="bg-gradient-to-r from-[#F6281B] to-[#FF4B40] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
                    />
                    <button className="group relative bg-transparent border-2 border-[#004AAD] text-[#004AAD] font-bold py-4 px-8 rounded-full text-lg transition duration-500 overflow-hidden">
                      <span className="relative z-10 group-hover:text-white transition duration-500">SAIBA MAIS</span>
                      <span className="absolute inset-0 bg-[#004AAD] transform -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/3 relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#004AAD] to-[#0066FF]"></div>
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay" 
                       style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20H0zm40 0V0H20v20h20zm0 20H20V20h20v20zM0 20v20h20V20H0z'/%3E%3C/g%3E%3C/svg%3E')" }}>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <div className="text-4xl font-bold mb-2">50%</div>
                      <div className="text-xl font-medium mb-4">DE DESCONTO</div>
                      <div className="text-sm">Na primeira mensalidade</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer estilizado */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#003A8D] -skew-y-3 transform origin-bottom-right"></div>
        <div className="relative pt-16 z-10">
          <Footer />
        </div>
      </div>
      
      {/* Estilização global para animações */}
      <style jsx global>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out 2s infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(6deg);
          }
          50% {
            transform: translateY(-15px) rotate(6deg);
          }
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        /* Perspective utilities */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </main>
  );
}

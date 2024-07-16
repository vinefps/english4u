import { useState } from "react";
import Image from "next/image";
import Content from './content/ContentOne'
import Menu from '../components/Menu';
import Button from '../components/Button';
import Footer from '../components/Footer';
import React from "react";
import TestimonialCarousel from '../components/Carrosel'
import Faq from '../components/Faq'

export default function Home() {

  return (
    <main className="flex flex-col lg:items-center lg:justify-between w-screen  bg-gray-100">
      <Menu />
      <section className="w-screen mt-24 xl:w-[1335px]">
        <div className="flex flex-col items-center xl:h-[600px] lg:flex-row">
          <div className="order-2 lg:w-1/2 lg:order-1">
            <div className="flex flex-col ">
              <div className="flex justify-center w-full lg:h-60 lg:w-92 mt-4">
                <div className="text-4xl lg:line-clamp-3 lg:text-6xl"><div>English <span className="text-[#F6281B]">4</span><span className="text-[#004AAD]">U!</span> </div><div>Come and Unlock</div> <div>Your Potential!</div> </div>
              </div>
              <div className="flex justify-center items-center w-full lg:w-72">
                <p className="w-[350px] mt-4">
                  Prepare-se para expandir seus horizontes e alcançar novas alturas com o English 4U!
                </p>
              </div>
              <div className="flex mt-8 ">
                <Button
                  name="COMECE AGORA"
                  className="w-full bg-[#F6281B] hover:bg-[#004AAD] text-white lg:hover:bg-[#004AAD] font-bold py-2 px-4 rounded mr-4 bg-[#F6281B] text-white text-xl w-3/4 h-20 rounded-full lg:w-3/4 lg:h-20 lg:rounded-full lg:mr-4 lg:bg-[#F6281B]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full order-1 lg:order-2 lg:h-3/4">
            <div className="flex justify-center items-center bg-[#004AAD] rounded-full w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] lg:rounded-full ">
              <img src="/mundo.svg" className="h-full rounded-full " />
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen mt-32 lg:w-screen lg:mt-32 ">
        <div className=" flex flex-col w-screen bg-[#004AAD] ">
          <div className="flex flex-col items-center  pt-8">
            <div className="text-2xl text-white lg:text-5xl ">Só quem é <span className="text-[#F6281B]">English 4U Online</span></div>
            <div className="text-2xl text-white lg:text-5xl lg:ml-4 ">estuda assim:</div>
            <span className="w-5/6 mt-4 text-center text-white text-xl lg:text-center lg:mt-4 lg:text-lg">
              O English 4U é 100% digital
              com um método inovador.
              Estude onde quiser com conteúdos exclusivos.</span>
          </div>
          <div className="h-[200px] relative">
            <div className="flex flex-wrap justify-center items-center mt-8 absolute top-92 sm:static">
              <div className="p-4 lg:p-10 bg-[#F6281B] mr-4 lg:mr-4 rounded-lg lg:flex lg:items-start lg:flex-col space-y-8 lg:space-y-4 h-[330px] w-[200px] max-sm:w-[160px] lg:w-[250px]">
                <div className="rounded-full border-2 border-[#004AAD] w-14 lg:w-16 h-14 lg:h-16 flex items-center justify-center"><img src="/multe.svg" alt="multe" /></div>
                <div>
                  <span className="text-white text-sm lg:text-base ">Multiplataforma</span>
                </div>
                <div className="flex ">
                  <div className="h-2 lg:h-4 w-6 lg:w-8 rounded-lg bg-[#004AAD]"></div>
                  <div className="h-2 lg:h-4 w-3 lg:w-4 rounded-lg ml-2 lg:ml-1 bg-[#004AAD]"></div>
                </div>
                <div className="w-36">
                  <span className="text-white text-sm lg:text-sm pt-4 lg:pt-8">Acesse a plataforma em qualquer dispositivo;</span>
                </div>
              </div>
              <div className="p-5 md:p-10 bg-[#F6281B] rounded-lg lg:mr-4 lg:flex lg:items-start lg:flex-col space-y-8 lg:space-y-4 h-[330px] w-[200px] md:mr-4 max-sm:w-[160px] lg:w-[250px]">
                <div className="rounded-full border-2 border-[#004AAD] w-14 lg:w-16 h-14 lg:h-16 flex items-center justify-center"><img src="/maoss.svg" alt="multe" /></div>
                <div>
                  <span className="text-white text-sm lg:text-base">Documentários</span>
                </div>
                <div className="flex">
                  <div className="h-2 lg:h-4 w-6 lg:w-8 rounded-lg bg-[#004AAD]"></div>
                  <div className="h-2 lg:h-4 w-3 lg:w-4 rounded-lg ml-2 lg:ml-1 bg-[#004AAD]"></div>
                </div>
                <div className="w-36">
                  <span className="text-white text-sm lg:text-sm">Assista a documentários originais produzidos nos E.U.A.;</span>
                </div>
              </div>
              <div className="p-5 ml-4 sm:p-10 sm:mt-0 bg-[#F6281B] rounded-lg lg:mr-4 lg:flex lg:items-start lg:flex-col space-y-8 lg:space-y-4 h-[330px] w-[200px] max-sm:w-[160px] lg:w-[250px]">
                <div className="rounded-full border-2 border-[#004AAD] w-14 lg:w-16 h-14 lg:h-16 flex items-center justify-center"><img src="/conteudo.svg" alt="multe" /></div>
                <div>
                  <span className="text-white text-sm lg:text-base">500h de conteúdos</span>
                </div>
                <div className="flex">
                  <div className="h-2 lg:h-4 w-6 lg:w-8 rounded-lg bg-[#004AAD]"></div>
                  <div className="h-2 lg:h-4 w-3 lg:w-4 rounded-lg ml-2 lg:ml-1 bg-[#004AAD]"></div>
                </div>
                <div className="w-36">
                  <span className="text-white text-sm lg:text-sm">Vídeos de gramática e vocabulário e + de 5 mil exercícios;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[600px] lg:h-[300px]"></div>
      </section>


      <section className="w-screen mt-92 lg:mb-20 lg:mt-0">
        <div className="flex flex-col  items-center justify-center lg:flex-row lg:items-start ">
          <div className="flex justify-center order-2 w-5/6  rounded-lg lg:w-1/2 lg:order-1 lg:basis-1/3 ">
            <Image src="/metodologia.svg" alt="metodologia" width={400} height={70} priority className="rounded-md" />
          </div>
          <div className="flex flex-col justify-center items-center w-5/6 text-center order-1 lg:order-2 lg:basis:1/2 lg:w-2/6 l ">
            <div className="text-5xl mb-8">Metodologia</div>
            <p className="mb-8">O English 4U Online é completamente digital,
              onde você aprende o inglês aplicado na prática
              em situações reais de acordo com o tema do seu interesse.
              Tudo para oferecer a você uma experiência de imersão cultural instigante,
              te ajudando a pensar em inglês e tornando seu aprendizado muito mais fácil.
            </p>
            <div className="flex justify-center items-center w-3/4 order-3 hidden lg:block">
              <Button
                name="COMECE AGORA"
                className="w-5/6 mt-4 bg-[#F6281B] hover:bg-[#004AAD] text-white lg:hover:bg-[#004AAD] font-bold py-2 px-4 rounded mr-4 bg-[#F6281B] text-white text-xl w-3/4 h-20 rounded-full lg:w-3/4 lg:h-20 lg:rounded-full lg:mr-4 lg:bg-[#F6281B]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-3/4 order-3 lg:hidden">
            <Button
              name="COMECE AGORA"
              className="w-5/6 mt-4 bg-[#F6281B] hover:bg-[#004AAD] text-white lg:hover:bg-[#004AAD] font-bold py-2 px-4 rounded mr-4 bg-[#F6281B] text-white text-xl w-3/4 h-20 rounded-full lg:w-3/4 lg:h-20 lg:rounded-full lg:mr-4 lg:bg-[#F6281B]"
            />
          </div>
        </div>


        <div className="flex flex-col w-full lg:flex-row mt-28 bg-[#004AAD] ">
          <div className="flex items-center justify-center w-full  text-4xl lg:basis-1/3 lg:flex lg:justify-end lg:items-center">
            <div className="text-4xl ml-8 text-white lg:text-6xl lg:ml-8 ">Como estudar com <span className="text-[#F6281B]">o English 4U Online?</span></div>
          </div>
          <div className="flex justify-center lg:flex lg:relative lg:items-center">
            <Image src="/celular.gif" alt="celular" width={500} height={70} unoptimized priority />
          </div>
          <div className="w-full flex flex-col items-center lg:flex lg:w-92 lg:flex-1 lg:flex-col lg:items-start lg:justify-center text-white text-md ">
            <p className="w-[350px]">O English 4U Online é bem simples e intuitivo. Em três passos, você desenvolve seu inglês:</p> <br />
            <p className="w-[350px]"><span className="text-[#F6281B] text-2xl">Aprenda </span>com documentários originais que apresentam o inglês aplicado na prática.</p><br />
            <p className="w-[350px]"><span className="text-[#F6281B] text-2xl">Explore</span> com os vídeos de vocabulário, gramática e guides de palavras com listening.</p><br />
            <p className="w-[350px]"><span className="text-[#F6281B] text-2xl">Pratique</span> com mais de 4 mil exercícios de fixação.</p><br />
            <Button
              name="ASSINE JA"
              className="w-5/6 mt-4 mb-4 bg-[#F6281B] hover:bg-[#004AAD] text-white lg:hover:bg-[#004AAD] font-bold py-2 px-4 rounded mr-4 bg-[#F6281B] text-white text-xl w-3/4 h-20 rounded-full lg:w-3/4 lg:h-20 lg:rounded-full lg:mr-4 lg:bg-[#F6281B]"
            />
          </div>
        </div>
      </section>
      <section className="w-screen flex flex-col items-center justify-center bg-gray-100 border-b-4">
        <div className="mt-4 ">
          <span className="text-5xl lg:text-5xl text-[#004AAD]">Depoimentos</span>
        </div>
        <TestimonialCarousel />
      </section>
      <section className="max-md:mt-[400px] lg:mt-[10px] bg-gray-100">
        <Faq />
      </section>
      <Footer />
    </main>
  );
}




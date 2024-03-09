'use client'
import { useState } from "react";
import Image from "next/image";
import Content from '../components/Content'
import Menu from '../components/Menu';
import Footer from '../components/Footer'
import React from "react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
      <div className="flex justify-center w-full sm:w-auto">
        <Menu />
      </div>
      {/* <section className="pt-32">
        <div className="flex place-items-center w-[1150px]">
          <div className="flex-1">
            <div className="">
              <div className="h-60 w-72">
                <div className="sm:text-xs lg:text-4xl line-clamp-3">Unlock Your Potential with English 4U!</div>
              </div>
              <div className="w-72">
                <p>
                  Prepare-se para expandir seus horizontes e alcançar novas alturas com o English 4U!
                </p>
              </div>
              <div className="flex mt-8">
                <button className="bg-green-400 text-white hover:bg-green-500 font-bold py-2 px-4 rounded mr-4">
                  Se inscrever
                </button>
                <button className="border border-green-400 text-green-400 hover:text-green-500 font-bold py-2 px-4 rounded">
                  Saber mais
                </button>
              </div>
            </div>
          </div>
          <div className="bg-green-400 w-[500px] h-[500px] rounded-full">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/estudante2.svg"
              alt="English 4u"
              width={400}
              height={37}
              priority
            />
          </div>
        </div>
      </section>
      <section className="w-full h-[700px] mt-32">
        <div className=" relative flex bg-purple-900 h-3/5 ">
          <div className="absolute flex flex-col justify-center items-center left-1/4 mt-24 mr-72">
            <div className="text-5xl text-white ">Só quem é <span className="text-green-400">Wise Up Online</span></div>
            <div className="text-5xl ml-4 text-white">estuda assim:</div>
            <span className="mt-4 text-lg text-white">O Wise Up Online é 100% digital com um método inovador. Estude onde quiser com conteúdos exclusivos.</span>
          </div>
          <div className="absolute -bottom-40 left-1/3 flex z-10 left-[370px]">
            <div className="mr-4 flex items-start flex-col  bg-purple-700 space-y-4 h-[220px] w-[130px] border-mypurple-2 p-10 rounded-lg">
              <div className="rounded-full w-16 h-16 bg-green-400"></div>
              <span className="text-white">Multiplataforma</span>
              <div className="flex">
                <div className="h-2 w-8 rounded-lg bg-green-400"></div>
                <div className="h-2 w-4 rounded-lg ml-2 bg-green-400"></div>
              </div>
              <span className="text-white">Acesse a plataforma em qualquer dispositivo;</span>
            </div>
            <div className="mr-4 flex items-start flex-col  bg-purple-700 space-y-4 h-[220px] w-[130px] border-mypurple-2 p-10 rounded-lg">
              <div className="rounded-full w-16 h-16 bg-green-400"></div>
              <span className="text-white">Multiplataforma</span>
              <div className="flex">
                <div className="h-2 w-8 rounded-lg bg-green-400"></div>
                <div className="h-2 w-4 rounded-lg ml-2 bg-green-400"></div>
              </div>
              <span className="text-white">Acesse a plataforma em qualquer dispositivo;</span>
            </div>
            <div className="flex items-start flex-col  bg-purple-700 space-y-4 h-[220px] w-[130px] border-mypurple-2 p-10 rounded-lg">
              <div className="rounded-full w-16 h-16 bg-green-400"></div>
              <span className="text-white">Multiplataforma</span>
              <div className="flex">
                <div className="h-2 w-8 rounded-lg bg-green-400"></div>
                <div className="h-2 w-4 rounded-lg ml-2 bg-green-400"></div>
              </div>
              <span className="text-white">Acesse a plataforma em qualquer dispositivo;</span>
            </div>
          </div>
        </div>
        <div className="h-2/5"></div>
      </section>
      <section className="mb-20 w-full">
        <div className="flex items-center ">
          <div className="ml-40 w-1/2 rounded-lg">
            <Image src="/metodologia.svg" alt="metodologia" width={500} height={70} priority className="rounded-md" />
          </div>
          <div className=" w-1/3 flex flex-col justify-center items-start">
            <div className="text-5xl mb-8">Metodologia</div>
            <p className="mb-8">O Wise Up Online é completamente digital,
              onde você aprende o inglês aplicado na prática
              em situações reais de acordo com o tema do seu interesse.
              Tudo para oferecer a você uma experiência de imersão cultural instigante,
              te ajudando a pensar em inglês e tornando seu aprendizado muito mais fácil.
            </p>
            <button className="bg-green-400 text-white hover:bg-green-500 font-bold py-2 px-4 rounded mr-4">
              QUERO COMEÇAR
            </button>
          </div>
        </div>
        <div className="flex w-full mt-28 bg-purple-900 ">
          <div className="flex-1 flex justify-end items-center">
            <div className="text-white text-6xl">Como estudar com <span className="text-green-400">o Wise Up Online?</span></div>
          </div>
          <div className="flex relative items-center">
            <Image src="" alt="" width={500} height={70} unoptimized priority />
          </div>
          <div className="flex w-92 flex-1 flex-col items-start justify-center text-white text-md">
            <p>O Wise Up Online é bem simples e intuitivo. Em três passos, você desenvolve seu inglês:</p> <br />
            <p><span className="text-green-400 text-2xl">Aprenda </span>com documentários originais que apresentam o inglês aplicado na prática.</p><br />
            <p><span className="text-green-400 text-2xl">Explore</span> com os vídeos de vocabulário, gramática e guides de palavras com listening.</p><br />
            <p><span className="text-green-400 text-2xl">Pratique</span> com mais de 4 mil exercícios de fixação.</p><br />
          </div>
        </div>
      </section>
      <footer className="pt-32 mt-48">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Sobre{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Saiba mais sobre nós e sobre o produto!
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contato{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Aprenda com nosso curso interativo em&nbsp;English 4u!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Formulario{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Entre no nosso formulário e garanta já a sua vaga.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Saiba mais{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Tem alguma dúvida e gostaria de entrar em contato?
            </p>
          </a>
        </div>
      </footer> */}
    </main>
  );
}

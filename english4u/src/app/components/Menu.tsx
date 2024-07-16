'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import ButtonDefault from './Button';

export default function Menu() {
    const [menubar, setMenu] = useState<boolean>(false);

    function showMenu() {
        setMenu(!menubar);
    }

    return (
        <nav className="flex flex-row fixed z-20 bg-[#004AAD] w-screen">
            <div className="flex justify-around w-full h-24 relative">
                <div className="flex items-center ">
                    <Image
                        className="bg-white rounded-full ml-8 lg:ml-24"
                        src="/english.svg"
                        alt="English 4u"
                        width={70}
                        height={25}
                        priority
                    />
                </div>
                <div className="w-full lg:hidden">
                    <div className="flex justify-end items-center h-24" onClick={showMenu}>
                        <Image
                            className="cursor-pointer mr-8"
                            width={40}
                            height={35}
                            src="/menu.svg"
                            alt="Menu"
                            priority
                        />
                    </div>
                </div>
                <div className={`w-full absolute top-24  bg-[#004AAD] ${menubar ? 'block' : 'hidden'} lg:max-xl:w-2/3 2xl:3/4 lg:block lg:static lg:max-xl:bg-[#004AAD] xl:w-1/2`}>
                    <ul className="gap-x-4 lg:flex lg:items-center lg:h-full">
                        <li className='p-8 lg:p-0 '>
                            <a href="#" className="text-white text-xl hover:text-gray-100 px-3 py-2 rounded-md text-lg lg:text-base">Diferenciais</a>
                        </li>
                        <li className='p-8  lg:p-0'>
                            <a href="#" className="text-white text-xl  hover:text-gray-100 px-3 py-2 rounded-md text-lg lg:text-base">Metodologia</a>
                        </li>
                        <li className='p-8  lg:p-0'>
                            <a href="#" className="text-white text-xl  hover:text-gray-100 px-3 py-2 rounded-md text-lg lg:text-base">Como estudar?</a>
                        </li>
                        <li className='p-8  lg:p-0'>
                            <a href="#" className="text-white text-xl  hover:text-gray-100 px-3 py-2 rounded-md text-lg lg:text-base">Depoimentos</a>
                        </li>
                        <li className='p-8  lg:p-0'>
                            <a href="#" className="text-white text-xl hover:text-gray-100 px-3 py-2 rounded-md text-lg lg:text-base">FAQ</a>
                        </li>
                        <li className='p-8 lg:p-2 flex justify-center items-center'>
                            <ButtonDefault name='ACESSAR' className='bg-[#F6281B] hover:bg-[#004AAD] text-white text-xl w-3/4 h-20 rounded-full lg:w-28 lg:h-12 lg:bg-[#F6281B]' />
                        </li>
                        <div className='w-full h-2 bg-[#004AAD] lg:hidden'></div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

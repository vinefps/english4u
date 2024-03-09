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
        <nav className="flex flex-row fixed z-10 bg-green-400 w-screen">
            <div className="flex justify-between w-full h-32 relative ">
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
                    <div className="flex justify-end items-center h-32" onClick={showMenu}>
                        <Image
                            className="cursor-pointer mr-8 h-20"
                            width={70}
                            height={25}
                            src="/menu.svg"
                            alt="Menu"
                            priority
                        />
                    </div>
                </div>
                <div className={`w-full absolute top-32 bg-green-800 ${menubar ? 'block' : 'hidden'} lg:max-xl:w-2/3 2xl:3/4 lg:block lg:static lg:max-xl:bg-green-400 2xl:bg-green-800`}>
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
                        <li className='p-8 lg:p-2'>
                            <ButtonDefault name='ACESSAR' className='bg-green-400 text-white text-xl w-3/4 h-20 rounded-full lg:w-28 lg:h-12 lg:bg-green-800' />
                        </li>
                        <div className='w-full h-2 bg-green-400 lg:hidden'></div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

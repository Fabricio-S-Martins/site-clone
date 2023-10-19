import { useEffect, useState } from "react";
import logo from '../../../public/images/logo-maxi-589a6d86.png'
import logoVermelho from '../../../public/images/logoVermelho.png'

export const Header: React.FC = () => {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [showHamburger, setShowHumburger] = useState(false);
    const [btnHamburger, setbtnHamburger] = useState(false);
    const [btnSearch, setBtnSearch] = useState(false);

    const handdleBtnHamburger = () => {
        setbtnHamburger(!btnHamburger);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setShowHumburger(true);
            } else {
                setShowHumburger(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setShowHumburger]);


  useEffect(() => {
    function onScroll() {
      let currentPosition = window.scrollY; 
      if (currentPosition > scrollTop) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

    return (
        <div className={`fixed w-full xl:px-56 py-2 transition-colors duration-300 ease-linear z-50 ${!scrolling && 'bg-white/70 backdrop-blur-2xl py-0 shadow-2xl'}`}>
            <div className={`flex gap-4 w-full py-5 items-center md:text-lg ${!scrolling ?'text-gray-400' : 'text-white'}`}>
                <div className={`${showHamburger ? 'w-3/5 order-2' : 'w-1/5 order-1'} flex justify-center`}>
                    <img src={scrolling ? logo.src : logoVermelho.src} className={`${showHamburger ? 'w-2/5 md:w-1/5' : 'w-3/5'}`} />
                </div>

                <div className={`flex ${showHamburger ? 'justify-center w-1/5 order-1' : 'justify-around w-8/12 order-2'}`}>
                    {showHamburger ?
                        <div className="flex flex-col gap-1 py-1 cursor-pointer" onClick={handdleBtnHamburger}>
                            <span className="w-6 h-[3px] bg-gray-500"></span>
                            <span className="w-6 h-[3px] bg-gray-500"></span>
                            <span className="w-3 h-[3px] bg-gray-500"></span>
                        </div>
                        :
                        <div className="flex justify-around xl:justify-center items-center 2xl:gap-8 w-full">
                            <span className={`borderAnimation ${!scrolling ?'before:hover:border-red-500' : 'before:hover:border-white'}`}>Quem somos</span>
                            <span className={`borderAnimation ${!scrolling ?'before:hover:border-red-500' : 'before:hover:border-white'}`}>Seguros</span>
                            <span className={`borderAnimation ${!scrolling ?'before:hover:border-red-500' : 'before:hover:border-white'}`}>Assistências</span>
                            <span className={`borderAnimation ${!scrolling ?'before:hover:border-red-500' : 'before:hover:border-white'}`}>Blog</span>
                            <span className={`borderAnimation ${!scrolling ?'before:hover:border-red-500' : 'before:hover:border-white'}`}>Fale Conosco</span>
                        </div>
                    }
                </div>

                <div className="flex justify-center w-1/5 order-3 cursor-pointer" onClick={() => setBtnSearch(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>

            </div>
            {btnHamburger &&
                <div className="flex flex-col w-full p-5 bg-gray-100 text-gray-600">
                    <span className="border-b-2 border-gray-400/30 py-1">Quem somos</span>
                    <span className="border-b-2 border-gray-400/30 py-1">Seguros</span>
                    <span className="border-b-2 border-gray-400/30 py-1">Assistências</span>
                    <span className="border-b-2 border-gray-400/30 py-1">Blog</span>
                    <span className="border-b-2 border-gray-400/30 py-1">Fale Conosco</span>
                </div>
            }
            {btnSearch &&
                <div className="fixed top-0 left-0 right-0 xl:px-56">
                    <div className="flex justify-center bg-white px-10 lg:px-52 py-10">
                        <input className="w-full h-10 outline-none border-b-2 border-red-600 text-black placeholder:text-black placeholder:font-bold placeholder:text-2xl" type="text" placeholder="Digite..." />
                        <div className="cursor-pointer " onClick={() => setBtnSearch(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="-ml-8 w-6 h-6 stroke-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
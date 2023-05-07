"use client"
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let iconStyles = { fontSize: "1.5em" };

    return (
        <nav
            className={`${scrollPosition > 1 ? "" : "bg-transparent"
                }  top-0 2xl:top-10 z-50 w-full absolute `}
        >
            <div className="mx-5 py-2  ">
                <div className="flex justify-center  lg:ml-64 md:ml-32  relative">
                    <div className="flex items-center">
                    </div>
                    <div className="flex md:hidden items-center absolute right-0 ">
                        <button onClick={toggleMenu} className={`${isOpen ? "hidden" : " "
                            } `} >
                            < img src="toggle.png" className={`${scrollPosition > 1 ? "bg-[#1E1E1E]" : ""
                                } text-2xl w-6 font-bold`} />
                        </button>
                    </div>
                    <div
                        className={`${isOpen ? "block" : "hidden"
                            }  `}
                    >
                        <div className="bg-[#1E1E1E] h-[130%] absolute mt-[-28%]  px-36 w-auto rounded-[40px]  mx-[-69px] inset-10   lg:hidden md:hidden block">
                            <img src="toggle.svg" className="toggle inset-10 h-96 m-auto w-40" />
                        </div>
                    </div>
                    <div
                        className={`${isOpen ? "block" : "hidden"
                            } md:flex md:justify-end z-20 pl-[-30%] text-center inset-10  text-2xl  `}
                    >
                        <div className="flex items-center absolute  right-0 md:hidden">
                            <button onClick={toggleMenu} className={`${isOpen ? "" : " hidden"
                                } `} >
                                < RxCross2 className={`${scrollPosition > 1 ? "text-white" : ""
                                    } lg:text-2xl   font-bold border-2 rounded-lg`} />
                            </button>
                        </div>
                        <a href="#home">
                            <a
                                className={`${scrollPosition > 1 ? "text-white" : ""
                                    } block lg:inline-block md:text-xs md:mt-[-220%] 2xl:text-xl  pt-28 lg:mt-[-230%]  mr-4`}
                                onClick={toggleMenu}
                            >
                                Home
                            </a>
                            <div
                                className={`${isOpen ? "block" : "hidden"
                                    }`}
                            >  <hr className="w-[14rem] ml-2   lg:hidden md:hidden block my-3  border-1  " /></div>
                        </a>

                        <a href="#about" >
                            <a
                                className={`${scrollPosition > 1 ? "text-white" : ""
                                    } block lg:inline-block md:text-xs 2xl:text-xl xl:ml-10  lg:mt-0 mt-3`}
                                onClick={toggleMenu}
                            >
                                Features
                            </a>
                            <div
                                className={`${isOpen ? "block" : "hidden"
                                    }`}
                            >  <hr className="w-[14rem] ml-2   lg:hidden md:hidden  block my-3  border-1 " /></div>
                        </a>

                        <a href="#services">
                            <a
                                className={`${scrollPosition > 1 ? "text-white" : ""
                                    } block lg:inline-block md:text-xs ml-5 2xl:text-xl xl:ml-10  lg:mt-0 mt-3 mr-4`}
                                onClick={toggleMenu}
                            >
                                Services
                            </a>
                            <div
                                className={`${isOpen ? "block" : "hidden"
                                    }`}
                            >  <hr className="w-[14rem] ml-2   lg:hidden md:hidden  block my-3  border-" /></div>
                        </a>

                        <a href="#summary">
                            <a
                                className={`${scrollPosition > 1 ? "text-white" : ""
                                    } block lg:inline-block  md:text-xs 2xl:text-xl xl:ml-10  lg:mt-0 mt-3 mr-4`}
                                onClick={toggleMenu}
                            >
                                Reviews
                            </a>
                            <div
                                className={`${isOpen ? "block" : "hidden"
                                    }`}
                            >  <hr className="w-[14rem] ml-2   lg:hidden  md:hidden  block my-3 bborder " /></div>
                        </a>
                        <a href="#grid" className="">
                            <a
                                className={`${scrollPosition > 1 ? "text-white" : ""
                                    } block lg:inline-block md:text-xs 2xl:text-xl xl:ml-10  lg:mt-0 mt-3 mr-4`}
                                onClick={toggleMenu}
                            >
                                Contact Us
                            </a>
                            <div
                                className={`${isOpen ? "block" : "hidden"
                                    }`}
                            >  <hr className="w-[14rem] ml-2   md:hidden   lg:hidden block my-3  border-1 " /></div>
                        </a>
                        <a href="#test" className="">
                            <a
                                className={`${scrollPosition > 1 ? "text-white" : ""
                                    } block lg:inline-block md:text-xs 2xl:text-xl xl:ml-10  lg:mt-0 mt-3 mr-4`}
                                onClick={toggleMenu}
                            >
                                About Us
                            </a>
                            <div
                                className={`${isOpen ? "block" : "hidden"
                                    }`}
                            >  <hr className="w-[14rem] ml-2   md:hidden  lg:hidden block my-3 border-1 " /></div>
                        </a>

                        <div className="button w-28 2xl:w-48 xl:w-32 xl:h-10 2xl:h-12 2xl:text-xl 2xl:pt-2 xl:pt-2 text-[50%] mt-20 py-1 m-auto lg:ml-44 lg:mt-1 md:mt-1 md:ml-14 xl:ml-60 2xl:ml-60 md:w-28  md:text-xs">
                            <button>How it Works</button>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

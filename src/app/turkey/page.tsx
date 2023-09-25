
'use client'
import { AiOutlineDown } from 'react-icons/ai';

import { RiComputerLine } from 'react-icons/ri';

import { Carousel } from 'react-responsive-carousel';

import DemoCarousel from "../common/crousels";
export default function turkeyform() {

    return (
        <div className='bg-[#e9e9e9]'>
            <div className="bg-[url('/img/header-bg-image.png')] h-20 bg-no-repeat  ">

                <div className="flex   justify-between mx-8">
                    <div className=" flex items-start justify-start">
                        <div>
                            <img src="img/logo_en.png" alt="" /> </div>

                    </div>
                    <div className="group my-auto flex flex-col">
                        <button className="text-white border border-white w-150 h-auto px-3 py-2 mt-3 flex"> English <AiOutlineDown className="mt-1 mr-2 group-hover:rotate-180	 font-bold text-xl" /></button>
                        <div className=" hidden w-150 h-auto bg-white mt-1 group-hover:block z-50">
                            <ul className="mx-3 px-3">
                                <li>English</li>
                                <li>Hindi</li>
                                <li>Bengali</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="absolute  right-[100px] bg-black bottom-[100px] text-white p-3 text-3xl z-50">In 3  Steps your e-Visa is ready!</span>

                <div >
                    <div className="absolute w-[200px] h-auto top-20  left-[100px] bg-blue-600 opacity-[0.5]  text-white py-2 px-1 text-xl z-50">Get Information</div>
                    <div className="absolute w-[200px] h-auto top-[130px]  left-[100px] bg-red-600 opacity-[0.5]  text-white py-2 px-1 text-xl z-50">Apply Now</div>
                    <DemoCarousel />
                </div>

            </div>
            <div className="grid grid-cols-3  mx-10 justify-normal ">

                <div className="relative -top-[50px]  mx-5">
                    <div className=" group cursor-pointer bg-white  ">
                        <div className="bg-[#d8e2e4] border-2  border-white">
                            <p className="text-3xl  py-4 text-center  "> #1 Apply Now </p></div>

                        <div className="bg-white h-auto w-auto hidden   group-hover:block  Hover:flex flex-col ">

                            <div className="flex justify-center  items-center  mx-3  p-3 mt-5 ">  <RiComputerLine className="text-5xl  text-blue-700 " /> </div>
                            <p className="p-4 mx-1 my-5">You can proceed with e-Visa application by providing requested information.</p>
                        </div>
                    </div>

                </div>

                <div className="relative -top-[50px]  mx-5 ">
                    <div className=" group cursor-pointer w-auto h-auto border-2  border-white  bg-gradient-to-r from-[#d3c5ba] to-[#d8bdac]  shadow">
                        <p className="text-3xl  py-4 text-center  "> #2 Apply Now </p>

                        <div className="bg-white h-auto w-auto hidden  group-hover:block ">
                            <div className="flex justify-center mx-3  p-3"><RiComputerLine className="text-5xl  text-blue-700 " /> </div>
                            <p className="p-4 mx-1">You can proceed with e-Visa application by providing requested information.</p>
                        </div>
                    </div>

                </div>
                <div className="relative -top-[50px]  mx-5">
                    <div className=" group cursor-pointer w-auto h-auto border-2  border-white bg-[#d8e2e4]">
                        <p className="text-3xl  py-4 text-center  "> #1 Apply Now </p>

                        <div className="bg-white h-auto w-auto hidden  group-hover:block ">
                            <div className="flex justify-center mx-3  p-3"><RiComputerLine className="text-5xl  text-blue-700 " /> </div>
                            <p className="p-4 mx-1">You can proceed with e-Visa application by providing requested information.</p>
                        </div>
                    </div>

                </div>

            </div>


            {/* footer start */}



            <footer className="w-full shadow-2xl shadow-[black] mt-10">
                <div className='grid grid-cols-4 bg-[#e9e9e9]   mx-6'>
                    <div className='mx-auto space-y-2 flex flex-col items-center justify-center my-5'>
                        <a href="" className="text-xl text-black"> Application </a>
                        <a href="" className="text-lg text-[#7c7c7c]"> Application </a>
                        <a href="" className="text-lg text-[#7c7c7c]"> Application </a>

                    </div>
                </div>

                <div className=" flex justify-center  font-serif p-2 bg-white">
                    <p className="text-center">Copy Right @2034</p>
                </div>
            </footer>



        </div>

    );
}
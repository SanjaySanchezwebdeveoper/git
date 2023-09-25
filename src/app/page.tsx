import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiHome } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import { FaLocation } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { FaBed } from 'react-icons/fa';
export default function Home() {
  const Wrapper = ({ className, children }) => {

    return (<div className={`w-full mx-4 bg-white ${className}`}>
      {children}

    </div>)
  }
  return (
    <main className="flex min-h-screen flex-col bg-[#fff9f9] mx-1 md:mx-5">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 md:p-2 md:m-10 fixed  w-full md:w-11/12">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='flex  flex-col md:flex-row'>
        <div className='hero-banner order-2 md:order-1'>
          <div className='first-content md:mt-[150px] mx-10'>
            <h1 className='bold text-black text-4xl font-bold mt-8 md:text-[60px] md:tracking-[3px] md:leading-[4rem]'>Find A <strong> Perfect Home </strong> To Live With Your Family</h1>
            <p className='text-xl mt-8'>
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p>
            <button className=' my-5 bg-green-500 hover:bg-blue-400 text-white font-bold py-3 px-8 border-b-4 border-white hover:border-white-500 rounded'> Get Started</button>

          </div>



        </div>
        <div className='hero-banner grid grid-col-8 order-1 md:order-2	 '>

          <div className=''>
            <img className='object-none h-800 w-500' src="img/carousel-2.jpg" alt="" />

          </div>
        </div>
      </div>
      <div className="w-full ">

        {/* start property type section */}

        <div className='h-auto w-full  flex flex-col bg-white'>
          <div className=' items-center flex flex-col my-[30px] mx-[15px] md:mx-[200px]'>
            <p className='text-black  text-2xl md:text-4xl font-bold md:my-5'> Property Type </p>
            <p className="mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nulla reiciendis quisquam voluptatum quibusdam odit consequuntur adipisci asperiores at provident facilis tempora, incidunt recusandae hic dignissimos quae. Labore, recusandae facilis?</p>
          </div>

          <div className=' bg-white   md:mx-[50px] items-center justify-between grid grid-cols-1  md:grid-cols-4'>
            <div className='w-[280px] md:w-[250px] h-auto bg-green-50   mx-auto md:mx-1 rounded-2xl my-3'>
              <div className='mx-[20px] my-[20px] md:mx-[20px] md:my-[20px] rounded bg-white flex flex-col border border-green-700  border-dashed hover:bg-green-600 group '>
                <div className='flex flex-col md:m-5 items-center'>
                  <div className='item-center rounded-full bg-white w-[60px]  h-[60px]  border-2 border-green-500 border-dashed my-1'>
                    <AiOutlineHome className="text-4xl my-2 mx-auto" />
                  </div><p className='font-bold text-black  group-hover:text-white text-xl'>Apartment</p>
                  <p className='font-bold text-green-400 text-sm tracking-wider group-hover:text-white '>123 propertise</p>
                </div>
              </div>
            </div>
            <div className='w-[280px] md:w-[250px] h-auto bg-green-50  mx-auto md:mx-1 rounded-2xl my-3 '>
              <div className='mx-[20px] my-[20px] md:mx-[20px] md:my-[20px] rounded bg-white flex flex-col border border-green-700  border-dashed hover:bg-green-600 group '>
                <div className='flex flex-col md:m-5 items-center'>
                  <div className='item-center rounded-full bg-white w-[60px]  h-[60px]  border-2 border-green-500 border-dashed my-1'>
                    <AiOutlineHome className="text-4xl my-2 mx-auto" />
                  </div><p className='font-bold text-black  group-hover:text-white text-xl'>Apartment</p>
                  <p className='font-bold text-green-400 text-sm tracking-wider group-hover:text-white '>123 propertise</p>
                </div>
              </div>
            </div>
            <div className='w-[280px] md:w-[250px] h-auto bg-green-50 mx-auto md:mx-1 rounded-2xl my-3 '>
              <div className='mx-[20px] my-[20px] md:mx-[20px] md:my-[20px] rounded bg-white flex flex-col border border-green-700  border-dashed hover:bg-green-600 group '>
                <div className='flex flex-col md:m-5 items-center'>
                  <div className='item-center rounded-full bg-white w-[60px]  h-[60px]  border-2 border-green-500 border-dashed my-1'>
                    <AiOutlineHome className="text-4xl my-2 mx-auto" />
                  </div><p className='font-bold text-black  group-hover:text-white text-xl'>Apartment</p>
                  <p className='font-bold text-green-400 text-sm tracking-wider group-hover:text-white '>123 propertise</p>
                </div>
              </div>
            </div>
            <div className='w-[280px] md:w-[250px] h-auto bg-green-50   mx-auto md:mx-1 rounded-2xl my-3'>
              <div className='mx-[20px] my-[20px] md:mx-[20px] md:my-[20px] rounded bg-white flex flex-col border border-green-700  border-dashed hover:bg-green-600 group '>
                <div className='flex flex-col md:m-5 items-center'>
                  <div className='item-center rounded-full bg-white w-[60px]  h-[60px]  border-2 border-green-500 border-dashed my-1'>
                    <AiOutlineHome className="text-4xl my-2 mx-auto" />
                  </div><p className='font-bold text-black  group-hover:text-white text-xl'>Apartment</p>
                  <p className='font-bold text-green-400 text-sm tracking-wider group-hover:text-white '>123 propertise</p>
                </div>
              </div>
            </div>
            <div className='w-[280px] md:w-[250px] h-auto bg-green-50  mx-auto md:mx-1 rounded-2xl my-3 '>
              <div className='mx-[20px] my-[20px] md:mx-[20px] md:my-[20px] rounded bg-white flex flex-col border border-green-700  border-dashed hover:bg-green-600 group '>
                <div className='flex flex-col md:m-5 items-center'>
                  <div className='item-center rounded-full bg-white w-[60px]  h-[60px]  border-2 border-green-500 border-dashed my-1'>
                    <AiOutlineHome className="text-4xl my-2 mx-auto" />
                  </div><p className='font-bold text-black  group-hover:text-white text-xl'>Apartment</p>
                  <p className='font-bold text-green-400 text-sm tracking-wider group-hover:text-white '>123 propertise</p>
                </div>
              </div>
            </div>
            <div className='w-[280px] md:w-[250px] h-auto bg-green-50  mx-auto md:mx-1 rounded-2xl my-3'>
              <div className='mx-[20px] my-[20px] md:mx-[20px] md:my-[20px] rounded bg-white flex flex-col border border-green-700  border-dashed hover:bg-green-600 group '>
                <div className='flex flex-col md:m-5 items-center'>
                  <div className='item-center rounded-full bg-white w-[60px]  h-[60px]  border-2 border-green-500 border-dashed my-1'>
                    <AiOutlineHome className="text-4xl my-2 mx-auto" />
                  </div><p className='font-bold text-black  group-hover:text-white text-xl'>Apartment</p>
                  <p className='font-bold text-green-400 text-sm tracking-wider group-hover:text-white '>123 propertise</p>
                </div>
              </div>
            </div>
            <div className='w-[280px] md:w-[250px] h-auto bg-green-50 mx-auto md:mx-1 rounded-2xl my-3 '>
              <div className='mx-[20px] my-[20px] md:mx-[20px] md:my-[20px] rounded bg-white flex flex-col border border-green-700  border-dashed hover:bg-green-600 group '>
                <div className='flex flex-col md:m-5 items-center'>
                  <div className='item-center rounded-full bg-white w-[60px]  h-[60px]  border-2 border-green-500 border-dashed my-1'>
                    <AiOutlineHome className="text-4xl my-2 mx-auto" />
                  </div><p className='font-bold text-black  group-hover:text-white text-xl'>Apartment</p>
                  <p className='font-bold text-green-400 text-sm tracking-wider group-hover:text-white '>123 propertise</p>
                </div>
              </div>
            </div>
            <div className='w-[280px] md:w-[250px] h-auto bg-green-50 mx-auto md:mx-1 rounded-2xl my-3'>
              <div className='mx-[20px] my-[20px] md:mx-[20px] md:my-[20px] rounded bg-white flex flex-col border border-green-700  border-dashed hover:bg-green-600 group '>
                <div className='flex flex-col md:m-5 items-center'>
                  <div className='item-center rounded-full bg-white w-[60px]  h-[60px]  border-2 border-green-500 border-dashed my-1'>
                    <AiOutlineHome className="text-4xl my-2 mx-auto" />
                  </div><p className='font-bold text-black  group-hover:text-white text-xl'>Apartment</p>
                  <p className='font-bold text-green-400 text-sm tracking-wider group-hover:text-white '>123 propertise</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div >


      {/* end property  type   section  */}

      {/* start find property card  */}

      <div className="bg-white">
        <div className="items-center  grid  grid-1 md:grid-cols-2 bg-white m-5">
          <div className="order-1 md:order-1 border-5 border-green-700  border-solid">
            <img className="" src="img/property-3.jpg" alt="propery -3" />

          </div>
          <div className="order-2 md:order-2 md:mx-[30px]">
            <div>
              <h1 className="text-[20px] md:text-[40px] font-bold text-indigo">#1 Place To Find The Perfect Property</h1>
              <div> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti iure, repudiandae quasi fugit neque harum ducimus alias earum ipsam rem esse accusamus aperiam culpa quam! Ab est facere ipsa modi?</div>
              <ul className="mt-3">
                <li className="flex items-center my-2"><FaCheck className="mr-1 text-green-700" />Tempor erat elitr rebum at clita</li>
                <li className="flex items-center my-2"><FaCheck className="mr-1 text-green-700" />Tempor erat elitr rebum at clita</li>
                <li className="flex items-center my-2"><FaCheck className="mr-1 text-green-700" />Tempor erat elitr rebum at clita</li>
                <li className="flex items-center my-2"><FaCheck className="mr-1 text-green-700" />Tempor erat elitr rebum at clita</li>
                <li className="flex items-center my-2"><FaCheck className="mr-1 text-green-700" />Tempor erat elitr rebum at clita</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end find property card  */}

      {/* property list start */}

      <Wrapper>
        <div className="flex flex-col">
          <div className="item-end mx-4  flex flex-col">
            <div>
              <p className="text-4xl font-bold my-2">Property Listing</p>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-[50%]">
                <p className="mx-auto ">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum</p></div>
              <div className="place-content-end mx-auto">
                <button className="bg-transparent hover:bg-green-800 text-black hover:text-white border border-1 border-green-700 font-semibold rounded px-5 py-2 mx-1"> Feature</button>
                <button className="bg-transparent hover:bg-green-800 text-black hover:text-white border border-1 border-green-700 font-semibold rounded px-5 py-2 mx-1"> For Sell</button>
                <button className="bg-transparent hover:bg-green-800 text-black hover:text-white border border-1 border-green-700 font-semibold rounded px-5 py-2 mx-1"> For Rent</button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="m-3 grid grid-cols-1  md:grid-cols-4">
              <div className="  bg-white-300 mx-1 shadow-lg">
                <div className="overflow-hidden ">
                  <div className="w-[100px] h-[30px] rounded  bg-green-300 text-white relative top-10 left-5 z-10 items-center flex "> <p className="mx-auto">For Sell</p></div>
                  <img className=" scale-100  duration-200	 hover:scale-110 " src="img/property-1.jpg" alt="gfhj" />
                  <div className="w-[150px] h-[40px] rounded  bg-white text-green-700 relative -top-4 left-8 z-10 items-center flex "> <p className="mx-auto text-xl px-3">Apartment</p></div>


                </div>
                <div className="mx-3">
                  <p className="font-bold text-2xl text-[green]">$12,345</p>
                  <p className="font-bold text-2xl text-[black]">Golden Urban House For Sell</p>
                  <div className=" flex"> <TiLocation className="text-green-700 text-2xl text-md " /> <p className="font-semibold text-md text-[grey] text-md text-lg"> 123 Street, New York, USA</p> </div>

                </div>
                <div className="border-t  border-green-300 border-dashed ">
                  <ul className="flex justify-between ">
                    <li className="border-r border-green-400 border-dashed p-2">1000 Sqft</li>
                    <li className="border-r border-green-400 border-dashed p-2 flex justify-between items-center "> <FaBed className="text-green-700 text-lg mr-3" />3 Bed</li>
                    <li className=" p-2">2 Bath</li>
                  </ul>


                </div>
              </div>
              <div className="  bg-white-300 mx-1 shadow-lg">
                <div className="overflow-hidden ">
                  <div className="w-[100px] h-[30px] rounded  bg-green-300 text-white relative top-10 left-5 z-10 items-center flex "> <p className="mx-auto">For Sell</p></div>
                  <img className=" scale-100  duration-200	 hover:scale-110 " src="img/property-1.jpg" alt="gfhj" />
                  <div className="w-[150px] h-[40px] rounded  bg-white text-green-700 relative -top-4 left-8 z-10 items-center flex "> <p className="mx-auto text-xl px-3">Apartment</p></div>


                </div>
                <div className="mx-3">
                  <p className="font-bold text-2xl text-[green]">$12,345</p>
                  <p className="font-bold text-2xl text-[black]">Golden Urban House For Sell</p>
                  <div className=" flex"> <TiLocation className="text-green-700 text-2xl text-md " /> <p className="font-semibold text-md text-[grey] text-md text-lg"> 123 Street, New York, USA</p> </div>

                </div>
                <div className="border-t  border-green-300 border-dashed ">
                  <ul className="flex justify-between ">
                    <li className="border-r border-green-400 border-dashed p-2">1000 Sqft</li>
                    <li className="border-r border-green-400 border-dashed p-2 flex justify-between items-center "> <FaBed className="text-green-700 text-lg mr-3" />3 Bed</li>
                    <li className=" p-2">2 Bath</li>
                  </ul>


                </div>
              </div>
              <div className="  bg-white-300 mx-1 shadow-lg">
                <div className="overflow-hidden ">
                  <div className="w-[100px] h-[30px] rounded  bg-green-300 text-white relative top-10 left-5 z-10 items-center flex "> <p className="mx-auto">For Sell</p></div>
                  <img className=" scale-100  duration-200	 hover:scale-110 " src="img/property-1.jpg" alt="gfhj" />
                  <div className="w-[150px] h-[40px] rounded  bg-white text-green-700 relative -top-4 left-8 z-10 items-center flex "> <p className="mx-auto text-xl px-3">Apartment</p></div>


                </div>
                <div className="mx-3">
                  <p className="font-bold text-2xl text-[green]">$12,345</p>
                  <p className="font-bold text-2xl text-[black]">Golden Urban House For Sell</p>
                  <div className=" flex"> <TiLocation className="text-green-700 text-2xl text-md " /> <p className="font-semibold text-md text-[grey] text-md text-lg"> 123 Street, New York, USA</p> </div>

                </div>
                <div className="border-t  border-green-300 border-dashed ">
                  <ul className="flex justify-between ">
                    <li className="border-r border-green-400 border-dashed p-2">1000 Sqft</li>
                    <li className="border-r border-green-400 border-dashed p-2 flex justify-between items-center "> <FaBed className="text-green-700 text-lg mr-3" />3 Bed</li>
                    <li className=" p-2">2 Bath</li>
                  </ul>


                </div>
              </div>
              <div className="  bg-white-300 mx-1 shadow-lg">
                <div className="overflow-hidden ">
                  <div className="w-[100px] h-[30px] rounded  bg-green-300 text-white relative top-10 left-5 z-10 items-center flex "> <p className="mx-auto">For Sell</p></div>
                  <img className=" scale-100  duration-200	 hover:scale-110 " src="img/property-1.jpg" alt="gfhj" />
                  <div className="w-[150px] h-[40px] rounded  bg-white text-green-700 relative -top-4 left-8 z-10 items-center flex "> <p className="mx-auto text-xl px-3">Apartment</p></div>


                </div>
                <div className="mx-3">
                  <p className="font-bold text-2xl text-[green]">$12,345</p>
                  <p className="font-bold text-2xl text-[black]">Golden Urban House For Sell</p>
                  <div className=" flex"> <TiLocation className="text-green-700 text-2xl text-md " /> <p className="font-semibold text-md text-[grey] text-md text-lg"> 123 Street, New York, USA</p> </div>

                </div>
                <div className="border-t  border-green-300 border-dashed ">
                  <ul className="flex justify-between ">
                    <li className="border-r border-green-400 border-dashed p-2">1000 Sqft</li>
                    <li className="border-r border-green-400 border-dashed p-2 flex justify-between items-center "> <FaBed className="text-green-700 text-lg mr-3" />3 Bed</li>
                    <li className=" p-2">2 Bath</li>
                  </ul>


                </div>
              </div>
              <div className="  bg-white-300 mx-1 shadow-lg">
                <div className="overflow-hidden ">
                  <div className="w-[100px] h-[30px] rounded  bg-green-300 text-white relative top-10 left-5 z-10 items-center flex "> <p className="mx-auto">For Sell</p></div>
                  <img className=" scale-100  duration-200	 hover:scale-110 " src="img/property-1.jpg" alt="gfhj" />
                  <div className="w-[150px] h-[40px] rounded  bg-white text-green-700 relative -top-4 left-8 z-10 items-center flex "> <p className="mx-auto text-xl px-3">Apartment</p></div>


                </div>
                <div className="mx-3">
                  <p className="font-bold text-2xl text-[green]">$12,345</p>
                  <p className="font-bold text-2xl text-[black]">Golden Urban House For Sell</p>
                  <div className=" flex"> <TiLocation className="text-green-700 text-2xl text-md " /> <p className="font-semibold text-md text-[grey] text-md text-lg"> 123 Street, New York, USA</p> </div>

                </div>
                <div className="border-t  border-green-300 border-dashed ">
                  <ul className="flex justify-between ">
                    <li className="border-r border-green-400 border-dashed p-2">1000 Sqft</li>
                    <li className="border-r border-green-400 border-dashed p-2 flex justify-between items-center "> <FaBed className="text-green-700 text-lg mr-3" />3 Bed</li>
                    <li className=" p-2">2 Bath</li>
                  </ul>


                </div>
              </div>
              <div className="  bg-white-300 mx-1 shadow-lg">
                <div className="overflow-hidden ">
                  <div className="w-[100px] h-[30px] rounded  bg-green-300 text-white relative top-10 left-5 z-10 items-center flex "> <p className="mx-auto">For Sell</p></div>
                  <img className=" scale-100  duration-200	 hover:scale-110 " src="img/property-1.jpg" alt="gfhj" />
                  <div className="w-[150px] h-[40px] rounded  bg-white text-green-700 relative -top-4 left-8 z-10 items-center flex "> <p className="mx-auto text-xl px-3">Apartment</p></div>


                </div>
                <div className="mx-3">
                  <p className="font-bold text-2xl text-[green]">$12,345</p>
                  <p className="font-bold text-2xl text-[black]">Golden Urban House For Sell</p>
                  <div className=" flex"> <TiLocation className="text-green-700 text-2xl text-md " /> <p className="font-semibold text-md text-[grey] text-md text-lg"> 123 Street, New York, USA</p> </div>

                </div>
                <div className="border-t  border-green-300 border-dashed ">
                  <ul className="flex justify-between ">
                    <li className="border-r border-green-400 border-dashed p-2">1000 Sqft</li>
                    <li className="border-r border-green-400 border-dashed p-2 flex justify-between items-center "> <FaBed className="text-green-700 text-lg mr-3" />3 Bed</li>
                    <li className=" p-2">2 Bath</li>
                  </ul>


                </div>
              </div>
              <div className="  bg-white-300 mx-1 shadow-lg">
                <div className="overflow-hidden ">
                  <div className="w-[100px] h-[30px] rounded  bg-green-300 text-white relative top-10 left-5 z-10 items-center flex "> <p className="mx-auto">For Sell</p></div>
                  <img className=" scale-100  duration-200	 hover:scale-110 " src="img/property-1.jpg" alt="gfhj" />
                  <div className="w-[150px] h-[40px] rounded  bg-white text-green-700 relative -top-4 left-8 z-10 items-center flex "> <p className="mx-auto text-xl px-3">Apartment</p></div>


                </div>
                <div className="mx-3">
                  <p className="font-bold text-2xl text-[green]">$12,345</p>
                  <p className="font-bold text-2xl text-[black]">Golden Urban House For Sell</p>
                  <div className=" flex"> <TiLocation className="text-green-700 text-2xl text-md " /> <p className="font-semibold text-md text-[grey] text-md text-lg"> 123 Street, New York, USA</p> </div>

                </div>
                <div className="border-t  border-green-300 border-dashed ">
                  <ul className="flex justify-between ">
                    <li className="border-r border-green-400 border-dashed p-2">1000 Sqft</li>
                    <li className="border-r border-green-400 border-dashed p-2 flex justify-between items-center "> <FaBed className="text-green-700 text-lg mr-3" />3 Bed</li>
                    <li className=" p-2">2 Bath</li>
                  </ul>


                </div>
              </div>




            </div>

          </div>
        </div>
      </Wrapper>



      {/* property list end */}






    </main >
  )
}

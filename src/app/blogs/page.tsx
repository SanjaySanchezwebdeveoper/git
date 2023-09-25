import { BiHomeAlt2 } from "react-icons/bi";
import { BsFolder } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaUserPlus, FaSearch, FaPinterest, FaYoutube } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Customcarousel from ".././common/customcarousel";
import RecentItem from "./common/recentblogs";
import Footer from "./common/footer";




export default function Blogs() {


    return (<div className=""> {/* nav bar section start */}

        <nav className="bg-white flex  flex-wrap shadow-lg">
            <div className="my-3 font-bold  flex items-center ml-3">
                <h3 className="text-2xl">MyBlogs</h3>
            </div>
            <div className="mx-5 my-3 flex flex-wrap items-center  space-x-3 font-semibold p-1">
                <a href="" className="uppercase hover:text-blue-500 transition"> Home </a>
                <a href="" className="uppercase hover:text-blue-500 transition"> category </a>
                <a href="" className="uppercase hover:text-blue-500 transition"> blogs </a>
                <a href="" className="uppercase hover:text-blue-500 transition"> about us </a>
                <a href="" className="uppercase hover:text-blue-500 transition"> contact us </a>
            </div>
            <div className="flex items-center shadow-md rounded-full ml-auto mr-5 h-10 my-3">
                <FaSearch className="mx-2" />
                <input type="text" className="outline-none focus:outline-none bg-transparent" placeholder="Search" />
            </div>
            <div className="my-3 flex item-center ">
                <a href="" className="flex items-center font-semibold hover:text-blue-700 transition p-1 mr-3">
                    <FaUserPlus className="mr-1 " /> Login/Register
                </a>
            </div>
        </nav> {/* nav bar section end */} {/* start main content section */} <div className="flex  space-x-2 my-4 mx-[100px]">
            <div className="w-3/12 flex-col">
                <div className="flex flex-col space-y-1 uppercase  pb-5 rounded bg-white">
                    <h3 className="font-bold mx-5 text-black">Category</h3>
                    <a href="" className="flex items-center  font-semibold mx-4 hover:text-blue-500 hover:border-l-[5px] border-indigo-600  transition text-gray-500">
                        <BsFolder className="mr-2" /> Beauti <span className="ml-auto">(10)</span>
                    </a>
                    <a href="" className="flex items-center  font-semibold mx-4 hover:text-blue-500 transition text-gray-500">
                        <BsFolder className="mr-2" /> Beauti <span className="ml-auto">(10)</span>
                    </a>
                    <a href="" className="flex items-center  font-semibold mx-4 hover:text-blue-500 transition text-gray-500">
                        <BsFolder className="mr-2" /> Beauti <span className="ml-auto">(10)</span>
                    </a>
                    <a href="" className="flex items-center  font-semibold mx-4 hover:text-blue-500 transition text-gray-500">
                        <BsFolder className="mr-2" /> Beauti <span className="ml-auto">(10)</span>
                    </a>
                    <a href="" className="flex items-center  font-semibold mx-4 hover:text-blue-500 transition text-gray-500">
                        <BsFolder className="mr-2" /> Beauti <span className="ml-auto">(10)</span>
                    </a>
                    <a href="" className="flex items-center  font-semibold mx-4 hover:text-blue-500 transition text-gray-500">
                        <BsFolder className="mr-2" /> Beauti <span className="ml-auto">(10)</span>
                    </a>
                    <a href="" className="flex items-center  font-semibold mx-4 hover:text-blue-500 transition text-gray-500">
                        <BsFolder className="mr-2" /> Beauti <span className="ml-auto">(10)</span>
                    </a>

                </div>
                <div className="bg-white my-3 flex flex-col">
                    <div className="mx-2 my-1">
                        <h3 className="font-bold text-black ">Random Post</h3>
                    </div>
                    <RecentItem src="img/property-3.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-2.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-1.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-4.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-5.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-6.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-1.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />


                </div>
                <div className="fle flex-col bg-white  my-2 p-2 space-x-3">
                    <h3 className="font-bold mx-5 text-black">Youtube</h3>
                    <a href="" className="flex mx-2 my-1 overflow-hidden group ">
                        <iframe className="flex mx-2 my-1 overflow-hidden group " src="https://www.youtube.com/embed/8jWJjBs0wls?si=8rev2kk4d9U2SZWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className="flex flex-col">
                            <span className="mx-2 font-bold text-black text-[15px] leading-[15px] group-hover:text-blue-400 transition">Title for the Post of first random blogs </span>
                            <span className="mx-2 font-bold text-gray-700 text-[12px]">08 Sept 2023</span>
                        </div>
                    </a>

                    <a href="" className="flex mx-2 my-1 overflow-hidden group ">
                        <iframe className="flex mx-2 my-1 overflow-hidden group " src="https://www.youtube.com/embed/8jWJjBs0wls?si=8rev2kk4d9U2SZWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className="flex flex-col">
                            <span className="mx-2 font-bold text-black text-[15px] leading-[15px] group-hover:text-blue-400 transition">Title for the Post of first random blogs </span>
                            <span className="mx-2 font-bold text-gray-700 text-[12px]">08 Sept 2023</span>
                        </div>
                    </a>


                </div>
            </div>
            <div className="w-6/12 flex flex-col  ">
                <div className="bg-white mx-3 my-1 flex items-center justify-between">
                    <h5 className="p-3 text-black font-semibold">BUSINESS</h5>
                    <a href="" className="uppercase p-1 mx-2 my-1 bg-blue-700 text-white font-semibold rounded">See More</a>
                </div>

                <div className="bg-white mx-3 my-2 flex flex-col group items-stretch">
                    <div className="overflow-hidden">
                        <img src="img/property-1.jpg" alt="random" className="object-cover w-full h-45  group-hover:scale-110 transition duration-500 rounded" /></div>
                    <div className="mx-3 my-1 flex flex-col py-2 ">
                        <h3 className="font-bold text-black text-2xl"> Lorem, ipsum dolor sit amet consectetur adipisicing </h3>
                        <p className="text-gray-500 text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sunt tenetur alias animi obcaecati deleniti fugit dignissimos, cupiditate accusantium itaque adipisci consequuntur numquam velit quaerat dolorum nobis iste necessitatibus impedit.</p></div>
                </div>
                <div className=" my-2 grid grid-cols-2">

                    <div className="bg-white mx-1 my-2 flex flex-col group">
                        <div className="overflow-hidden"><img src="img/property-2.jpg" alt="random" className="object-cover  group-hover:scale-110 transition duration-500 rounded" /></div>
                        <div className="mx-3 my-1 flex flex-col py-2 ">
                            <h3 className="font-bold text-black text-md"> Lorem, ipsum dolor sit amet consectetur adipisicing </h3>
                        </div>
                    </div>
                    <div className="bg-white mx-1 my-2 flex flex-col group">
                        <div className="overflow-hidden"><img src="img/property-3.jpg" alt="random" className="object-cover  group-hover:scale-110 transition duration-500 rounded" /></div>
                        <div className="mx-3 my-1 flex flex-col py-2 ">
                            <h3 className="font-bold text-black text-md"> Lorem, ipsum dolor sit amet consectetur adipisicing </h3>
                        </div>
                    </div>
                    <div className="bg-white mx-1 my-2 flex flex-col group">
                        <div className="overflow-hidden"><img src="img/property-4.jpg" alt="random" className="object-cover  group-hover:scale-110 transition duration-500 rounded" /></div>
                        <div className="mx-3 my-1 flex flex-col py-2 ">
                            <h3 className="font-bold text-black text-md"> Lorem, ipsum dolor sit amet consectetur adipisicing </h3>
                        </div>
                    </div>
                    <div className="bg-white mx-3 my-2 flex flex-col group">
                        <div className="overflow-hidden"><img src="img/property-5.jpg" alt="random" className="object-cover  group-hover:scale-110 transition duration-500 rounded" /></div>
                        <div className="mx-3 my-1 flex flex-col py-2 ">
                            <h3 className="font-bold text-black text-md"> Lorem, ipsum dolor sit amet consectetur adipisicing </h3>
                        </div>
                    </div>



                </div>


            </div>
            <div className="w-3/12 flex flex-col">

                <div className="bg-white mt-3 pb-3 ">
                    <h6 className=" text-black font-semibold mx-3  my-1 ">Social Links</h6>
                    <div className="flex items-center mx-3 my-1 space-x-2  ">
                        <a href="" className=" p-1 text-2xl  text-black font-semibold rounded"><FaFacebookSquare /></a>
                        <a href="" className=" p-1 text-2xl  text-black font-semibold rounded"><FaInstagram /></a>
                        <a href="" className=" p-1 text-2xl  text-black font-semibold rounded"><FaPinterest /></a>
                        <a href="" className=" p-1 text-2xl  text-black font-semibold rounded"><FaYoutube /></a>
                    </div>
                </div>
                <div className="bg-white my-3 flex flex-col pb-3">
                    <div className="mx-2 my-1">
                        <h3 className="font-bold text-black ">Recent Post</h3>
                    </div>
                    <RecentItem src="img/property-4.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-5.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-6.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-1.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                </div>


                <div className="bg-white  flex flex-col ">
                    <div className="mx-2 my-1">
                        <h3 className="font-bold text-black ">Tags</h3>
                    </div>
                    <div className="bg-white mt-3 flex flex-wrap pb-3 items-start mx-2 space-x-3 space-y-1">
                        <a href="" className="border border-gray-400  font-semibold shadow-lg text-sm rounded "> <span className="p-2">tag</span> </a>


                    </div>
                </div>
                <div className="bg-white mt-3 flex flex-col pb-3">
                    <div className="mx-2 my-1">
                        <h3 className="font-bold text-black ">Comparison</h3>
                    </div>
                    <RecentItem src="img/property-4.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-5.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-6.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-1.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                </div>

                <div className="bg-white mt-3 flex flex-col pb-3">
                    <div className="mx-2 my-1">
                        <h3 className="font-bold text-black "> UpComing</h3>
                    </div>
                    <RecentItem src="img/property-4.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-5.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-6.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                    <RecentItem src="img/property-1.jpg" title="Title for the Post of first random blogs" postAt="09 Sept 2023" />
                </div>

            </div>

        </div> {/* start main content section */}



        <Customcarousel title="Popular Comparisons" />
        <Customcarousel title="Latest Phone" />
        <Customcarousel title="Upcoming Phone" />



        <Footer />

    </div >);
}
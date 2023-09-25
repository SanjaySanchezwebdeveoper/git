import { FcClock } from "react-icons/fc";
export default function RecentItem({ href, title, src, postAt }) {

    return (<a href="" className="flex mx-2 my-1 overflow-hidden group ">
        <img src={src} alt="random" className="object-cover w-20 p h-auto group-hover:scale-110 transition duration-500" />
        <div className="flex flex-col">
            <span className="mx-2 font-bold text-black  text-[13px] leading-[15px] group-hover:text-blue-400 transition">{title} </span>

            <span className="mx-2 font-bold text-gray-500 text-[12px] flex items-center"> <FcClock className="mr-1  text-[15px]" /> {postAt}</span>
        </div>
    </a>)
}
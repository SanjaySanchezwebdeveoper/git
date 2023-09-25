'use client'
import { useState, useRef, useEffect } from 'react';
const Customcarousel = ({title}) => {

    var data = {
        "resources": [
          {
            "title": "Find me on Mastodon",
            "link": "https://indieweb.social/@kendalmintcode",
            "imageUrl": "img/property-4.jpg"
          },
          {
            "title": "Find me on Mastodon",
            "link": "https://indieweb.social/@kendalmintcode",
            "imageUrl": "img/property-3.jpg"
          },
          {
            "title": "Welcome to Ark Labs",
            "link": "https://ark-labs.co.uk",
            "imageUrl": "img/property-4.jpg"
          },
          {
            "title": "Some sort of third title",
            "link": "https://indieweb.social/@kendalmintcode",
            "imageUrl": "img/property-2.jpg"
          }, {
            "title": "Super item number the last",
            "link": "https://indieweb.social/@kendalmintcode",
            "imageUrl": "img/property-6.jpg"
          },
          {
            "title": "Super item number the last",
            "link": "https://indieweb.social/@kendalmintcode",
            "imageUrl": "img/property-3.jpg"
          }
        ]
      }
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {

    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {

    if (carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {

      setCurrentIndex((prevState) => prevState + 1);
    }


  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-3 mx-[100px] bg-white">
       <h5 className="mt-5 pt-3 pb-1 mx-2 text-black font-semibold"> {title} </h5>
    <div className="border-b-4 border-yellow-700  w-full"></div>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-black bg-white w-10 h-full text-center  hover:opacity-100 disabled:opacity-25  z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div ref={carousel} className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 h-64 snap-start"
              >
               <div className="bg-white mx-1 my-2 flex flex-col group w-[200px] ">
                    <div className="overflow-hidden"><img src={resource.imageUrl || ''} alt="random" className="object-cover  group-hover:scale-110 transition duration-500 rounded" /></div>
                    <div className="mx-3 my-1 flex flex-col py-2 ">
                        <h5 className="font-semibold text-black text-sm text-left">  {resource.title}</h5>
                             <p className='text-left font-semibold text-gray-500 text-[12px]'> orem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Customcarousel;
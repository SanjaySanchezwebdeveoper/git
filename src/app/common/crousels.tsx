import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { BiArrowBack } from 'react-icons/bi';

class DemoCarousel extends Component {
    render() {
        return (
            <>
                <Carousel

                    autoPlay={true}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    renderArrowPrev={(clickhandler, hasPrev) => (
                        <div
                            onClick={clickhandler}
                            className=" absolute right-[0px] md:left-[10px] top-[50%] w-[30px] md:w-[50px]
                        h-[30px] md:h-[50px] bg-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90 z-60"
                        >
                            <BiArrowBack className="text-sm md:text-lg" />
                        </div>

                    )}

                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-0 top-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                        </div>
                    )}
                >
                    <div>
                        <img className="aspect-auto object-cover h-[200px] md:h-[480px]" src="img/main_1.jpg" />
                    </div>
                    <div>
                        <img className="aspect-auto object-cover h-[480px]" src="img/main_2.jpg" />

                    </div>
                    <div>
                        <img className="aspect-auto object-cover h-[480px]" src="img/main_3.jpg" />

                    </div>
                    <div>
                        <img className="aspect-auto object-cover h-[480px]" src="img/main_4.jpg" />

                    </div>
                    <div>
                        <img className="aspect-auto object-cover h-[480px]" src="img/main_5.jpg" />

                    </div>
                    <div>
                        <img className="aspect-auto object-cover h-[480px]" src="img/main_6.jpg" />

                    </div>
                    <div>
                        <img className="aspect-auto object-cover h-[480px]" src="img/main_7.jpg" />

                    </div>

                </Carousel>
            </>

        );
    }
}

export default DemoCarousel;


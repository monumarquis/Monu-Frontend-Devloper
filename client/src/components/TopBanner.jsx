import React from 'react'
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
const TopBanner = () => {
    // const moverleft = () => {
    //     this.slider.slickPrev()
    // }
    // const moveright = () => {
    //     this.slider.slickNext()
    // }

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slider",
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    };
    return (
        <section>
             {/* <div className="slick-arrows flex flex-row " onClick={moverleft} >
                <div className="left-arrow  p-6 border-r-2 cursor-pointer bg-white">
                    <BsArrowLeft />
                </div>
                <div className="right-arrow p-6 ml-5 border-r-2 cursor-pointer bg-white " onClick={moveright}>
                    <BsArrowRight />
                </div>
            </div> */}
            <Slider {...settings}>
           
                <div>
                    <div className='banner-one ' >
                        <div className="content w-full sm:w-full md:2/6 md:px-0 px-6">
                            <p className='text-4xl font-extrabold' >Powerful Tagline for your product</p>
                            <p className='text-2xl font-medium'>Supporting statements for your products primary tagline</p>
                        </div>
                        <img src="https://bracketweb.com/treck-html/main-html/assets/images/backgrounds/slider-3-2.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div className='banner-one' >
                        <div className="content w-full sm:w-full md:2/6 md:px-0 px-6">
                            <p className='text-4xl font-extrabold' >Powerful Tagline for your product</p>
                            <p className='text-2xl font-medium'>Supporting statements for your products primary tagline</p>
                        </div>
                        <img src="https://bracketweb.com/treck-html/main-html/assets/images/backgrounds/slider-3-1.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div className='banner-one' >
                        <div className="content w-full sm:w-full md:2/6 md:px-0 px-6">
                            <p className='text-4xl font-extrabold' >Powerful Tagline for your product</p>
                            <p className='text-2xl font-medium'>Supporting statements for your products primary tagline</p>
                        </div>
                        <img src="https://bracketweb.com/treck-html/main-html/assets/images/backgrounds/slider-3-3.jpg" alt="" />
                    </div>
                </div>

            </Slider>
        </section >
    )
}

export default TopBanner
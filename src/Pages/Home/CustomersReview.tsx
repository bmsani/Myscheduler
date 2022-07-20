import React from 'react';
import ReactStars from 'react-stars'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomersReview = () => {
    const handleRating = {
        size: 20,
        value: 4,
        edit: false,

    }
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2 className='text-primary text-3xl text-center font-bold my-12'>Our Satisfied Customers</h2>

            <div className=' container mx-auto mb-12'>
                <Slider {...settings}>
                    <div>
                        <div className='"my-2 mx-1 max-w-lg  gap-3 rounded-md bg-white p-2 text-black shadow'>
                            <div className='flex pt-4 pl-4'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <h2 className='font-bold'>Nash potik</h2>
                                    <h3 className='text-sm'>CEO menopal</h3>
                                </div>
                            </div>
                            <div className='pl-4'>
                                <p className='mt-4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta.</p>

                                <div className='mt-2'>
                                    <div className="flex items-center gap-1">

                                        <ReactStars  {...handleRating} />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='"my-2 mx-1 max-w-lg  gap-3 rounded-md bg-white p-2 text-black shadow'>
                            <div className='flex pt-4 pl-4'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <h2 className='font-bold'>Nash potik</h2>
                                    <h3 className='text-sm'>CEO menopal</h3>
                                </div>
                            </div>
                            <div className='pl-4'>
                                <p className='mt-4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta.</p>

                                <div className='mt-2'>
                                    <div className="flex items-center gap-1">

                                        <ReactStars  {...handleRating} />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='"my-2 mx-1 max-w-lg  gap-3 rounded-md bg-white p-2 text-black shadow'>
                            <div className='flex pt-4 pl-4'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <h2 className='font-bold'>Nash potik</h2>
                                    <h3 className='text-sm'>CEO menopal</h3>
                                </div>
                            </div>
                            <div className='pl-4'>
                                <p className='mt-4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta.</p>

                                <div className='mt-2'>
                                    <div className="flex items-center gap-1">

                                        <ReactStars  {...handleRating} />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='"my-2 mx-1 max-w-lg  gap-3 rounded-md bg-white p-2 text-black shadow'>
                            <div className='flex pt-4 pl-4'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <h2 className='font-bold'>Nash potik</h2>
                                    <h3 className='text-sm'>CEO menopal</h3>
                                </div>
                            </div>
                            <div className='pl-4'>
                                <p className='mt-4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta.</p>

                                <div className='mt-2'>
                                    <div className="flex items-center gap-1">

                                        <ReactStars  {...handleRating} />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='"my-2 mx-1 max-w-lg  gap-3 rounded-md bg-white p-2 text-black shadow'>
                            <div className='flex pt-4 pl-4'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <h2 className='font-bold'>Nash potik</h2>
                                    <h3 className='text-sm'>CEO menopal</h3>
                                </div>
                            </div>
                            <div className='pl-4'>
                                <p className='mt-4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta.</p>

                                <div className='mt-2'>
                                    <div className="flex items-center gap-1">

                                        <ReactStars  {...handleRating} />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </Slider>
            </div>

            <div className='grid lg:grid-cols-3 gap-4 container mx-auto mb-12'>
                {/* <div className='"my-2 mx-1 max-w-lg  gap-3 rounded-md bg-white p-2 text-black shadow'>
                    <div className='flex pt-4 pl-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className='ml-4'>
                            <h2 className='font-bold'>Nash potik</h2>
                            <h3 className='text-sm'>CEO menopal</h3>
                        </div>
                    </div>
                    <div className='pl-4'>
                        <p className='mt-4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta.</p>

                        <div className='mt-2'>
                            <div className="flex items-center gap-1">

                                <ReactStars  {...handleRating} />

                            </div>
                        </div>
                    </div>

                </div> */}

                {/* <div className='"my-2 mx-1 max-w-lg  gap-3 rounded-md bg-white p-2 text-black shadow'>
                    <div className='flex pt-4 pl-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className='ml-4'>
                            <h2 className='font-bold'>Nash potik</h2>
                            <h3 className='text-sm'>CEO menopal</h3>
                        </div>
                    </div>
                    <div className='pl-4'>
                        <p className='mt-4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta.</p>

                        <div className='mt-2'>
                            <div className="flex items-center gap-1">

                                <ReactStars  {...handleRating} />

                            </div>
                        </div>
                    </div>

                </div> */}
                {/* <div className='"my-2 mx-1 max-w-lg  gap-3 rounded-md bg-white p-2 text-black shadow'>
                    <div className='flex pt-4 pl-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className='ml-4'>
                            <h2 className='font-bold'>Nash potik</h2>
                            <h3 className='text-sm'>CEO menopal</h3>
                        </div>
                    </div>
                    <div className='pl-4'>
                        <p className='mt-4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta.</p>

                        <div className='mt-2'>
                            <div className="flex items-center gap-1">

                                <ReactStars  {...handleRating} />

                            </div>
                        </div>
                    </div>

                </div> */}


            </div>
        </div >
    );
};

export default CustomersReview;
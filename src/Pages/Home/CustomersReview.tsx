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
        speed: 500,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                                        <img src="https://cdn-icons.flaticon.com/png/512/1785/premium/1785888.png?token=exp=1658301351~hmac=ddf039fe449e3be34908111d7f51886f" />
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
                                        <img src="https://cdn-icons.flaticon.com/png/512/1785/premium/1785896.png?token=exp=1658301322~hmac=67d668402b5cd5c94e34d405d18e2d2c" />
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
                                        <img src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1658301203~hmac=59d2474e74fbe0e6c106a0b15f369e0a" />
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
                                        <img src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" />
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
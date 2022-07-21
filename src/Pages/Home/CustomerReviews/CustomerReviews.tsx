import { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(data => data.json())
            .then(result => setReviews(result));

    }, [])

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
            <h2 className='text-primary text-3xl text-center font-bold mt-20'>Our Satisfied Customers</h2>

            <div className=' container mx-auto mb-12'>
                <Slider {...settings}>
                    {reviews.map((review: { name: string; picture: 'file'; rating: number; _review: string }) => (
                        <div>
                            <div className=' mx-1 max-w-lg rounded-md bg-white p-2 text-black shadow-lg m-5'>
                                <div className='flex pt-4 pl-4'>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={review.picture} alt="" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <h2 className='font-bold'>{review.name}</h2>
                                        <h3 className='text-sm'>CEO menopal</h3>
                                    </div>
                                </div>
                                <div className='pl-4'>
                                    <p className='mt-4 text-gray-700'>{review._review}</p>

                                    <div className='mt-2'>
                                        <div className="flex items-center gap-1">

                                            <ReactStars
                                                size={20}
                                                value={review.rating}
                                                edit={false}

                                            ></ReactStars>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    );
};

export default CustomerReviews;
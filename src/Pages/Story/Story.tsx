import React from 'react';
import Slider from 'react-slick';
import './Story.css';
import alca from '../../Utilities/companyLogo/alca.svg';
import impuls from '../../Utilities/companyLogo/impuls.svg';
import legos from '../../Utilities/companyLogo/legos.svg';
import summa from '../../Utilities/companyLogo/summa.svg';
import tesa from '../../Utilities/companyLogo/tesa.svg';
import uvex from '../../Utilities/companyLogo/uvex-1.svg';
import teaching from '../../Utilities/Image/teaching.jpg';
import class_icon from '../../Utilities/icon/class_icon.png';
import attendance from '../../Utilities/icon/attandance_icon.png';
import book from '../../Utilities/icon/book_icon.png';
import slot from '../../Utilities/icon/calender_icon.png';
const Story = () => {

    const settings = {

        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        // autoplaySpeed: 20,
        cssEase: "linear",
        pauseOnHover: false

    };
    return (
        <div className='pt-8'>
            <div className='px-12'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                        <div className="flex flex-col mt-12">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    Don’t get suffocated with
                                    <br className="hidden md:block" />
                                    overcrowded classes
                                </h2>
                            </div>
                            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                                Features
                            </p>
                            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                                <ul className="space-y-3">
                                    <li className="flex font-bold mb-8">
                                        <span className="mr-3">
                                            <img className='w-[40px]' src={class_icon} alt="" />
                                        </span>
                                        Class Booking
                                    </li>
                                    <li className="flex font-bold">
                                        <span className="mr-3">
                                            <img className='w-[40px]' src={attendance} alt="" />
                                        </span>
                                        Attendance
                                    </li>

                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex font-bold mb-8">
                                        <span className="mr-3">
                                            <img className='w-[40px]' src={slot} alt="" />
                                        </span>
                                        Show open slots
                                    </li>
                                    <li className="flex font-bold">
                                        <span className="mr-3">
                                            <img className='w-[40px]' src={book} alt="" />
                                        </span>
                                        Class packs
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-full h-40 rounded shadow-lg sm:h-96"
                                src={teaching}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center lg:text-3xl font-bold my-8 text-primary mb-16 md:text-2xl'>Trusted by more than <span className='text-blue-700'>50,000</span> of the world’s <br /> leading organizations</h1>
            <div className='container mx-auto md:px-9 sm:px-11'>
                <Slider {...settings}>
                    <div className=''>
                        <img className='lg:w-[120px] md:w-[120px] sm:w-[70px]' src={alca} alt="" />
                    </div>
                    <div>
                        <img className='w-[120px]' src={impuls} alt="" />
                    </div>
                    <div>
                        <img className='w-[120px]' src={legos} alt="" />
                    </div>
                    <div>
                        <img className='w-[120px]' src={summa} alt="" />
                    </div>
                    <div>
                        <img className='w-[120px]' src={tesa} alt="" />
                    </div>

                </Slider>
            </div>
            <div>
                <div className='my-8 mt-16'>
                    <h2 className='text-3xl font-bold text-primary text-center mb-4'>Popular customer Says..</h2>
                    <h2 className='text-xl font-bold text-light text-center'>Learn how My Schedular customers save time and drive revenue</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8 px-12 gap-x-4">
                    <div>
                        <div className="card w-11/12 bg-base-100 hover:drop-shadow-2xl">
                            <figure className="px-4 pt-10">
                                <img src={alca} alt="Shoes" className="rounded-xl w-[150px]" />
                            </figure>
                            <div className="card-body pt-0  ">
                                <h2 className="card-title text-center">Simple scheduling is an art form at the College for Creative Studies</h2>
                                <div className='text-right'>
                                    <p className='text-right font-bold mr-4 '>C.E.O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-11/12 bg-base-100 hover:drop-shadow-2xl">
                            <figure className="px-4 pt-10">
                                <img src={impuls} alt="Shoes" className="rounded-xl w-[150px]" />
                            </figure>
                            <div className="card-body pt-0  ">
                                <h2 className="card-title text-center">Smoother scheduling personalizes Hackbright Academy’s admissions</h2>
                                <div className='text-right'>
                                    <p className='text-right font-bold mr-4 '>C.E.O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-11/12 bg-base-100 hover:drop-shadow-2xl">
                            <figure className="px-4 pt-10">
                                <img src={legos} alt="Shoes" className="rounded-xl w-[150px]" />
                            </figure>
                            <div className="card-body pt-0  ">
                                <h2 className="card-title text-center">Better prospecting helps GeographicFarm tap into more clients</h2>
                                <div className='text-right'>
                                    <p className='text-right font-bold mr-4 '>C.E.O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-11/12 bg-base-100 hover:drop-shadow-2xl">
                            <figure className="px-4 pt-10">
                                <img src={summa} alt="Shoes" className="rounded-xl w-[150px]" />
                            </figure>
                            <div className="card-body pt-0  ">
                                <h2 className="card-title text-center">Smoother scheduling personalizes Hackbright Academy’s admissions</h2>
                                <div className='text-right'>
                                    <p className='text-right font-bold mr-4 '>C.E.O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-11/12 bg-base-100 hover:drop-shadow-2xl">
                            <figure className="px-4 pt-10">
                                <img src={tesa} alt="Shoes" className="rounded-xl w-[150px]" />
                            </figure>
                            <div className="card-body pt-0  ">
                                <h2 className="card-title text-center">Better prospecting helps GeographicFarm tap into more clients</h2>
                                <div className='text-right'>
                                    <p className='text-right font-bold mr-4 '>C.E.O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-11/12 bg-base-100 hover:drop-shadow-2xl">
                            <figure className="px-4 pt-10">
                                <img src={uvex} alt="Shoes" className="rounded-xl w-[150px]" />
                            </figure>
                            <div className="card-body pt-0  ">
                                <h2 className="card-title text-center">Simple scheduling is an art form at the College for Creative Studies</h2>
                                <div className='text-right'>
                                    <p className='text-right font-bold mr-4 '>C.E.O</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Story;
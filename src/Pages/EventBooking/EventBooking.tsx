import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../Utilities/icon/rightArrow.png';
const EventBooking = () => {
    return (
        <div>
            <div className='xl:mx-32 mt-16 mb-8 border shadow-xl'>
                <div>
                    <h2 className='text-center font-bold text-gray-600 mb-7 mt-4'>Event Booking</h2>
                    <p className='text-center mb-4'>Welcome to my scheduling page. Please <br /> follow the instructions to add an event to my <br /> calendar.</p>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 pb-8'>
                        <Link to="/bookingCalender">
                            <div className='xl:mx-20 sm:mx-2 md:mx-8 border-t hover:bg-gray-100 p-5 mt-5   h-[200px] '>
                                <div className='flex items-center'>
                                    <div className='rounded-full h-[22px] w-[24px] bg-slate-700 mr-3'>

                                    </div>
                                    <div className='flex justify-between items-center w-full'>
                                        <h2 className='text-xl font-bold'>30 minute meeting</h2>
                                        <img src={arrow} className="w-[18px]" alt="" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='flex items-end'>
                        {/* <h2>cooking</h2> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventBooking;
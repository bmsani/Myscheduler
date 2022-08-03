import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import clock from '../../Utilities/icon/clock.png';

const BookingCalender = () => {
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState('')
    return (
        <div>
            <div className='xl:mx-72 xl:mt-12 border'>
                <div className='grid xl:grid-cols-2 sm:grid-cols-1 mx-8 '>
                    <div className='xl:border-r sm:border-b '>
                        <h2 className='font-bold text-gray-500 mt-5'>Zehadul Islam</h2>
                        <h1 className='text-2xl font-bold'>30 Minute Meeting</h1>
                        <div className='flex mt-8'>
                            <img src={clock} className="w-[22px] mr-3" alt="" />
                            <h2 className='font-bold text-gray-500'>30 Minute</h2>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold   xl:ml-10 mt-5'>Select Date and Time</h2>
                        <div className='xl:ml-5 sm:ml-2'>
                            <DayPicker
                                mode="single"
                                selected={date}
                            // onSelect={setDate}
                            ></DayPicker>
                        </div>
                        <div className='xl:ml-5 sm:ml-2'>
                            <select className="select border-none select-ghost w-full max-w-xs">
                                <option disabled selected>Pick the best JS framework</option>
                                <option>Asia/Dhaka </option>
                                <option>Vue</option>
                                <option>React</option>
                            </select>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BookingCalender;
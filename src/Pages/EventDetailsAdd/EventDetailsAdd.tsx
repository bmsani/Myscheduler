import React from 'react';
import { Link } from 'react-router-dom';
import leftArrow from '../../Utilities/icon/leftArrow.png';
const EventDetailsAdd = () => {
    return (
        <div>
            <div className='border mt-3 shadow-lg'>
                <div className="grid grid-cols-3 sm-grid-cols-2  py-4 xl:mx-40">
                    <div>
                        <button className='px-5 border-blue-400 flex items-center border-2 py-3 rounded-full'><span className='mr-1'><img src={leftArrow} className="w-[20px]" alt="" /></span> Back</button>
                    </div>
                    <div>
                        <h2 className='text-xl  py-3'>Add One-on-One Event Type</h2>
                    </div>
                    <div>
                        <h2 className='text-base py-3 text-end'>Your event type is <span className='px-5 py-1 text-base ml-1 text-white bg-gray-400 rounded-sm'>OFF</span> </h2>
                    </div>
                </div>
            </div>
            <div className='xl:mx-48 sm:mx-8 py-4 border-2 border-zinc-200 mt-8 '>
                <div className='flex mx-6'>
                    <div className='rounded-full h-[18px] w-[18px] bg-violet-600 mr-2'>
                    </div>
                    <div>
                        <h2 className='text-l font-light'>What event is this?
                        </h2>
                        <h2 className='text-sm font-light'>Any, No location given</h2>
                    </div>
                </div>
            </div>
            <div className='xl:mx-48 sm:mx-8 border-2 border-zinc-500 mt-2 mb-8 pb-4'>
                <div className='flex items-center justify-between mx-8 border-b'>
                    <div>
                        <h2>What event is this?</h2>
                        <h2 className='text-sm font-light'>30 min, 60 rolling calendar days</h2>
                    </div>
                    <div className=' mx-6 py-4'>
                        <div>
                            <button className='mr-4 hover:underline text-sm font-medium'>Cancel</button>
                            <Link to="/EventDetailsAdd">
                                <button className='px-4 py-1 rounded-full text-white bg-blue-500'>Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mx-8 mb-6 '>
                    <div className='grid grid-cols-2 border-b pb-6'>
                        <div>
                            <h1 className='font-bold mt-8 '>Data Range</h1>
                            <h2 className='text-sm my-4 font-bold'>Invitees can schedule...</h2>
                            <div className='flex items-center gap-4'>
                                <input type="radio" name="radio-1" className="radio" />
                                <input type="text" placeholder="Type here" className="input w-[70px] max-w-xs block input-bordered" />
                                <select className="select w-[140px] select-bordered max-w-xs">
                                    <option disabled selected>Calender Days</option>
                                    <option>Homer</option>
                                    <option>Marge</option>
                                </select>
                                <h2> into the future</h2>
                            </div>
                            <div className='flex gap-3 my-4'>
                                <input type="radio" name="radio-1" className="radio" />
                                <h2> Within a date range</h2>
                            </div>
                            <div className='flex gap-3 '>
                                <input type="radio" name="radio-1" className="radio" />
                                <h2>Indefinitely into the future</h2>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-l font-light ml-4 mt-8'>Set a range of dates when you can accept meetings.</h2>
                        </div>

                    </div>
                    <div className='mt-5 grid grid-cols-2 border-b pb-10'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Duration</span>
                            </label>
                            <select className="select w-full select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>15</option>
                                <option>30</option>
                                <option>40</option>
                                <option>60</option>
                            </select>
                        </div>
                        <div>
                            <h2 className='text-l font-light ml-4'>Define how long your event will be. It can be as long as 12 hours.</h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-6 mb-10'>
                        <div className=''>
                            <h2 className='font-bold text-sm mb-4'>How do you want to offer your availability for this event type?</h2>
                            <button className='border p-3 mr-3 hover:border-2 hover:border-blue-500  '>Use an existing schedule</button>
                            <button className='border p-3 mr-3 hover:border-2 hover:border-blue-500 '>Set Custom Hours</button>
                            <h2 className='font-bold mt-6'>Which schedule do you want to use?</h2>
                            <select className="select w-[60%] select-bordered mt-4">
                                <option disabled selected>Working Hours</option>
                                <option>Working Hours</option>

                            </select>
                        </div>

                        <div>
                            <h2 className='text-l font-light ml-4'>Select one of your schedules or define custom hours specific to this type of event.</h2>
                        </div>
                    </div>
                    <div className='mb-8 border'>
                        <h2>Dhaka/Bangladesh</h2>
                        <div className='border grid grid-cols-2 mt-5'>
                            <div className='mx-6'>
                                <h2 className='text-xs my-3 font-bold'>WEEKLY HOURS</h2>
                                <div className=''>
                                    <div className='grid grid-cols-3 mb-6'>
                                        <h2 className='font-bold text-sm'>SUN</h2>
                                        <h2 className='font-light text-left'>Unavailable</h2>
                                    </div>
                                    <div className='grid grid-cols-3 mb-6 '>
                                        <h2 className='font-bold text-sm'>MON</h2>
                                        <h2 className='text-left'>9:00am – 5:00pm</h2>
                                    </div>
                                    <div className='grid grid-cols-3 mb-6 '>
                                        <h2 className='font-bold text-sm'>TUE</h2>
                                        <h2 className='text-left'>9:00am – 5:00pm</h2>
                                    </div>
                                    <div className='grid grid-cols-3 mb-6'>
                                        <h2 className='font-bold text-sm'>WED</h2>
                                        <h2 className='text-left'> 9:00am – 5:00pm</h2>
                                    </div>
                                    <div className='grid grid-cols-3 mb-6'>
                                        <h2 className='font-bold text-sm'>THU</h2>
                                        <h2 className='text-left'> 9:00am – 5:00pm</h2>
                                    </div>
                                    <div className='grid grid-cols-3 mb-6'>
                                        <h2 className='font-bold text-sm'>FRI</h2>
                                        <h2 className='text-left'> 9:00am – 5:00pm</h2>
                                    </div>
                                    <div className='grid grid-cols-3 mb-6'>
                                        <h2 className='font-bold text-sm'>SAT</h2>
                                        <h2 className='font-light text-left'>Unavailable</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='bl-4'>
                                <h2 className='font-bold my-4 text-xs'>DATE OVERRIDES</h2>
                                <h2 className='text-l font-light ml-4'>To override your hours on specific dates, update your schedule under Availability.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <h2 className='font-bold mb-4'>Want to add time before or after your events?</h2>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" className="checkbox checkbox-xs" />
                                    <h2 className='font-bold text-sm'>Before event</h2>
                                </div>
                                <select className="select ml-6 mt-2 select-bordered w-full max-w-xs">
                                    <option disabled selected>15 min</option>
                                    <option>5 min</option>
                                    <option>10 min</option>
                                    <option>20 min</option>
                                    <option>30 min</option>
                                    <option>40 min</option>
                                </select>
                            </div>
                            <div className='mt-3'>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" className="checkbox checkbox-xs" />
                                    <h2 className='font-bold text-sm'>After event</h2>
                                </div>
                                <select className="select ml-6 mt-2 select-bordered w-full max-w-xs">
                                    <option disabled selected>15 min</option>
                                    <option>5 min</option>
                                    <option>10 min</option>
                                    <option>20 min</option>
                                    <option>30 min</option>
                                    <option>40 min</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-l font-light'>Give yourself some buffer time to prepare for or wrap up from booked Calendly events.</h2>
                        </div>
                    </div>
                    <div className='border-y py-10 mt-8'>
                        <h2 className='text-blue-500 hover:underline'>Additional rules for your availability</h2>
                    </div>
                </div>
                <div className='border-t mx-10 py-4  grid place-items-end'>
                    <div>
                        <button className='mr-4 hover:underline text-sm font-medium'>Cancel</button>
                        <button className='px-4 py-1 rounded-full text-white bg-blue-600'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsAdd;
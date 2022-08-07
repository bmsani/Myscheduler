import React from 'react';
import { Link } from 'react-router-dom';
import leftArrow from '../../Utilities/icon/leftArrow.png';
import meet from '../../Utilities/icon/meet.svg';
const CreateIndividualEvent = () => {
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
            <div className='xl:mx-48 sm:mx-8 border-2 border-zinc-500 mt-8 mb-8 pb-4'>
                <div className='flex items-center justify-between mx-8 border-b'>
                    <div>
                        <h2>What event is this?</h2>
                        <h2 className='text-sm font-light'>No location given</h2>
                    </div>
                    <div className=' mx-6 py-4'>
                        <div>
                            <button className='mr-4 hover:underline text-sm font-medium'>Cancel</button>
                            <button className='px-4 py-1 rounded-full text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                </div>
                <div className='mx-8 mb-6'>
                    <form className="form-control">
                        <label className="label">
                            <span className="label-text">Event Name</span>
                        </label>
                        <div className="">
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input  border-blue-500 w-full max-w-xs "
                            />

                        </div>
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <div className="">
                            <select className="select border-blue-500 w-full max-w-xs">
                                <option disabled selected className='text-light'>Add Your Location</option>
                                <option>
                                    <div>
                                        <img src={leftArrow} alt="" />
                                        <h2>Google Meet</h2>
                                    </div>
                                </option>
                                <option>
                                    <div>
                                        <img src={leftArrow} alt="" />
                                        <h2>Zoom</h2>
                                    </div>
                                </option>

                            </select>
                            {/* <input
                                type="text"
                                placeholder="Type here"
                                className="input  border-blue-500 w-full max-w-xs "
                            /> */}

                        </div>
                        <label className="label">
                            <span className="label-text">Description/Instructions</span>
                        </label>
                        <div className="">
                            <textarea className="textarea border-blue-500 w-full max-w-xs" placeholder="Bio"></textarea>
                            {/* <input
                                type="text"
                                placeholder="Type here"
                                className="input   "
                            /> */}
                        </div>
                        <label className="label">
                            <span className="label-text">Event Link</span>
                        </label>
                        <div className="">
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input  border-blue-500 w-full max-w-xs "
                            />

                        </div>
                    </form>
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

export default CreateIndividualEvent;
import React from 'react';
import { Link } from 'react-router-dom';
import calender from '../../Utilities/icon/calendar.png';
import leftArrow from '../../Utilities/icon/leftArrow.png';
import group from '../../Utilities/icon/group-call.png';
import single from '../../Utilities/icon/single-call.png';
const CreateEventType = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-3 sm-grid-cols-2 mt-6 py-4  xl:mx-40">
                <div>
                    <button className='px-5 border-blue-400 flex items-center border-2 py-3 rounded-full'><span className='mr-1'><img src={leftArrow} className="w-[20px]" alt="" /></span> Back</button>
                </div>
                <div>
                    <h2 className='text-xl text-center py-3'>Create New Event Type</h2>
                </div>
            </div>
            <div className='bg-gray-100 pt-2 pb-20'>
                <div className='flex items-center justify-between xl:mx-40 mt-12'>
                    <div>
                        <div className='flex items-center'>
                            <div>
                                <img src={single} className="w-[48px]" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h2 className='text-xl'>One-on-One</h2>
                                <h2 className='text-l'>Let an invitee pick a time to meet with you.</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/CreateIndividualEvent"><button className='bg-blue-500 text-white px-7 py-3 rounded-full'>Create</button></Link>

                    </div>
                </div>
                <div className='flex items-center justify-between xl:mx-40 mt-20'>
                    <div>
                        <div className='flex items-center'>
                            <div>
                                <img src={group} className="w-[48px]" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h2 className='text-xl'>Group</h2>
                                <h2 className='text-l'>Let multiple invitees meet with you at one time.</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white px-7 py-3 rounded-full'>Create</button>
                    </div>
                </div>
                <div className='flex items-center justify-between xl:mx-40 mt-20 bg-slate-200 p-4 rounded-md'>
                    <div>
                        <h2><span className='font-bold'>Want to host shared events with others?</span> Add members to your account</h2>
                    </div>
                    <div>
                        <button className='px-7 border-blue-400 border-2 py-3 rounded-full'>Invite members</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEventType;
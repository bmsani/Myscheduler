import React from 'react';
import ReactStars from 'react-stars'
const CustomersReview = () => {
    const handleRating = {
        size: 20,
        value: 4,
        edit: false,

    }
    return (
        <div>
            <h2 className='text-primary text-3xl text-center font-bold my-12'>Our Satisfied Customers</h2>
            <div className='grid lg:grid-cols-3 gap-4 container mx-auto '>
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
        </div >
    );
};

export default CustomersReview;
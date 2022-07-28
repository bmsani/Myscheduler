import React from 'react';

const MyLink = () => {
    return (
        <div>
            <div className='w-96 mx-auto'>
                <p className='py-6'>Changing your Myscheduler URL will mean that all of your copied links will no longer work and will need to be updated.</p>
                <div>
                    <span className='font-bold'>Myscheduler.com/</span>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary ml-3 w-1/2" />
                </div>
                    <button className='btn btn-primary mt-5'>Save changes</button>
            </div>
        </div>
    );
};

export default MyLink;
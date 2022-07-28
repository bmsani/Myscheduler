import React from 'react';
import website from '../../Utilities/icon/website.png';
import links from '../../Utilities/icon/link.png';
import email from '../../Utilities/icon/email.png';

const ShareLink = () => {

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <h2 className='text-2xl text-center'>Share Your Link</h2>
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Copy Your Link</span>

                            </label>
                            <div className='grid '>
                                <div className=' grid grid-cols-3'>
                                    <input type="text" placeholder="Type here" className="input d-block border-blue-500 w-full max-w-xl" />
                                </div>
                                <div className='grid grid-cols-1'>
                                    <img src={links} className='w-[56px]' alt="" />
                                </div>
                            </div>
                            <label className="label">
                                <span className="label-text">Email Your Link</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input border-blue-500 w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Email Your Link</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input border-blue-500 w-full max-w-xs" />
                        </form>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn w-full">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareLink;
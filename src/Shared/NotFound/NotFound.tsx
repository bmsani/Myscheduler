import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Utilities/Image/404.jpg'
import Button from '../Button/Button';

const NotFound = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-2 pt-20 justify-center items-center gap-10'>
            <img src={error} alt="" />
            <div>
                <h2 className='text-5xl font-bold pb-10'>Your searching page is not be created yet.</h2>
                <Link to='/'>
                    <Button><span>Back to Home</span></Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
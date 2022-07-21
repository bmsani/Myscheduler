import React from 'react';
import { Link } from 'react-router-dom';
import social1 from '../../../src/Utilities/icon/facebook.png'
import social2 from '../../../src/Utilities/icon/instagram.png'
import social3 from '../../../src/Utilities/icon/linkedin.png'
import social4 from '../../../src/Utilities/icon/youtube.png'
import location from '../../../src/Utilities/icon/location.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-10 bg-primary text-neutral-content mt-20">
                
                    <div className=" col-span-1 lg:col-span-2 md:order-3 lg:order-1 pl-4">
                        <span className='flex'><img className='pr-5' src={location} alt="" /> H#000 (0th Floor), Road #000 </span>
                        <p className='pl-10'>9 Bir Uttam A.K Khandaker Sarak, Mohakhali C/A, Dhaka</p>
                    </div>
                    <div className="col-span-1 md:order-1 lg:order-2">
                        <h2 className='pl-4 text-xl font-bold'>Company</h2>
                        <ul className='menu menu-vertical'>
                        <li><Link className='py-1' to='/'>Home</Link></li>
                        <li><Link className='py-1' to='/'>About Us</Link></li>
                        <li><Link className='py-1' to='/'>Projects</Link></li>
                        <li><Link className='py-1' to='/'>Contact</Link></li>
                        <li><Link className='py-1' to='/'>Admin</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:order-2 lg:order-3">
                    <h2 className='pl-4 text-xl font-bold'>Quick links</h2>
                        <ul className='menu menu-vertical'>
                        <li><Link className='py-1' to='/'>Rentals</Link></li>
                        <li><Link className='py-1' to='/'>Sales</Link></li>
                        <li><Link className='py-1' to='/'>Contact</Link></li>
                        <li><Link className='py-1' to='/'>Our blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:order-4 pl-4">
                    <h2 className='text-xl font-bold'>About us</h2>
                    <p>We're committed to keeping our customer service human. There’s incredible power in human connection; AI simply can't beat it!</p>
                    <div className="flex gap-4">
                        <img className='w-6' src={social1} alt="" />
                        <img className='w-6' src={social2} alt="" />
                        <img className='w-6' src={social3} alt="" />
                        <img className='w-6' src={social4} alt="" />
                    </div>
                    </div>
                
            </footer>
        </div>
    );
};

export default Footer;
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black md:p-20 pt-20 pb-8 px-6 py-10'>
            <div className='grid  grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-500 pb-14 md:px-4'>
                <div >
                    <h2 className='text-2xl font-bold text-white pb-4'>CS — Ticket System</h2>
                    <p className='text-gray-400 text-sm'>This platform is created to help organizations manage customer inquiries, issues and support requests efficiently. Users can create support tickets to report problems or ask questions and support agents can track, respond to and resolve these tickets in an organized way.</p>
                </div>
                {/* company */}
                <div>
                    <h6 className="text-xl font-medium text-white pb-4">Company</h6>
                    <ul>
                        <li className='pb-4'><a className=" text-gray-400 ">About Us</a></li>
                        <li className='pb-4'><a className=" text-gray-400">Our Mission</a></li>
                        <li><a className=" text-gray-400">Contact Sales</a></li>
                    </ul>
                </div>
                {/* services */}
                <div>
                    <h6 className="text-xl font-medium text-white pb-4">Services</h6>
                    <ul>
                        <li className='pb-4'><a className=" text-gray-400">Products & Services</a></li>
                        <li className='pb-4'><a className=" text-gray-400">Customer Stories</a></li>
                        <li><a className=" text-gray-400">Download Apps</a></li>
                    </ul>
                </div>
                 {/* information */}
                <div>
                    <h6 className="text-xl font-medium text-white pb-4">Information</h6>
                    <ul>
                        <li className='pb-4'><a className=" text-gray-400">Privacy Policy</a></li>
                        <li className='pb-4'><a className=" text-gray-400">Terms & Conditions</a></li>
                        <li><a className=" text-gray-400">Join Us</a></li>
                    </ul>
                </div>
                 {/* social links */}
                <div>
                    <h6 className="text-xl font-medium text-white pb-4">Social Links</h6>
                    <a className=" flex gap-1 pb-4">
                        <div className='bg-white rounded-full flex items-center justify-center w-4 h-4'>
                            <i className="fa-brands fa-x-twitter fa-2xs text-black"></i>
                        </div>
                        <p className='text-gray-400'>@CS — Ticket System</p>
                    </a>
                    <a className="flex gap-1 pb-4">
                        <div className='bg-white rounded-full flex items-center justify-center w-4 h-4'>
                            <i className="fa-brands fa-linkedin-in fa-2xs text-black"></i>
                        </div>
                        <p className='text-gray-400'>@CS — Ticket System</p>
                    </a>
                    <a className="flex gap-1 pb-4">
                        <div className='bg-white rounded-full flex items-center justify-center w-4 h-4'>
                            <i className="fa-brands fa-facebook-f fa-2xs text-black"></i>
                        </div>
                        <p className='text-gray-400'>@CS — Ticket System</p>
                    </a>
                    <a className="flex gap-1">
                        <div className='bg-white rounded-full flex items-center justify-center w-4 h-4'>
                            <i className="fa-solid fa-envelope fa-2xs text-black"></i>
                        </div>
                        <p className='text-gray-400'>support@cst.com</p>
                    </a>

                </div>
            </div>
            {/* all reserved */}
            <div>
                <p className='text-white text-center pt-8'> &copy; {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
            </div>

        </div>
    );
};

export default Footer;
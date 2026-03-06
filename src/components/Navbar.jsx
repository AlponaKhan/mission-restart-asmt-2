import React from 'react';
import '../index.css';

const Navbar = () => {
    return (
        <div className='inter-font'>
            <div class="navbar bg-base-100 ">

                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabindex="-1"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost text-sm md:text-2xl font-bold">CS — Ticket System</a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <button >
                        <a class="btn rounded-lg bg-linear-to-tl from-[#9F62F2]  to-[#632EE3] text-xs p-2 mx-auto"> <i class="fa-solid fa-plus"></i> New Ticket</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
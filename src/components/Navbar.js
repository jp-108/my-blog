import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container d-flex flex-wrap justify-content-between py-2'>
                    <Link className='navbar-brand align-self-start' to='/'>
                        My Blogs
                    </Link>
                    <div className="d-flex flex-column">
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mb-2 mb-lg-0'>
                            <li className='nav-item mx-2'>
                                <Link className='nav-link active' aria-current='page' to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item mx-2'>
                                <Link className='nav-link' aria-current='page' to='/blogs'>
                                   Blogs
                                </Link>
                            </li>
                            <li className='nav-item mx-2'>
                                <Link className='nav-link' aria-current='page' to='/newblog'>
                                    New Blog
                                </Link>
                            </li>
                        </ul>
                   </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

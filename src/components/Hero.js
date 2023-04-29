import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {

 
  return (
    <div className='overflow-hidden container pt-5 mt-5'>
      <div className='text-center justify-content-center align-self-center'>
        <h1 className='fw-bold text-body-emphasis'>My Blog</h1>
        <div className='col-lg-8 mx-auto'>
          <p className='lead mb-4'>
            Let's Explore Blogs written by Authors or <br/> You can create your Own blog by click on Create a New Blog.
          </p>

          <div className='d-grid gap-2 d-flex justify-content-center flex-wrap'>
            <Link to="/blogs">
            <button
              type='button'
              className='btn btn-primary btn-lg md-mx-1 mx-2 gap-3'>
              Explore Blogs
            </button>
                </Link>
            <p className="text-center my-auto">Or</p>
            <Link to="/newblog">
              
            <button
              type='button'
              className='btn btn-outline-secondary btn-lg mx-2'>
              Create a New Blog
            </button>
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

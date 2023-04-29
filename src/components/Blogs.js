import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    let result = await fetch("http://localhost:8000/getblogs", {
      method: "Get",
    });
    result = await result.json();
    setBlogs(result);
  };

  const deleteBlog = async (id) => {
    let result = await fetch(`http://localhost:8000/deleteblog/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getBlogs();
    }
  };

  const handleInputChange = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8000/search/${key}`, {
        method: "Get",
      });
      result = await result.json();
      setBlogs(result);
    } else {
      getBlogs();
    }
  };

  const handleDate = (date) => {
    setInputValue(date.target.value);
  };

  return (
    <div className='container col'>
      <form className='my-3 d-flex justify-content-around'>
        <div className='d-flex mb-2'>
          <label htmlFor='date' className='mx-2 col-form-label'>
            Search by Author:
          </label>
          <div className=''>
            <input
              className='form-control'
              type='text'
              id='text-input'
              onChange={handleInputChange}
              list='suggestions'
            />
            <datalist id='suggestions'>
              {blogs.map((item) => (
                <option key={item._id} value={item.author} />
              ))}
            </datalist>
          </div>
        </div>
        <div className='d-flex mb-2'>
          <label htmlFor='date' className='col-form-label'>
            Date:
          </label>
          <div className='mx-2'>
            <div className='input-group date'>
              <input
                type='date'
                onChange={handleDate}
                className='form-control'
              />
            </div>
          </div>
        </div>
      </form>

      {blogs
        .filter((item) => {
           return inputValue === "" ? item : item.date.includes(inputValue);
        })
        .map((item) => {
          const date = new Date(item.date);
          const formattedDate = date.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
          return (
            <div className='card mt-3' key={item._id}>
              <div className='card-header  d-flex justify-content-between'>
                {item.title}
                <div>
                  <Link className='mx-2' to={`/update/${item._id}`}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-pencil-square'
                      viewBox='0 0 16 16'>
                      <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                      <path
                        fillRule='evenodd'
                        d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
                      />
                    </svg>
                  </Link>

                  <Link className='mx-2' onClick={() => deleteBlog(item._id)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-trash-fill'
                      viewBox='0 0 16 16'>
                      <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className='card-body'>
                <blockquote className='blockquote mb-0'>
                  <p className='mb-4'>{item.content}</p>
                  <div className='blockquote-footer'>Author: {item.author}</div>
                  <div className='card-footer'>Created on: {formattedDate}</div>
                </blockquote>
              </div>
            </div>
          );
        })}
    </div>
  );
}

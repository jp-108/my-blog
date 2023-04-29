import React, { useState } from "react";

export default function TextInputWithSuggestions() {
const [blog, setBlog] = useState([])
  const [input, setInput] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    let result = await fetch("http://localhost:8000/addblog",{
      method:'post',
      body:JSON.stringify({title:input.title,author:input.author,content:input.content}),
      headers:{
          'Content-Type':'application/json',
      } 
    }
    
    )
    // eslint-disable-next-line
    result = await result.json();
    
    setBlog([...blog, input])
    setInput({
        title: "",
        author: "",
        content: "",
    });
  };

  return (
    <form className='container mt-5  overflow-hidden d-flex flex-column'>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>
          Title:
        </label>
        <input
          className='form-control'
          id='title'
          name='title'
          value={input.title}
          onChange={handleInputChange}
          type='text'
          placeholder='Enter Title'
          aria-label='default input example'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='author' className='form-label'>
          Author:
        </label>
        <input
          className='form-control'
          id='author'
          name='author'
          value={input.author}
          onChange={handleInputChange}
          type='text'
          placeholder='Enter Name of Author'
          aria-label='default input example'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='content' className='form-label'>
          Content:
        </label>
        <textarea
          className='form-control'
          id='descriprion'
          name='content'
          value={input.content}
          onChange={handleInputChange}
          rows='5'></textarea>
      </div>
      <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
        Add Blog
      </button>
    </form>
  );
}

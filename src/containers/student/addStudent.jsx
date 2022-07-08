import React from 'react'
// import { createElement } from 'react';
import { Link } from 'react-router-dom'
import Dashboard from '.'



export default function AddStudent() {


  function handleClick(e) {
    e.preventDefault();
    let studentName= document.getElementById('name').value;
    let studentClass= document.getElementById('studentClass').value;
    let studentScore= document.getElementById('studentScore').value;
    localStorage.setItem('name',studentName);
    localStorage.setItem('class',studentClass);
    localStorage.setItem('score',studentScore);
    // this.refs.myForm.reset()
    alert('done');
}

  return (
    <div className="w-full h-full">
        <div className="z-5">
        <Dashboard disable="cursor-not-allowed" /></div>
        <div className="absolute backdrop-blur-sm w-full h-full top-0 z-10"></div>
        <div className="absolute w-1/3 block p-6 rounded-xl shadow-lg bg-white max-w-md top-[16%] left-1/2 transform -translate-x-1/2 z-20">
            <h1 className="font-medium text-xl">Add Student</h1>
            <hr className="my-5" />
            <form> 
                <div className="form-group mb-5">
                <label htmlFor="name" className="form-label inline-block mb-2 text-gray-500 text-sm" >STUDENT NAME*</label>
                <input type="email" className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded-lg
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                    aria-describedby="emailHelp" placeholder="Enter Name..." />
                
                </div>

                <div className="form-group mb-5">
                <label htmlFor="studentClass" className="form-label inline-block mb-2 text-gray-500 text-sm">Class*</label>
                <input type="text" className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded-lg
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="studentClass"
                    placeholder="Class..." />
                  
                  <small className="block mt-1 text-xs text-gray-500"><em>Please input values between 1 & 12</em></small>
                </div>

                <div className="form-group mb-5">
                <label htmlFor="studentScore" className="form-label inline-block mb-2 text-gray-500 text-sm">SCORE*</label>
                <input type="text" className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded-lg
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="studentScore"
                    placeholder="Score..." />
                  
                  <small className="block mt-1 text-xs text-gray-500"><em>Please input values between 0 & 100</em></small>
                </div>

                <div className="flex gap-10">
                    <div className="form-group">
                    <label className="form-check-label inline-block text-gray-500" htmlFor="result">RESULT</label><br />
                    <div className="w-12 text-center ">-</div>
                    </div>

                    <div className="form-group">
                    <label className="form-check-label inline-block text-gray-500" htmlFor="grade">GRADE</label><br />
                    <div className="w-12 text-center">-</div>
                    </div>
                    
                </div>
                <hr className="mt-3 mb-5" />

                <div className="flex justify-end items-center gap-5">
                    <Link to='/' className="px-4 py-1.5 border border-sky-500 rounded-xl text-sky-500">CANCEL</Link>
                    <button className="px-4 py-1.5 bg-sky-500 rounded-xl text-white" onClick={handleClick}>CONFIRM</button>
                </div>

            </form>
        </div>
  
    </div>
  )
}

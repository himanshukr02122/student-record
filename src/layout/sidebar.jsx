import React from 'react'
import Icon from '../images/icons/sec_lock_icon.png'


export default function Sidebar() {
  return (
    <div className="relative w-80 h-[100vh] border p-6 shadow-xl">
      <div className="flex items-center justify-center gap-4">
        <div className="px-4 h-12 bg-yellow-400 flex items-center justify-center rounded-lg">
        <img src={Icon} alt="sec-lock-icon" className="w-8" />
        </div>
        <span className="text-blue-400 font-extrabold text-xl">School Space</span>
      </div>
      <hr className="mt-8 mb-5" />
      <ul className="h-[40vh] overflow-auto no-scrollbar">
        <li className="px-6 py-2 text-gray-700 hover:bg-sky-100 opacity-75 hover:text-cyan-400 rounded-lg">
        <i className="fa fa-dashboard mr-5" aria-hidden="true"></i>Dashboard</li>
        <li className="px-6 py-2 text-gray-700 hover:bg-sky-100 opacity-75 hover:text-cyan-400 rounded-lg">
        <i className="fa fa-book mr-5" aria-hidden="true"></i>Courses</li>
        <li className="px-6 py-2 text-gray-700 hover:bg-sky-100 opacity-75 hover:text-cyan-400 rounded-lg">
        <i className="fa-solid fa-people-group mr-4"></i>Students</li>
        <li className="px-6 py-2 text-gray-700 hover:bg-sky-100 opacity-75 hover:text-cyan-400 rounded-lg">
        <i className="fa-brands fa-teamspeak mr-5"></i>Exams</li>
        <li className="px-6 py-2 text-gray-700 hover:bg-sky-100 opacity-75 hover:text-cyan-400 rounded-lg">
        <i className="fa-solid fa-square-poll-vertical mr-5"></i>Results</li>
        <li className="px-6 py-2 text-gray-700 hover:bg-sky-100 opacity-75 hover:text-cyan-400 rounded-lg">
        <i className="fa-solid fa-clapperboard mr-5"></i>Notice Board</li>
        <li className="px-6 py-2 text-gray-700 hover:bg-sky-100 opacity-75 hover:text-cyan-400 rounded-lg">
        <i className="fa-solid fa-signal mr-4"></i>  Live Classes</li>
        <li className="px-6 py-2 text-gray-700 hover:bg-sky-100 opacity-75 hover:text-cyan-400 rounded-lg">
        <i className="fa fa-bell mr-5" aria-hidden="true"></i>  Notifications</li>
      </ul>
      <div className="absolute bottom-0 pb-2 flex flex-col w-full">
        <img src="https://picsum.photos/200" alt="fakeApi" className="w-16 h-16 rounded-full mb-3" />
        <span>Andy Samberg</span>
        <span><a href="mailto:andy.samberg@gmail.com" className="text-gray-400 text-sm">andy.samberg@gmail.com</a></span>
        <button className="border-2 text-sky-400 border-sky-400 w-5/6 my-3 py-1 rounded-xl">View Profile</button>
      </div>
      
    </div>
  )
}

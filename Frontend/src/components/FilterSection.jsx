// import React from 'react'
// import { HiOutlineSearch,HiOutlineLocationMarker,HiOutlineUser } from 'react-icons/hi'
import TwoWaySlider from './Slider'
import searchlogo from '../assets/images/search.png' 
import locationlogo from '../assets/images/locationlogo.png' 
import jobtypelogo from '../assets/images/jobtypelogo.png'

const FilterSection = ({search,handleJobTypeSearch,handleLocationSearch}) => {
  return (
    <div className='flex flex-col  gap-5 justify-between lg:flex-row lg:items-center text-lg text-[#686868] font-medium bg-white
      px-8 py-6 space-x-6 w-full filter-shadow'>

        <div className='flex items-center space-x-2   flex-1 border border-gray-300 p-2 rounded-lg lg:border-none '>
            {/* <span className='text-2xl'><HiOutlineSearch /></span> */}
            <img src={searchlogo} className='w-5' alt="" />
            <input
             type="text" name="jobtitle" id=""
             onChange={search}
              placeholder='Search By Job Title, Role'
              className='outline-none w-full pl-3 placeholder-[#686868]' />
        </div>

    <div className="hidden lg:block h-13 w-[2px]  bg-gray-200" />

        <div className='flex items-center space-x-2 flex-1 border border-gray-300  rounded-lg p-2 lg:border-none '>
            {/* <span className='text-2xl'><HiOutlineLocationMarker/></span> */}
            <img src={locationlogo} className='w-6' alt="" />
            <select className="outline-none pl-3 w-full placeholder-[#686868]" onChange={handleLocationSearch}>
                <option>Preferred Location</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
        </select>
        </div>

    <div className="hidden lg:block h-13 w-[2px] bg-gray-200" />

        <div className='flex items-center space-x-2 flex-1 border border-gray-300  rounded-lg p-2 lg:border-none'>
            {/* <span className='text-2xl'><HiOutlineUser/></span> */}
            <img src={jobtypelogo} className='w-6' alt="" />
            <select className="outline-none pl-3 w-full placeholder-[#686868]" onChange={handleJobTypeSearch}>
                <option>Job type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
            </select>
        </div>

    <div className="hidden lg:block h-13 w-[2px] bg-gray-200 " />

        <div className='flex-1 flex flex-col justify-between gap-1 text-black '>
            <div className=' flex justify-between flex-wrap'>
                <span>Salary Per Month</span>
                <span>₹50k - ₹80k</span>
            </div>
            <div>
                <TwoWaySlider/>
                {/* <input type="range" name="" id=""  className="w-full h-1 bg-gray-300 rounded-lg accent-black outline-none" /> */}
            </div>
            
        </div>
    </div>
  )
}

export default FilterSection


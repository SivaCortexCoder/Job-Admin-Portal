import React from 'react'
import amazon from "../assets/images/Amazon.png"
// import { FiUserPlus } from 'react-icons/fi'
// import { HiOutlineOfficeBuilding } from 'react-icons/hi'
// import { FiLayers } from 'react-icons/fi'
import person from '../assets/images/personadd.png'
import site from '../assets/images/site.png'
import stack from '../assets/images/stack.png'
// var s = '${(desc.split(' ').length!=0)?'truncate':''}'

const JobCard = ({logo,title,exprience,type,salary,desc,desc1,date,minSalary,maxSalary}) => {
  return (
    <div className='card-shadow rounded-xl bg-white flex flex-col justify-between gap-2 px-6 py-4 space-y-3 overflow-hidden w-full max-w-full'>
        <div className='flex justify-between'>
            <div className="bg-gradient-to-t from-gray-100 to-white w-22 h-20 border-2 border-white flex justify-center items-center rounded-2xl logo-shadow">
                <img src={logo} alt="logo" className="w-16 rounded-full" />
            </div>
            <p className='bg-[#b0d9ff] font-medium h-fit px-4 py-2 rounded-xl'>{date ? date : "24h Ago"}</p>
        </div>

        <h1 className='font-bold text-xl'>{title}</h1>

        <div className='flex justify-between items-center text-sm font-medium text-[#686868]'>
            <div className='flex items-center gap-1'>
                {/* <span><FiUserPlus /></span> */}
                <img src={person} alt="" className='w-4.5' />
                <p>{exprience}</p>
            </div>
            <div className='flex items-center gap-1'>
                {/* <span><HiOutlineOfficeBuilding  /></span> */}
                <img src={site} alt="" className='w-4.5' />
                <p>{type}</p>
            </div>
            <div className='flex items-center gap-1'>
                {/* <span><FiLayers /></span> */}
                <img src={stack} alt="" className='w-4.5' />
                <p>{salary ? salary : `${minSalary} - ${maxSalary}`}</p>
            </div>
          
        </div>

       <ul className='list-disc pl-2 text-[#686868] font-medium text-sm text-wrap'>
       <li className='break-words'>{desc}</li>
       {
        desc1 &&<li className='break-words'>{desc1}</li>
       }
       
       </ul>
        <button className='bg-[#00aaff] px-6 py-2 cursor-pointer text-lg rounded-xl text-white'>Apply Now</button>
    </div>
  )
}
export default JobCard
import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import { IoMdPerson } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSplitCross } from "react-icons/gi";

import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function Nav() {
  let [showHam,setShowHam] = useState(false)
  let [showPro,setShowPro] = useState(false)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let {userData} = useSelector(state=>state.user)

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout" , {withCredentials:true})
      console.log(result.data)
     await dispatch(setUserData(null))
      toast.success("LogOut Successfully")
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  return (
    <div>
    <div className='w-full h-17.5 fixed top-0 px-5 py-2.5 flex items-center justify-between bg-[#00000047]  z-10'>
     <div className='lg:w-[20%] w-[40%] lg:pl-12.5 '>
      <img src={logo} className=' w-15  rounded-[5px] border-2 border-white cursor-pointer' onClick={()=>navigate("/")} alt="" />
      
     </div>
     
     <div className='w-[30%] lg:flex items-center justify-center gap-4 hidden'>

        
        {!userData ? <IoMdPerson className='w-12.5 h-12.5 fill-white cursor-pointer border-2 border-[#fdfbfb] bg-[#000000d5] rounded-full p-2.5'onClick={()=>setShowPro(prev=>!prev)}/>:

        
        
       <div className='w-12.5 h-12.5 rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black  border-white cursor-pointer' onClick={()=>setShowPro(prev=>!prev)}>
         {userData.photoUrl ? <img src={userData.photoUrl} className='w-full h-full rounded-full object-cover' alt="" />
         :
         <div className='w-12.5 h-12.5 rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black  border-white cursor-pointer' >{userData?.name.slice(0,1).toUpperCase()}</div>}
          </div>}
           {userData?.role == "educator" ? <div className='px-5 py-2.5 border-2 lg:border-white border-black lg:text-white bg-[black] text-black rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer' onClick={()=>navigate("/dashboard")}>Dashboard</div>
           :""}
        {!userData && <span className='px-5 py-2.5 border-2 border-white text-white rounded-[10px] text-[18px] font-light cursor-pointer bg-[#000000d5] ' onClick={()=>navigate("/login")}>Login</span>}
        {userData && <span className='px-5 py-2.5 bg-white text-black rounded-[10px] shadow-sm shadow-black text-[18px] cursor-pointer' onClick={handleLogout}>LogOut</span>}
       

     </div>
     {showPro && <div className=' absolute top-[110%] right-[15%] flex items-center flex-col justify-center gap-2 text-[16px] rounded-md bg-[white] px-3.75 py-2.5 border-2  border-black hover:border-white hover:text-white cursor-pointer hover:bg-black  ' >
      <span className='bg-[black] text-white  px-7.5 py-2.5 rounded-2xl hover:bg-gray-600' onClick={()=>navigate("/profile")}>My Profile</span>
      <span className='bg-[black] text-white hover:bg-gray-600  px-6.25 py-2.5 rounded-2xl' onClick={()=>navigate("/enrolledcourses")}>My Courses</span>
       </div>}
     <GiHamburgerMenu className='w-7.5 h-7.5 lg:hidden fill-white cursor-pointer ' onClick={()=>setShowHam(prev=>!prev)}/>
      
     
    </div>
     <div className={`fixed  top-0 w-screen h-screen bg-[#000000d6] flex items-center justify-center flex-col gap-5 z-10 ${showHam?"translate-x-[0%] transition duration-600  ease-in-out" :"-translate-x-full transition duration-600  ease-in-out"}`}>
      <GiSplitCross  className='w-8.75 h-8.75 fill-white absolute top-5 right-[4%]' onClick={()=>setShowHam(prev=>!prev)}/>
      {!userData ? <IoMdPerson className='w-12.5 h-12.5 fill-white cursor-pointer border-2 border-[#fdfbfb7a] bg-[#000000d5] rounded-full p-2.5'/>:
      <div className='w-12.5 h-12.5 rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black  border-white cursor-pointer' onClick={()=>setShowPro(prev=>!prev)}>
        {userData.photoUrl ? <img src={userData.photoUrl} className='w-full h-full rounded-full object-cover ' alt="" />
         :
        <div className='w-12.5 h-12.5 rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black  border-white cursor-pointer' >{userData?.name.slice(0,1).toUpperCase()}</div>}</div>
      }
      
      <span className='flex items-center justify-center gap-2  text-white border-2 border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-16.25 py-5 text-[18px] ' onClick={()=>navigate("/profile")}>My Profile </span>
      <span className='flex items-center justify-center gap-2  text-white border-2 border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-16.25 py-5 text-[18px] ' onClick={()=>navigate("/enrolledcourses")}>My Courses </span>
      
       {userData?.role == "educator" ? <div className='flex items-center justify-center gap-2 text-[18px] text-white border-2 border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-15 py-5' onClick={()=>navigate("/dashboard")}>Dashboard</div>
           :""}
       {!userData ?<span className='flex items-center justify-center gap-2 text-[18px] text-white border-2 border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-20 py-5' onClick={()=>navigate("/login")}>Login</span>:
       <span className='flex items-center justify-center gap-2 text-[18px] text-white border-2 border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-18.75 py-5' onClick={handleLogout}>LogOut</span>}
    

    </div>
   </div>
      
  )
}

export default Nav
import React, { useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import logo from './../assets/images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical  } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import IconButton from "@mui/material/IconButton"
import DrawerComponent from "./Drawer"

function Header() {
    const [ toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false);
    const menu = [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH lIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]

    // drawer

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-4 xl:gap-8 items-center'>
            <img src={logo} className="w-20 sm:w-32 md:w-30 xl:w-30 h-auto object-contain" />
        <div className='hidden md:flex gap-8'>
            {menu.map((item, index)=>(<HeaderItem key={index} name={item.name} Icon={item.icon}/>))}
        </div>
        <div className='flex md:hidden gap-5'>
            {menu.map((item,index)=>index < 3 &&(<HeaderItem  key={index} name={''} Icon={item.icon}/>))}
            <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                <HeaderItem name={''} Icon={HiDotsVertical}/>
                {toggle? <div className='absolute mt-3 border p-3 border-gray-700 px-5 py-4 bg-[#121212]' >
                   {menu.map((item,index)=>index > 2 &&(<HeaderItem key={index} name={item.name} Icon={item.icon}/>))}
                </div>:null}
            </div>
        </div>
        </div>
         <div>
      {/* ICON ONLY */}
      <IconButton onClick={handleOpen}>
       <FaRegCircleUser color="white" className='xl:text-4xl text-2xl'/>
      </IconButton>

      {/* DRAWER COMPONENT */}
      <DrawerComponent open={open} onClose={handleClose} 
      PaperProps={{sx: {backgroundColor: "#121212",color: "white"}}} />
    </div>
    </div>
  )
}

export default Header
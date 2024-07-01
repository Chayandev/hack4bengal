
import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
// import Hamburger from './Hamburger';

const getUser = async () => {
  // const response = await fetch(`${process.env.HOST}/api/auth/user/get`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "usertoken": cookies().get("usertoken").value
  //   }
  // }, { next: { revalidate: 1 } })
  // const data = await response.json()
  // return data
}

const Navbar = async () => {
  let data;
  if (cookies().has("usertoken")) {
    // data = await getUser()
  }
  return (
    <div className='flex items-center justify-evenly p-5 bg-[#051a39]'>
      {/* <Hamburger /> */}
      <div class="gap-1 flex items-center justify-center ">
        <div class="flex items-center space-x-2 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                        </svg>
          <span class="text-2xl text-red-500 italic font-semibold">Be-The-Donor</span>
        </div>
      </div>

      <div className='flex gap-3 items-center small:hidden'>
        <Link href={"/"} className='text-white'>Home</Link>
        <Link href={"/allrequest"} className='text-white'>All Requets</Link>
        <Link href={"/createrequest"} className='text-white'>Create Request</Link>
        <Link href={"/myprofile"} className='text-white'>My Profile</Link>
      </div>
      {(cookies().has('usertoken')) ?
        <Link href={"/logout"} className='text-white border-solid border-red-500 rounded-lg border-2 px-3 py-2 bg-red-500'>logout</Link> :
        <div className='flex gap-3'>
          <Link href={"/login"} className='text-white border-solid border-red-500 rounded-lg border-2 px-3 py-2 bg-red-500'>login</Link>
          <Link href={"/register"} className='text-[#2fdde6] border-solid border-[#2fdde6] red-500 rounded-lg border-2 px-3 py-2'>Register</Link>
        </div>
      }

      {/* // </div> : <div className='flex gap-3'>}
        {/* // <div className='flex gap-3 items-center'> */}
      {/* //   <Link href={"/user/dashboard/profile"} className='flex gap-2 items-center'> */}
      {/* //     <p className='mini:hidden'>Hi! {data.name.split(" ")[0]}</p> */}
      {/* <Image src={data.image} alt="" height={25} width={25} className='rounded-full ring-2 ring-blue-500 w-[25px] h-[25px]' /> */}
      {/* //     </Link> */}
      {/* //   <Link href={"/logout"}><FontAwesomeIcon icon={faArrowRightFromBracket} size='lg' className='text-blue-500' /></Link> */}
      {/* // </div> : <div className='flex gap-3'> */}
      {/* //   <Link href={"/login"} className='text-white border-solid border-red-500 rounded-lg border-2 px-3 py-2 bg-red-500'>login</Link> */}
      {/* //   <Link href={"/register"} className='text-[#2fdde6] border-solid border-[#2fdde6] red-500 rounded-lg border-2 px-3 py-2'>Register</Link> */}
      {/* // </div> */}
      {/* } */}
    </div>
  )
}

export default Navbar;
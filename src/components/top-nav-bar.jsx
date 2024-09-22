import React from 'react'
import { Link } from "react-router-dom";
import profil from '../assets/profile-icon.svg'
import monogram from '../assets/monogram.png'
import error from '../assets/error.svg'

function TopNavBar() {
  return (
    <div className='w-full bg-secondary px-12 py-3 flex justify-between'>
        <Link to='/' className='text-3xl text-primary-content'>Momen App</Link>
        <div className="flex gap-8 items-center text-primary-content">
            <a href="#" className='hover:font-semibold'>Tentang Aplikasi</a>
            <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-secondary-content rounded-full"><img src={profil} alt="" />Profile</div>
             <div tabIndex={0} className="flex flex-col justify-center gap-6 py-6 dropdown-content menu bg-base-100 rounded-box text-secondary z-[1] w-80 p-2 shadow-md">
                <Link to='profil' className="flex flex-col items-center gap-4">
                 <img className='w-10' src={monogram} alt="" />
                 <p className='text-2xl'>Ainun Asriani</p>
                </Link>
                <div className="flex flex-col gap-2 items-center text-center font-semibold">
                    <p className='leading-10'>Foto</p>
                    <p className='leading-10'>Album Foto</p>
                    <Link to='/login' role='button' className="btn btn-error rounded-full px-8">
                    <img src={error} alt="" />Log Out</Link>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default TopNavBar
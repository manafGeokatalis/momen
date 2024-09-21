import React from 'react'
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
    <h1 className='h1-lg block mx-auto  mt-36'>Moment App</h1>
    <div className="card bg-base-100 w-96 outline outline-1 outline-secondary-content mx-auto mt-20">
        <div className="card-body flex flex-col gap-9 items-center">
            <h2 className="card-title">Daftar</h2>
            <form id='register' className='w-full'>
                <div className='flex flex-col gap-6'>
                    <label className="input input-bordered flex items-center gap-2 w-">
                    <input htmlFor='register' required type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                    <input htmlFor='register' required type="password" className="grow" placeholder="Kata Sandi" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                    <input htmlFor='register' required type="password" className="grow" placeholder="Ulangi Kata Sandi" />
                    </label>
                </div>
            </form>
             <div className="flex flex-col items-center gap-3 w-full">
             <button type='submit' htmlFor='register' className='btn btn-secondary w-full'>Daftar Akun Baru</button>
             <Link to={'/login'} className='text-secondary text-md text-center font-semibold'>Sudah punya akun? Masuk di sini</Link>
             </div>
        </div>
    </div>
    </>
  )
}

export default Register
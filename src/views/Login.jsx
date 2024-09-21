import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
    <h1 className='h1-lg block mx-auto  mt-36'>Moment App</h1>
    <div className="card bg-base-100 w-96 outline outline-1 outline-secondary-content mx-auto mt-20">
        <div className="card-body flex flex-col gap-9 items-center">
            <h2 className="card-title">Masuk</h2>
            <form id='login' className='w-full'>
                <div className='flex flex-col gap-6'>
                    <label className="input input-bordered flex items-center gap-2 w-">
                    <input htmlFor='login' required type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                    <input htmlFor='login' required type="password" className="grow" placeholder="Kata Sandi" />
                    </label>
                </div>
            </form>
             <div className="flex flex-col items-center gap-3 w-full">
             <button type='submit' htmlFor='login' className='btn btn-secondary w-full'>Masuk</button>
             <Link to={'/register'} className='text-secondary text-md text-center font-semibold ' href="#">Belum punya akun? Daftar di sini</Link>
             </div>
             <button htmlFor='login' className='btn btn-ghost btn-wide'>Lupa Kata Sandi</button>
            
        </div>
    </div>
    </>
  )
}

export default Login
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="header-main bg-[#ffa725]">
                <div className="container w-5/6 mx-auto">
                    <header className='w-full h-16  text-[#fff5e4] flex items-center justify-between'>
                        <h1 className='text-2xl font-bold'>CRUD Operation</h1>
                        <nav className='flex space-x-4'>
                            <NavLink to='/' className=''>Home</NavLink>
                            <NavLink to='/create' className=''>Create</NavLink>
                            <NavLink to='/edit/:sudentid' className=''>Edit</NavLink>
                            <NavLink to='/view/:studentid' className=''>View</NavLink>
                        </nav>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header

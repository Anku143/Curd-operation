import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="header-main bg-[#ffa725] py-5">
                <div className="container w-5/6 mx-auto">
                    <header className='w-full h-16  text-[#fff5e4] flex items-center justify-between'>
                        <h1 className='text-4xl font-bold hover:text-[#6a9c89] cursor-pointer leading-8 transition-all duration-200'>CRUD <br /><span className='ml-5'>Operation</span></h1>
                        <nav className='flex space-x-4'>
                            <NavLink to='/' className='text-xl font-medium hover:text-[#6a9c89] transition-all duration-200'>Home</NavLink>
                            <NavLink to='/create' className='text-xl font-medium hover:text-[#6a9c89] transition-all duration-200'>Create</NavLink>
                            <NavLink to='student/edit/:studentid' className='text-xl font-medium hover:text-[#6a9c89] transition-all duration-200'>Edit</NavLink>
                            <NavLink to='student/view/:studentid' className='text-xl font-medium hover:text-[#6a9c89] transition-all duration-200'>View</NavLink>
                        </nav>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header

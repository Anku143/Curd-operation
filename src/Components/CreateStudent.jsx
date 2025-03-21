import React from 'react'
import { Link } from 'react-router-dom'

const CreateStudent = () => {
    return (
        <div>
            <div className='bg-[#e5f5ea] py-30'>
                <div className="container w-5/6 mx-auto">
                    <div className="main">
                        <h2 className='text-[#6a9c89] text-6xl text-center font-bold font-(family-name:--font-roboto)'>Add new Student</h2>

                        <div>
                            <form className='mt-8   '>
                                <div className='flex flex-col'>
                                    <label htmlFor="name" className='text-[#6a9c89] text-2xl font-bold uppercase'>ID</label>
                                    <input type="text" name='name' id='name' className='border-2 border-[#6a9c89] p-2 rounded-md my-2' />
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor="email" className='text-[#6a9c89] text-2xl font-bold uppercase'>Name</label>
                                    <input type="email" name='email' id='email' className='border-2 border-[#6a9c89] p-2 rounded-md my-2' />
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor="phone" className='text-[#6a9c89] text-2xl font-bold uppercase'>Course</label>
                                    <input type="number" name='phone' id='phone' className='border-2 border-[#6a9c89] p-2 rounded-md my-2' />
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor="address" className='text-[#6a9c89] text-2xl font-bold uppercase'>Address</label>
                                    <input type="text" name='address' id='address' className='border-2 border-[#6a9c89] p-2 rounded-md my-2' />
                                </div>
                                <div className='flex gap-4 mt-4'>
                                    <button type='submit' className='bg-[#6a9c89] text-white p-2 rounded-md'>Add Student</button>
                                    <Link to='/' className='bg-red-500 text-white py-2 px-4 rounded-md text-lg'>Back</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateStudent

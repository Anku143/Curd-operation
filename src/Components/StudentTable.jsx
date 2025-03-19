import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const StudentTable = () => {
    const [students, setStudents] = useState([])
    let navToEdit = useNavigate()
    let navToView = useNavigate()

    // const [student, setStudent] = useState("")

    useEffect(() => {
        fetch('http://localhost:8000/Student')
            .then(res => res.json())
            .then(data => setStudents(data))
            .catch(err => console.log(err))
    }, [])



    return (

        <div className='bg-[#e5f5ea] h-lvh'>
            <div className="container w-5/6 mx-auto">
                <div className="main">
                    <h2 className='text-[#6a9c89] text-6xl text-center font-bold font-(family-name:--font-roboto)'>Student Table</h2>
                    <div>
                        <NavLink to='/create' className='bg-[#6A9C89] text-[#fff5e4] text-base font-semibold py-3 px-6 rounded-3xl transition-all duration-300 hover:bg-[#C1D8C3] hover:text-[#6A9C89] inline-block'>Add New Student</NavLink>
                    </div>
                    <div>
                        <table className='w-5/6 mt-5 mx-auto'>
                            <thead>
                                <tr className='bg-[#6A9C89] text-[#fff5e4]'>
                                    <th className='text-xl uppercase'>Id</th>
                                    <th className='text-xl uppercase'>Name</th>
                                    <th className='text-xl uppercase'>Course</th>
                                    <th className='text-xl uppercase'>Address</th>
                                    <th className='text-xl uppercase'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students && students.map((item) => (
                                        <tr className='bg-[#C1D8C3] text-[#387a61] h-20 text-center text-lg font-medium' key={item.Id}> 
                                            <td className='w-1/6'>{item.Id}</td>
                                            <td className='w-1/6'>{item.Name}</td>
                                            <td className='w-1/6'>{item.Course}</td>
                                            <td className='w-1/6'>{item.Address}</td>
                                            <td className='flex space-x-4 h-20 items-center justify-center w-6/6'>
                                                <button className='bg-blue-500 py-2 px-4 rounded-2xl cursor-pointer text-[#fff5e4] hover:bg-blue-400 transition-all duration-150' onClick={() => { navToView('/view/:studentid') }}>View</button>
                                                <button className='bg-[#387a61] py-2 px-4 rounded-2xl cursor-pointer text-[#fff5e4] hover:bg-[#6A9C89] transition-all duration-150' onClick={() => { navToEdit('/edit/:studentid') }}>Edit</button>
                                                <button className='bg-red-500 py-2 px-4 rounded-2xl cursor-pointer text-[#fff5e4] hover:bg-red-400 transition-all duration-150' onClick={() => { }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentTable

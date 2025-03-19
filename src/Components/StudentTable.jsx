import React from 'react'
import { NavLink } from 'react-router-dom'
const StudentTable = () => {
    return (

        <div>
            <div className="container w-5/6 mx-auto">
                <div className="main">
                    <h2 className=''>StudentTable</h2>
                    <div>
                        <NavLink to='/create' className='bg-[#ffa725] text-[#fff5e4] py-3 px-6 rounded-3xl transition-all duration-300 hover:bg-[#C1D8C3] hover:text-[#ffa725] inline-block'>Add New Student</NavLink>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Course</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentTable

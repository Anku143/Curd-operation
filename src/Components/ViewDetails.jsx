import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewDetails = () => {

    const { studentid } = useParams()
    const [studentData, setStudentData] = useState("")
    console.log(studentid)
    useEffect(() => {
        fetch("http://localhost:8000/students/" + studentid)
            .then(res => res.json())
            .then(data => setStudentData(data))
            .catch(err => console.log(err))
    }, [studentid])

    return (
        <div className='py-10 main-main'>
            <div className="container w-4/6 mx-auto">
                <div className="main px-5 py-10 rounded-3xl border-t-8 border-[#6a9c89]">
                    <h2 className='text-[#6a9c89] text-5xl text-center font-bold font-(family-name:--font-roboto)'>Student View</h2>

                    {
                        studentData &&
                        <div className="details w-2xl mx-auto mt-10">
                            <p className='my-2'><strong className='text-[#6a9c89]'>ID: </strong>{studentData.id}</p>
                            <p className='my-2'><strong className='text-[#6a9c89]'>NAME: </strong>{studentData.name}</p>
                            <p className='my-2'><strong className='text-[#6a9c89]'>COURCE: </strong>{studentData.course}</p>
                            <p className='my-2'><strong className='text-[#6a9c89]'>ADDRESS: </strong>{studentData.address}</p>
                            <Link to='/' className="bg-red-500 text-white py-2 px-4 rounded-md text-lg hover:bg-red-400 inline-block">Back</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewDetails

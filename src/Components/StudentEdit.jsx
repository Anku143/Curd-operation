import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


const StudentEdit = () => {

    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [address, setAddress] = useState('');
    const { studentid } = useParams()
    console.log(studentid)
    useEffect(() => {
        fetch("http://localhost:8000/students/" + studentid)
            .then(res => res.json())
            .then(data => {
                setId(data.id)
                setName(data.name)
                setCourse(data.course)
                setAddress(data.address)
            })
            .catch(err => console.log(err))
    }, [studentid])


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log('Form submitted');

        if (!id || !name || !course || !address) {
            alert('Please fill all the fields');
            return;
        }

        const studentData = { id, name, course, address };
        console.log('Sending data:', studentData);

        fetch('http://localhost:8000/students/' + studentid, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                alert('Student Details Updated');
                console.log('Success:', data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                alert('Failed to update student');
            });
    };


    useEffect(() => {
        console.log('Component rendered');
    }, []);



    return (
        <>
            <div className="py-10 main-main">
                <div className="container w-4/6 mx-auto">
                    <div className="main px-5 py-10 rounded-3xl border-t-8 border-[#6a9c89]">
                        <h2 className='text-[#6a9c89] text-5xl text-center font-bold font-(family-name:--font-roboto)'>Edit student Details</h2>

                        <form className="mt-8 w-2xl mx-auto" onSubmit={(e) => handleSubmit(e)} >
                            <div className="flex flex-col">
                                <label htmlFor="id" className="text-[#6a9c89] text-2xl font-bold uppercase">ID</label>
                                <input
                                    type="text"
                                    id="id" name="id"
                                    className="border-2 border-[#6a9c89] p-2 rounded-md my-2 bg-[#fff5e4] text-lg"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-[#6a9c89] text-2xl font-bold uppercase">Name</label>
                                <input
                                    type="text"
                                    id="name" name="name"
                                    className="border-2 border-[#6a9c89] p-2 rounded-md my-2 bg-[#fff5e4] text-lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="course" className="text-[#6a9c89] text-2xl font-bold uppercase">Course</label>
                                <input
                                    type="text"
                                    id="course" name="course"
                                    className="border-2 border-[#6a9c89] p-2 rounded-md my-2 bg-[#fff5e4] text-lg"
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="address" className="text-[#6a9c89] text-2xl font-bold uppercase">Address</label>
                                <input
                                    type="text"
                                    id="address" name="address"
                                    className="border-2 border-[#6a9c89] p-2 rounded-md my-2 bg-[#fff5e4] text-lg"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-4 mt-4">
                                <input type='submit' className="bg-[#6a9c89] text-white p-2 rounded-md cursor-pointer" value={'Update'}></input>
                                {/* <button type="submit" className="bg-[#6a9c89] text-white p-2 rounded-md cursor-pointer">
                                    Update
                                </button> */}
                                <Link to="/" className="bg-red-500 text-white py-2 px-4 rounded-md text-lg">
                                    Back
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default StudentEdit

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function GetAllUsers(props) {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        async function fetcher() {
            await fetch("http://localhost:4206/users", {
                method: "GET"
            }).then(res => res.json())
                .then(data => {
                    setUsers(data);
                    console.log("data", data)
                    console.log("typeof (data)", typeof (data));
                    console.log("Users", Users);
                    return data;
                });
        };
        const request_response = fetcher();
        console.log("request_response", request_response);
    }, []);
    return (
        <div className="container d-inline">
            <h1 className='text-center p-5'><mark>All Users in the system</mark></h1>
            <div className='row m-0 justify-content-md-center p-5'>
                {
                    Users.length > 0 ?
                        Users.map((user) => {
                            console.log("<td>{user.custom_id}</td>", user.custom_id);
                            return <div className="card m-2 rounded-3" style={{ "width": "25rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Name: {user.name}</h5>
                                    <p className="card-text">ID: {user.custom_id}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item fs-5 fw-light">Country: {user.address.country}</li>
                                    <li className="list-group-item fs-5 fw-light">Pincode: {user.address.pincode}</li>
                                    <li className="list-group-item fs-5 fw-light">City: {user.address.city}</li>
                                    <li className="list-group-item fs-5 fw-light">State: {user.address.state}</li>
                                    <li className="list-group-item fs-5 fw-light">Hobby1: {user.hobbies[0]}</li>
                                    <li className="list-group-item fs-5 fw-light">Hobby2: {user.hobbies[1]}</li>
                                    <li className="list-group-item fs-5 fw-light">Hobby3: {user.hobbies[2]}</li>
                                </ul>
                                <div className="card-body">
                                    <Link to={"/edituser/" + user.custom_id}><a className="w-100 btn btn-light border">Edit user</a></Link>
                                </div>
                            </div>
                        })
                        : <h1 className='text-center'>Loading Data</h1>
                }
            </div>
        </div>
    )
}
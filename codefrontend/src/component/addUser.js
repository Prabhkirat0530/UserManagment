import React, { useState } from 'react'
export default function AddUser() {
    const [user, setUser] = useState({
        name: "",
        hobby1: "",
        hobby2: "",
        hobby3: "",
        streetAddress: "",
        pincode: "",
        state: "",
        city: "",
        country: ""
    });
    async function userAdd(e) {
        e.preventDefault();
        const newUser = { ...user };
        console.log(newUser);
        await fetch("http://localhost:4206/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(resp => { console.log("resp=", resp) })
    };
    const fillData = (e) => {
        return setUser((prev) => {
            setUser({ ...prev, [e.target.name]: e.target.value });
        })
    };

    return (
        <>
            <div className="container d-inline">
                <h1 className='p-5 text-center'><mark>Enter Data for New User</mark></h1>
                <div className="container w-50">
                    <form className='p-5 text-center'>
                        <div class="input-group px-5 mb-3">
                            <span class="input-group-text" id="basic-addon1">Name</span>
                            <input required className="form-control" type="text" name="name" id="c_name" placeholder="Enter Name Here"
                                onChange={fillData}
                            />
                        </div>

                        <div class="input-group px-5 mb-3">
                            <span class="input-group-text" id="basic-addon2">Address</span>
                            <input required className="form-control" type="text" name="streetAddress" id="c_streetAddress" placeholder="Enter street Address Here"
                                onChange={fillData}
                            />
                        </div>

                        <div class="input-group px-5 mb-3">
                            <span class="input-group-text" id="basic-addon2">Pincode</span>
                            <input required className="form-control" type="text" name="pincode" id="c_pincode" placeholder="Enter pincode Here"
                                onChange={fillData}
                            />
                        </div>

                        <div class="input-group px-5 mb-3">
                            <span class="input-group-text" id="basic-addon2">State</span>
                            <input required className="form-control" type="text" name="state" id="c_state" placeholder="Enter state Here"
                                onChange={fillData}
                            />
                        </div>

                        <div class="input-group px-5 mb-3">
                            <span class="input-group-text" id="basic-addon2">City</span>
                            <input required className="form-control" type="text" name="city" id="c_city" placeholder="Enter city Here"
                                onChange={fillData}
                            />
                        </div>
                        <div class="input-group px-5 mb-3">
                            <span class="input-group-text" id="basic-addon2">Country</span>
                            <input required className="form-control" type="text" name="country" id="c_country" placeholder="Enter country Here"
                                onChange={fillData}
                            />
                        </div>

                        {/* Hobbies */}
                        <div class="input-group px-5 mb-3">
                            <span class="input-group-text" id="basic-addon2">Hobby 1</span>
                            <input required className="form-control" type="text" name="hobby1" id="c_hobby1" placeholder="Enter Hobby 1 Here"
                                onChange={fillData}
                            />
                        </div>
                        <div class="input-group px-5 mb-3">
                            <span class="input-group-text" id="basic-addon2">Hobby 2</span>
                            <input required className="form-control" type="text" name="hobby2" id="c_hobby2" placeholder="Enter Hobby 2 Here"
                                onChange={fillData}
                            />
                        </div>
                        <div class="input-group px-5 mb-3">
                            <span class="input-group-text" id="basic-addon2">Hobby 3</span>
                            <input required className="form-control" type="text" name="hobby3" id="c_hobby3" placeholder="Enter Hobby 3 Here"
                                onChange={fillData}
                            />
                        </div>

                        <br />
                        <br />
                        <div className="container text-center">
                            <button className="btn btn-lg btn-light border shadow-sm p-3 w-25" onClick={userAdd} type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
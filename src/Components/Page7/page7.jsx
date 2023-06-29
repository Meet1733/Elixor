import React, { useState } from "react";

import "../../styles/page7.css";
import Msgimg from "../../Assets/pg7-img.svg";

function Page7() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    function submitHandler(e) {
        e.preventDefault();

        const data = [
            {
                "name": name,
                "email": email,
                "contact": contact,
                "company": company,
                "message": message
            }
        ]

        setName("");
        setEmail("");
        setContact("");
        setCompany("");
        setMessage("");

        console.log(data);
    }

    return (
        <React.Fragment>
            <div className="pg7-main-div">
                <div className="pg7-top-div">
                    <div className="pg7-top-lft">
                        <p className="pg7-top-lft-l1">Contact Us</p>
                        <p className="pg7-top-lft-l2">Today to get a quote for your organization.</p>
                    </div>

                    <div className="pg7-top-rht">
                        <img src={Msgimg} alt="msg-img" />
                    </div>
                </div>

                <div className="pg7-form-div">
                    <form className="pg7-frm" onSubmit={submitHandler}>
                        <div className="pg7-frm-lft">
                            <label className="pg7-frm-lbl">Enter your full name <input className="pg7-frm-ipt" type="text" value={name} placeholder="Enter your full name" onChange={(e) => { setName(e.target.value) }} /></label>
                            <label className="pg7-frm-lbl">Email<input className="pg7-frm-ipt" type="text" value={email} placeholder="Enter your email address" onChange={(e) => { setEmail(e.target.value) }} /></label>
                            <label className="pg7-frm-lbl">Contact Number<input className="pg7-frm-ipt" type="text" value={contact} placeholder="Enter your contact number" onChange={(e) => { setContact(e.target.value) }} /></label>
                            <label className="pg7-frm-lbl">Company Name <input className="pg7-frm-ipt" type="text" value={company} placeholder="Enter your company name" onChange={(e) => { setCompany(e.target.value) }} /></label>
                        </div>
                        <div className="pg7-frm-rht">
                            <label className="pg7-frm-lbl">Your Message<textarea className="pg7-frm-ipt pg7-frm-msg" value={message} placeholder="Enter your message" onChange={(e) => { setMessage(e.target.value) }} /></label>
                            <button className="pg7-frm-btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Page7
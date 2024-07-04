import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {  useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";


export const Home = () =>{ 
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	const [fullName, setFullName] = useState ("");
	const [email,setEmail] = useState("");
	const [phone,setPhone] = useState("");
	const [address, setAddress] = useState("");


	const handleSubmit = (e) => {
		e.preventDefault();
		const newContact = {
			name: fullName,
			phone: phone,
			email: email,
			address: address
			//agenda_slug: store.agenda
		};
		actions.createContact(newContact);
		
		navigate("/"); // Redirige a la página de demo 
	};


	 console.log(fullName, email, phone, address);

	return(
			<div className="container">
				<div>
						<div className=" d-flex justify-content-center">
							<img src="https://i.pinimg.com/564x/f3/f7/d1/f3f7d1a93907c3892ce16e906929c3ed.jpg" className="rounded-circle mt-3 ms-3" alt="" style={{ width: '100px', height: '100px' }} />
						</div>
					<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="fullName"><BsFillPersonFill style={{ width: '30px', height: '30px' }}/></label>
						<input type="text" 
						className="form-control" 
						id="fullName" 
						placeholder="Full Name"
						value={fullName}
						onChange={(e)=>setFullName(e.target.value)}/>
					</div>
					<div className="form-group">
						<label htmlFor="email"> <BsEnvelopeAtFill style={{ width: '20px', height: '20px' }}/> </label>
						<input type="email" 
						className="form-control" 
						id="email" 
						placeholder="Enter email" 
						value={email}
						onChange={(e)=>setEmail(e.target.value)}/>
					</div>
					<div className="form-group">
						<label htmlFor="phone"> <BsFillTelephoneFill style={{ width: '20px', height: '20px' }}/> </label>
						<input type="tel" 
						className="form-control" 
						id="phone" 
						placeholder="Enter phone" 
						value={phone}
						onChange={(e)=>setPhone(e.target.value)}/>
					</div>
					<div className="form-group">
						<label htmlFor="address"> <BsGeoAltFill style={{ width: '20px', height: '20px' }} /> </label>
						<input type="text" 
						className="form-control" 
						id="address" 
						placeholder="Enter address" 
						value={address}
						onChange={(e)=>setAddress(e.target.value)}/>
					</div>

					<button type="submit" className="btn btn-primary btn-block mt-3">Save</button>

					{/* <a href="/" class="mt-3 d-block text-center">Or get back to contacts</a> */}
					</form>
				</div>
		</div>
);
}



import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () =>{ 
	
	const [fullName, setFullName] = useState ("");
	const [email,setEmail] = useState("");
	const [phone,setPhone] = useState("");
	const [address, setAddress] = useState("");


	const handleSubmit = (e) => {
		e.preventDefault();
		const newContact = {
			full_name: fullName,
			email: email,
			phone: phone,
			address: address,
			agenda_slug: store.agenda
		};
		actions.createContact(newContact);
	};


	 console.log(fullName, email, phone, address);

	return(
			<div class="container">
				<div>
					<h1 class="text-center mt-5">Add a new contact</h1>
					<form onSubmit={handleSubmit}>
					<div class="form-group">
						<label for="fullName">Full Name</label>
						<input type="text" 
						class="form-control" 
						id="fullName" 
						placeholder="Full Name"
						value={fullName}
						onChange={(e)=>setFullName(e.target.value)}/>
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" 
						class="form-control" 
						id="email" 
						placeholder="Enter email" 
						value={email}
						onChange={(e)=>setEmail(e.target.value)}/>
					</div>
					<div class="form-group">
						<label for="phone">Phone</label>
						<input type="tel" 
						class="form-control" 
						id="phone" 
						placeholder="Enter phone" 
						value={phone}
						onChange={(e)=>setPhone(e.target.value)}/>
					</div>
					<div class="form-group">
						<label for="address">Address</label>
						<input type="text" 
						class="form-control" 
						id="address" 
						placeholder="Enter address" 
						value={address}
						onChange={(e)=>setAddress(e.target.value)}/>
					</div>

					<button type="submit" class="btn btn-primary btn-block mt-3">Save</button>

					{/* <a href="/" class="mt-3 d-block text-center">Or get back to contacts</a> */}
					</form>
				</div>
		</div>
);
}


//https://chatgpt.com/share/3d8a98b4-1c4c-4916-bd91-46d053d03789 
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div class="container">
		<div>
			<h1 class="text-center mt-5">Add a new contact</h1>
			<form>
			<div class="form-group">
				<label for="fullName">Full Name</label>
				<input type="text" class="form-control" id="fullName" placeholder="Full Name" ></input>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" class="form-control" id="email" placeholder="Enter email"></input>
			</div>
			<div class="form-group">
				<label for="phone">Phone</label>
				<input type="tel" class="form-control" id="phone" placeholder="Enter phone"></input>
			</div>
			<div class="form-group">
				<label for="address">Address</label>
				<input type="text" class="form-control" id="address" placeholder="Enter address"></input>
			</div>

			<button type="submit" class="btn btn-primary btn-block mt-3">Save</button>

			<a href="/" class="mt-3 d-block text-center">Or get back to contacts</a>
			</form>
		</div>
</div>
);

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store} = useContext(Context);
	const params = useParams();
	
	return (


		
			// {/* <div className="card mb-3" style="max-width: 540px;">
			// 	<div className="row g-0">
			// 		<div className="col-md-4">
									
			// 			<img src="https://i.pinimg.com/564x/f3/f7/d1/f3f7d1a93907c3892ce16e906929c3ed.jpg" className="rounded-circle" alt="" style={{ width: '100px', height: '100px' }}></img>

			// 		</div>

			// 		<div className="col-md-8">
			// 			<div className="card-body">
			// 				<h5 className="card-title">Card title</h5>
			// 				<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			// 				<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div> */}

			

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
		
	);
};

Single.propTypes = {
	match: PropTypes.object
};

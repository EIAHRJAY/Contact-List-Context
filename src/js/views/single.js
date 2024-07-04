import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";



export const Single = props => {
	const { store} = useContext(Context);
	const params = useParams();
	
	return (
		
		<div className="container p-5 " >
			<div className="d-flex justify-content-center " >
				<div className="card mb-3 w-100 border" style={{ maxWidth: '800px' }}>
					<div className="">
						<div className=" d-flex justify-content-center">
							<img src="https://i.pinimg.com/564x/f3/f7/d1/f3f7d1a93907c3892ce16e906929c3ed.jpg" className="rounded-circle mt-3 ms-3" alt="" style={{ width: '100px', height: '100px' }} />
						</div>
						<div className="">
							<div className="card-body " >

								<div className="form-group mt-3">
									<label htmlFor="fullName"><BsFillPersonFill style={{ width: '30px', height: '30px' }}/></label>
									<input type="text" 
									className="form-control" 
									placeholder="Full Name"/>
								</div>

								<div className="form-group mt-3">
									<label htmlFor="email"><BsEnvelopeAtFill style={{ width: '20px', height: '20px' }}/></label>
									<input type="text" 
									className="form-control" 
									placeholder="email"/>
								</div>

								<div className="form-group mt-3">
									<label htmlFor="phone"><BsFillTelephoneFill style={{ width: '20px', height: '20px' }}/></label>
									<input type="tel" 
									className="form-control" 
									placeholder="phone"/>
								</div>
								<div className="form-group mt-3 mb-4">
									<label htmlFor="address"><BsGeoAltFill style={{ width: '20px', height: '20px' }} /></label>
									<input type="text" 
									className="form-control" 
									placeholder="address"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

				<div className="d-flex justify-content-center ">

					<button type="button" className=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
						save
					</button>


					<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-body">
										Are you certain about these changes?
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<Link to="/">
											<button type="button" className="btn btn-primary " data-bs-dismiss="modal" >Save changes</button>
										</Link>
									</div>
								</div>
							</div>
						</div>



						{/* <Link to="/">
							<span className="btn btn-primary btn-lg" href="#" role="button">
								Back home
							</span>
						</Link> */}
				</div>
		
		
			
		</div>
		


	);
};

// Single.propTypes = {
// 	 match: PropTypes.object
// }

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
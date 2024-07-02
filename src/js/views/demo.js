import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";


export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [selectedContact, setSelectedContact] = useState(null);

	useEffect(() => {
		actions.getContacts();
	}, []);

	const handleDeleteClick = (contactId) => {
		setSelectedContact(contactId);
	};

	const handleDeleteConfirm = () => {
		if (selectedContact) {
			actions.deleteContact(selectedContact);
			setSelectedContact(null);
		}
	};

	return (
		<div className="container">
			{store.contacts.length === 0 ? (
				<p>No contacts available.</p>
			) : (
				<ul className="list-group">
					{store.contacts.map((contact) => (
						<li key={contact.id} className="list-group-item d-flex justify-content-between">
							<div className="d-flex">
								<img src="https://i.pinimg.com/564x/f3/f7/d1/f3f7d1a93907c3892ce16e906929c3ed.jpg" className="rounded-circle" alt="" style={{ width: '100px', height: '100px' }}></img>
							</div>

							<div>
								<p><BsFillPersonFill /> {contact.name}</p>
								<p><BsFillTelephoneFill /> {contact.phone}</p>
								<p><BsEnvelopeAtFill /> {contact.email}</p>
								<p><BsGeoAltFill /> {contact.address}</p>
							</div>

							<div>
								<Link to="/single" state={{ contact }}>
									<button className="btn btn-success mr-2 me-2">Edit</button>
								</Link>

								<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#deleteModal-${contact.id}`} onClick={() => handleDeleteClick(contact.id)}>
									Delete
								</button>

								<div className="modal fade" id={`deleteModal-${contact.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											{/* <div className="modal-header">
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div> */}

											<div className="modal-body">
												<p>Why delete this contact?</p>
											</div>

											<div className="modal-footer">
												<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
												<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleDeleteConfirm}>Yes</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};


// -> AUN ME QUEDA HACER LA CONEXION CON LA API (FETCH) 
// ->AREGLA LA INFO DE DELANTE DE LA FOTO 
// ->MODAL PARA INFORMA CUANDO SE VA BORRAR ALGO 
// -> AHI QUE TOCAR EN SIGLE POR QUE VA SER DONDE EDICTAMOS UN CONTACTO
// -> MAS ESTILO
// -> EMPEZAMOS COM FLUXO PERO NO IMPRIMIA EN LA CONSOLA

// TOQUE YA EN DEMO/HOME/LAYOUT/NAVBAR

// MANANA EMPEZAREMOS
// -> FETCH 100% MENOS ESTILO
// PROGRAMAS Y CONEXIOES 
//IDEA "AGREGAR UN CHECKBOX QUE PUEDAS ELEGIR HOMBRE O MUEJER Y CAMBIA LA FOTO AZUL/ROSA" SE SOBRAR TEMPO


// mentoria amanha pergunta sobre icones
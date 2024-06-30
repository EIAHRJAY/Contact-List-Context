import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContacts();
	}, []);

	return (
		<div className="container">
			<h1 className="text-center mt-5" >Welcome to your contact list</h1>
			{store.contacts.length === 0 ? (
				<p>No contacts available.</p>
			) : (
				<ul className="list-group">
					{store.contacts.map((contact) => (
						<li key={contact.id} className="list-group-item d-flex justify-content-between">
							
							<div className="d-flex">
									<img src="https://i.pinimg.com/564x/f3/f7/d1/f3f7d1a93907c3892ce16e906929c3ed.jpg " className="rounded-circle " alt="" style={{ width: '100px', height: '100px' }}></img>
								</div>

							<div>
								
								<Link to={`/single`}>
									<span>{contact.name}</span>
								</Link>
								<p>{contact.name}</p>
								<p>{contact.phone}</p>
								<p>{contact.email}</p>
								<p>{contact.address}</p>
							</div>

							<div>
								<Link to="/home" state={{ contact }}>
									<button className="btn btn-success mr-2 me-2">Edit</button>
								</Link>
								<button className="btn btn-danger" onClick={() => actions.deleteContact(contact.id)}>
									Delete
								</button>
							</div>
							
						</li>
					))}
				</ul>
			)}
		</div>
	);
};




{/* <div>
                            <Link to={"/single/" + contact.id}>
                                <button className="border border-0 bg-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                                    </svg>
                                </button>
                            </Link>
                            <button className="border border-0 bg-transparent" onClick={() => actions.deleteContact(contact.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                </svg>
                            </button>

 */}

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
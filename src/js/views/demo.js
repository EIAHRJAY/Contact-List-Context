import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex justify-content-between ">
			<ul className="list-group w-100">
				{store.demo.map((item, index) => {
					return (
					
						<li
							key={index}
							className="list-group-item d-flex justify-content-between "
							style={{ background: item.background }}>
							

							<div >
								<img src="https://i.pinimg.com/564x/f3/f7/d1/f3f7d1a93907c3892ce16e906929c3ed.jpg " className="rounded-circle " alt="man" style={{ width: '100px', height: '100px' }}></img>
								
							</div>
							
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							{/* <div>
								<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
									Change Color
								</button>
							</div> */}
							<div>
							
							{/* PUT ATUALIZAR AQUI  e tbm GET AGENDA */}
							<Link to={"/single/" + index}> 
									<button className="border border-0 bg-transparent  ">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
											<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
										</svg>
									</button>
							</Link>
							{/* DELETA UN Contact AQUI */}
								<button className="border border-0 bg-transparent">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
										<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
									</svg>
								</button>
							</div>

						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				{/* <button className="btn btn-primary">Back home</button> */}
			</Link>
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

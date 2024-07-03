const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: "EIAHRJAY",
			contacts: []
		},

		actions: {

			// obteniendo informacion de la API
			getContacts: async () => { 
				const store = getStore();
				try {
					const response = await fetch(
						`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`
					);
					if (response.ok) {
						const dataContacts = await response.json();
						setStore({ contacts: dataContacts.contacts });
					} else {
						console.error("Error fetching contacts:", response.status);
					}
				} catch (error) {
					console.error("Error fetching contacts:", error);
				}
			},
			 
			
			//crear contacto
			createContact: async (contact) => {
				const store = getStore();
				console.log("esta delvolvendo:", contact)
				try {
					const response = await fetch(
						`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(contact)
						}
					);
					if (response.ok) {
						getActions().getContacts();
					} else {
						console.error("Error creating contact:", response.status);
					}
				} catch (error) {
					console.error("Error creating contact:", error);
				}
			},


			//Actualizar
			updateContact: async (id, contact) => {
				const store = getStore();
				try {
					const response = await fetch(
						`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`,
						{
							method: "PUT",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(contact)
						}
					);
					if (response.ok) {
						getActions().getContacts();
					} else {
						console.error("Error updating contact:", response.status);
					}
				} catch (error) {
					console.error("Error updating contact:", error);
				}
			},

			//deleta contacto
			deleteContact: async (id) => {
				const store = getStore();
				try {
					const response = await fetch(
						`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`,
						{
							method: "DELETE"
						}
					);
					if (response.ok) {
						getActions().getContacts();
					} else {
						console.error("Error deleting contact:", response.status);
					}
				} catch (error) {
					console.error("Error deleting contact:", error);
				}
			}
		}
	};
};

export default getState;

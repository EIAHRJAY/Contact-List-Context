const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		
			contactList: [],


		actions: {
			// Use getActions to call a function within a fuction
			// getContacts: async () => {
			// 	try {
			// 	  const response = await fetch(
			// 		"https://playground.4geeks.com/contact/agendas/EIAHRJAY/contacts"
			// 	  );
			// 	  if (response.ok) {
			// 		const dataContacts = await response.json();
			// 		setStore({ contactList: dataContacts.contacts });
			// 		console.log(dataContacts);
			// 	  }
			// 	} catch (error) {
			// 	  console.error(error);
			// 	}
			//   },

			  getContacts: async () => {
				try {
				  const response = await fetch(
					"https://playground.4geeks.com/contact/agendas/EIAHRJAY/contacts");
				  if (response.ok) {
					const dataContacts = await response.json();
					console.log(dataContacts.name );
					console.log("Data received:", dataContacts); // Verifica la respuesta en la consola
					return dataContacts.contacts; // Retorna los contactos obtenidos
				  } else {
					console.error("Error fetching contacts:", response.status);
					return []; // Retorna un array vacío en caso de error
				  }
				} catch (error) {
				  console.error("Error fetching contacts:", error);
				  return []; // Retorna un array vacío en caso de error
				}
			  },
			  	
			  
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      agenda: "EIAHRJAY",
      contacts: [],
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
        console.log("esta delvolvendo:", contact);
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contact),
            }
          );
          if (response.ok) {
            const newContact = await response.json();
            setStore({ contacts: [...store.contacts, newContact] });
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
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contact),
            }
          );
          if (response.ok) {
            const updatedContact = await response.json();
            setStore({
              contacts: store.contacts.map((c) =>
                c.id === updatedContact.id ? updatedContact : c
              ),
            });
            console.log("Contacto actualizado:", updatedContact);
          } else {
            const errorData = await response.json();
            console.error(
              "Error actualizando contacto:",
              response.status,
              errorData
            );
          }
        } catch (error) {
          console.error("Error actualizando contacto:", error);
        }
      },

      //deleta contacto
      deleteContact: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            setStore({
              contacts: store.contacts.filter((contact) => contact.id !== id),
            });
          } else {
            // console.error("Error deleting contact:", response.status);
          }
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      },

      // Verificar existencia de la agenda
      checkAgendaExists: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`
          );
          return response.ok;
        } catch (error) {
          console.error("Error checking agenda existence:", error);
          throw error;
        }
      },

      // Crear agenda si no existe
      createAgenda: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${store.agenda}`,
            {
              method: "POST",
            }
          );
          if (response.ok) {
            console.log("Agenda creada exitosamente.");
          } else {
            console.error("Error creating agenda:", response.status);
          }
        } catch (error) {
          console.error("Error creating agenda:", error);
        }
      },

      // obtener contacto por id
      getContact: (id) => {
        const store = getStore();
        const contact = store.contacts.find(
          (contact) => contact.id === parseInt(id)
        );
        return contact || null;
      },
    },
  };
};

export default getState;

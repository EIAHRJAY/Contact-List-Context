import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsFillPersonFill, BsEnvelopeAtFill, BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs";

export const Single = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const contactFromLocation = location.state?.contact || {};

    const [contact, setContact] = useState({
        name: contactFromLocation.name || "",
        email: contactFromLocation.email || "",
        phone: contactFromLocation.phone || "",
        address: contactFromLocation.address || ""
    });

    useEffect(() => {
        const contactId = params.id;
        console.log("Contact ID:", contactId);
        console.log("Store contacts:", store.contacts);
    
        if (store.contacts.length > 0) {
            const foundContact = store.contacts.find(contact => contact.id === parseInt(contactId));
            console.log("Found contact:", foundContact);
            if (foundContact) {
                setContact(foundContact);
            }
        } else {
            actions.getContacts().then(() => {
                const foundContact = store.contacts.find(contact => contact.id === parseInt(contactId));
                console.log("Found contact after fetching:", foundContact);
                if (foundContact) {
                    setContact(foundContact);
                }
            });
        }
    }, [params.id, store.contacts, actions]);
    
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contactId = params.id;
    
        console.log("Contact ID in handleSubmit:", contactId); // Añadir un log para verificar el ID
    
        if (!contactId || isNaN(parseInt(contactId))) {
            console.error("Contact ID is invalid:", contactId);
            return;
        }
    
        await actions.updateContact(contactId, contact);
        navigate("/");
    };
    
    
    

    return (
        <div className="container p-5">
            <div className="d-flex justify-content-center">
                <div className="card mb-3 w-100 border" style={{ maxWidth: '800px' }}>
                    <div className="">
                        <div className="d-flex justify-content-center">
                            <img src="https://i.pinimg.com/564x/f3/f7/d1/f3f7d1a93907c3892ce16e906929c3ed.jpg" className="rounded-circle mt-3 ms-3" alt="" style={{ width: '100px', height: '100px' }} />
                        </div>
                        <div className="">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mt-3">
                                        <label htmlFor="name"><BsFillPersonFill style={{ width: '30px', height: '30px' }} /></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            name="name"
                                            value={contact.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="email"><BsEnvelopeAtFill style={{ width: '20px', height: '20px' }} /></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email"
                                            name="email"
                                            value={contact.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="phone"><BsFillTelephoneFill style={{ width: '20px', height: '20px' }} /></label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Phone"
                                            name="phone"
                                            value={contact.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group mt-3 mb-4">
                                        <label htmlFor="address"><BsGeoAltFill style={{ width: '20px', height: '20px' }} /></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                            name="address"
                                            value={contact.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Save
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                Are you certain about these changes?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSubmit} data-bs-dismiss="modal">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

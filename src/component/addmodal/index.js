import React, { useState, useEffect } from 'react';

function AddModal({ showaddmodal, handlecloseaddmodal, iddata, namedata, emaildata, contactNodata }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");

    // Update state when props change
    useEffect(() => {
        if (iddata) setId(iddata);
        if (namedata) setName(namedata);
        if (emaildata) setEmail(emaildata);
        if (contactNodata) setContactNo(contactNodata);
    }, [iddata, namedata, emaildata, contactNodata]);

    // Function to save or update data in localStorage
    const saveData = () => {
        const newData = { id: id || new Date().getTime(), name, email, contactNo };

        // Get existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem('todoData')) || [];
        
        if (iddata) {
            // Update existing data
            const updatedData = existingData.map(item => item.id === id ? newData : item);
            localStorage.setItem('todoData', JSON.stringify(updatedData));
        } else {
            // Add new data
            existingData.push(newData);
            localStorage.setItem('todoData', JSON.stringify(existingData));
        }
        handlecloseaddmodal(); // Close modal after saving
    };

    return (
        <div>
            <div className={`modal fade ${showaddmodal ? 'show d-block' : ''}`} id="AddModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showaddmodal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div classNpame="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{iddata ? 'Edit Details' : 'Add Details'}</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input type='hidden' id="id" value={id} />
                                <div className='form-group'>
                                    <label htmlFor="name" className='col-form-label'>Name:</label>
                                    <input type='text' className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="email" className='col-form-label'>Email:</label>
                                    <input type='email' className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="contactNo" className='col-form-label'>Contact No:</label>
                                    <input type='text' className='form-control' id='contactNo' value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handlecloseaddmodal}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={saveData}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModal;

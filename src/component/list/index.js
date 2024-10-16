import React, { useEffect, useState } from "react";

const ListData = ({ searchtext, setSelectedData, setshowaddmodal }) => {
    const [data, setData] = useState([]);

    // Fetch data from localStorage on component mount
    useEffect(() => {
        const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
        setData(todoData);
    }, []);

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchtext.toLowerCase()) ||
        item.email.toLowerCase().includes(searchtext.toLowerCase())
    );

    const handleEdit = (id, name, email, contactNo) => {
        setSelectedData({ id, name, email, contactNo });
        setshowaddmodal(true);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        localStorage.setItem('todoData', JSON.stringify(updatedData));
        setData(updatedData); // Update state after deletion
    };

    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="thead-dark">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contactNo}</td>
                                <td><button type="button" className="btn btn-primary" onClick={() => handleEdit(item.id, item.name, item.email, item.contactNo)}>Edit</button></td>
                                <td><button type="button" className="btn btn-primary" onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No results found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListData;

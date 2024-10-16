import React, { useEffect, useState } from 'react';
import '../../styles/component/list.css';
import AddModal from '../../component/addmodal';
import ListData from '../../component/list';

function Todo() {
    const [showaddmodal, setshowaddmodal] = useState(false);
    const [searchtext, setsearchtext] = useState("");
    const [selectedData, setSelectedData] = useState({});

    const handleopenaddmodal = () => setshowaddmodal(true);
    const handlecloseaddmodal = () => setshowaddmodal(false);

    const handlesearchtext = (e) => {
        setsearchtext(e.target.value);
    };

    return (
        <div className="container">
            <h1 className="text-center">Welcome to My React App</h1>
            <div className='d-flex justify-content-between p-5'>
                <button type='button' className="btn btn-primary" onClick={handleopenaddmodal}>Add</button>
                <div className='d-flex gap-2'>
                    <input 
                        type='text' 
                        className='search p-1' 
                        id='search' 
                        placeholder='Search' 
                        onChange={handlesearchtext} 
                    />
                    <button type='button' className='btn btn-primary'>Search</button>
                </div>
            </div>

            <ListData 
                searchtext={searchtext} 
                setSelectedData={setSelectedData} 
                setshowaddmodal={setshowaddmodal} 
            />

            <AddModal 
                showaddmodal={showaddmodal} 
                handlecloseaddmodal={handlecloseaddmodal} 
                iddata={selectedData.id} 
                namedata={selectedData.name} 
                emaildata={selectedData.email} 
                contactNodata={selectedData.contactNo} 
            />
        </div>
    );
}

export default Todo;

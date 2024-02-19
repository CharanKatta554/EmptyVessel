import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/create_Testimony.css";
function CreateTestimony() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        content: '',
        source: '',
    });

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async () => {
        if (formData.content !== "" && formData.source !== "") {
            await fetch('http://localhost:8080/api/testimonials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ content: formData.content, source: formData.source })
            }, changePage()).then(response => { response.json() })
                .then(data => {
                    console.log("testing...", data)
                })
                .catch(err => console.log(err.message))
        }
        else {
            alert("Input fields not empty")
        }
    }

    const changePage = () => {
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Content:</label>
                <input id='content' type='text' name='content' placeholder='Enter content' value={formData.content} onChange={handleChange}></input><br></br>
                <label>Enter Source:</label>
                <input id='source' type='text' name='source' placeholder='Enter source' value={formData.source} onChange={handleChange}></input><br></br>
                <button id='createbutton' type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateTestimony;
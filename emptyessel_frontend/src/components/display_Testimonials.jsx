import React, { useEffect, useState } from 'react';
import '../css/display_Testimonials.css';
function DisplayTestimonials() {
    const [listOfTestimonials, setListOfTestimonials] = useState([]);
    const fetchTestmonials = async () => {
        return await fetch("http://localhost:8080/api/testimonials")
            .then((res) => res.json())
            .then((data) => setListOfTestimonials(data))
    }

    useEffect(() => {
        fetchTestmonials();
    }, [])


    return (
        <div>
            {listOfTestimonials.slice(0).reverse().map((testimony, index) => {
                return (
                    <div className='content'>
                        <p>{testimony.content}</p>
                        <p id='sourceName'>Source:{testimony.source}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default DisplayTestimonials;
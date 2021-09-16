import React, {useState} from 'react'
import './styles/main.css'

const url = "https://course-api.com/react-tours-project";

const Location = ({ data, remove }) => {
    const { image, info, name, price, id } = data;

    return (
        <>
            <div className='container' key={id}>
                <img src={image} alt={name} />
                <div className='contain-text'>
                    <h1>{name}</h1>
                    <p className='badge'>${price}</p>
                    <p>{info}</p>
                    <button className='badge' onClick={()=>remove(id)}>Not Interested</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Location

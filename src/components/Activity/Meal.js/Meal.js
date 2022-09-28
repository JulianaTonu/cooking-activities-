import React from 'react';
import './Meal.css'
const Meal = (props) => {
    const {name,img,description,time}=props.meal
    return (
        <div className='meal '>
            <img src={img} alt="" />

            <div className='meal-info'>
            <h2 className='mt-3'>{name}</h2>
            <p>{description}</p>
            <p>Time:{time}</p>
            </div>

            <button className='btn btn-info px-5 ms-3 mb-3 fw-bold'>ADD TO LIST</button>

        </div>
    );
};

export default Meal;
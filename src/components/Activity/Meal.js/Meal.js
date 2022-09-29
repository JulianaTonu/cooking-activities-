import React from 'react';
import './Meal.css'
const Meal = (props) => {
    const {name,img,description,time}=props.meal
    const{handleAddToList}=props
    return (
        <div className='meal '>
            <img src={img} alt="" />

            <div className='meal-info '>
            <h2 className='mt-3'>{name}</h2>
            <p>{description.slice(0,70)}...</p>
            <p>Time:{time}</p>
            
            <button onClick={()=> handleAddToList(props.meal)} className='btn btn-warning text-dark px-5 ms-5  fw-bold'>ADD TO LIST</button></div>

        </div>
    );
};

export default Meal;
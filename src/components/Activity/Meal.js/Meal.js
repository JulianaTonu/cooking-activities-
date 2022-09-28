import React from 'react';

const Meal = (props) => {
    const {name,img,}=props.meal
    return (
        <div className='meal'>
            <img src={img} alt="" />

            <div className='meal-info'>
<h2>Name:{name}</h2>
            </div>
        </div>
    );
};

export default Meal;
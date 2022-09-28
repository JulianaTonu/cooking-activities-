
import React, { useEffect, useState } from 'react';
import './Activity.css'
import Meal from './Meal.js/Meal';

const Activity = () => {
    const [meals, setMeals] = useState([])

    useEffect(()=>{
        fetch(`meals.json`)
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])

    return (
        <div className='activity-container pt-5 row'>
            <div className="meals-container col-8 m-3 g-3">
            
      <h1 className='text-primary'><img  src={require('../image/logoo.png')} alt="" /> My Cooking Activity</h1>
      <h4 className=' py-4'>Select today's meal</h4>



<div className="meals-card  ">

{
    meals.map(meal=> <Meal 
         key ={meal.id}
        meal={meal}
     ></Meal>)
}
</div>


            </div>

            <div className="my-container bg-light col ">

<div className='activity-info'>
<div className="my-info">
    <div className='name d-flex'>

    <img src={require('../image/tonu3.png')} alt="" />
    <div>
    <h3>Juliana Tonu</h3>
    <h4>Dhaka, Bangladesh</h4>
    </div>

    </div>

<div className='d-flex text-center ms-4 p-2 mt-3 mydetails'>
      <div className='pe-3'>
      <h4>54kg</h4>
      <h4 className=''>Weight</h4>
      </div>

      <div className='pe-3'>
      <h4>5.1</h4>
      <h4>Height</h4>
      </div>

      <div >
      <h4>25yrs</h4>
      <h4>Age</h4>
      </div>
</div>

<div className='ms-3'>
    <h3 className='p-3'>Add a Break</h3>

<div className='d-flex'>
<p className='p-4 break rounded-circle'>10s</p>
<p className='p-4 break rounded-circle'>20s</p>
<p className='p-4 break rounded-circle'>30s</p>
<p className='p-4 break rounded-circle'>40s</p>


</div>


<div className='cooking-details'>
<h4 className='p-3  d-flex justify-content-between time'>Cooking time
<p>220</p></h4>
<h4 className=' p-3 d-flex justify-content-between time'>Break time <p>20</p></h4>

<div className='text-center'>
<button className='btn btn-info p-3 mt-3 fw-bold '>Activity Completed</button>
</div>
</div>
</div>

</div>
</div>
            </div>
            
        </div>
    );
};

export default Activity;
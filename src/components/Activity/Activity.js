
import React, { useEffect, useState } from 'react';
import MyContainer from '../MyContainer/MyContainer';
import './Activity.css'
import Meal from './Meal.js/Meal';


const Activity = () => {
    const [meals, setMeals] = useState([])
    const [list, setList]=useState([])
    

    useEffect(()=>{
        fetch(`meals.json`)
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])

    

    const handleAddToList = (meal) =>{
    console.log("selectedMeal",meal)
    const newList =[...list, meal]
    setList(newList)
}
   
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
        
        handleAddToList={handleAddToList}
     ></Meal>)
}
</div>


            </div>

<div className="my-container bg-light col ">
<MyContainer 

list ={list}


></MyContainer>
   

            </div>
            
        </div>
    );
};

export default Activity;
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyContainer = ({list}) => {

    const [breaktime, setBreaktime]=useState([])

    const handleBreaktime =(item)=>{
    console.log("mtbreaktime",item)
    const newtime =[...breaktime,item ]
    setBreaktime(newtime)
}


    const toastNotify =()=>{
        toast("Activity Completed")
    }

    let time =0;
    
    for(const meal of list){
        time = time + meal.time
        
    }

    let breakTime= 0;
    for(const item of breaktime){
        breakTime = item
        
    }
    





    return (
        <div>
            
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

<div className='ms-4 p-2 mt-3 mydetails'>
    <p>This is Juliana Tonu.I am a student of programming hero.Currently I'm learning React.I am from Dhaka but my hometown is Magura</p>
</div>

<div className='ms-3'>
    <h3 className='p-3'>Add a Break</h3>

<div className='d-flex mydetails'>
<p onClick={()=> handleBreaktime(10)} className='p-4 break rounded-circle'>10s</p>
<p onClick={()=> handleBreaktime(20)} className='p-4 break rounded-circle'>20s</p>
<p onClick={()=> handleBreaktime(30)} className='p-4 break rounded-circle'>30s</p>
<p onClick={()=> handleBreaktime(40)} className='p-4 break rounded-circle'>40s</p>



</div>


<div className='cooking-details'>
<h3 className='p-3'>Cooking Details</h3>
<h4 className='p-3  d-flex justify-content-between time'>Cooking time
<p>{time} min</p></h4>
<h4 className=' p-3 d-flex justify-content-between time'>Break time <p>{breakTime} Seconds</p></h4>

<div className='text-center'>
<button onClick={ toastNotify } className='btn btn-warning text-dark p-3 mt-3 fw-bold '>Activity Completed</button>
<ToastContainer/>
</div>

</div>

</div>

</div>
</div>
</div>


       
    );
};

export default MyContainer;
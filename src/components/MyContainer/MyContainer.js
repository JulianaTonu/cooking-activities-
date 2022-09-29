import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyContainer = () => {

    const toastNotify =()=>{
        toast("Activity Completed")
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
<button onClick={ toastNotify } className='btn btn-info p-3 mt-3 fw-bold '>Activity Completed</button>
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
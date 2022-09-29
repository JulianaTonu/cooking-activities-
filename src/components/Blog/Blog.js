import React from 'react';

const Blog = () => {
    return (
        <div>
            
            <h1 className='text-center mt-5'>Here Are Some Questions with Answers</h1>

    <div class="container ">

        <div class="p-3">
            <div class="p-2">
              <h5>1. How does React works?</h5>
              <p>Ans:React uses declarative paradigm that makes it easier to reason about our application and aims to be both efficient and flexible.It design simple views for each state in our application and react will efficiently update and render just the right component when our data changes </p>
            </div>
         
            <div class="p-2">
              <h5>2. Difference between Props and State  </h5>
              <p>Ans :Props: 1.Props are used to pass data from one component to another. 2. Props are read only. 3.Props can not be modified.
                State :1. State  changes can be asynchronous.2. State can be modified using setState.becouse we know that setState function is used to update the state.  
              </p>
            </div>
           
            <div class="p-2">
              <h5>3. What are the usecases of useEffect except loading data from api? </h5>
              <p>Ans : 1.Running once on mount: fetch API data
                <br />
2.Running on state change: validating input field
<br />
3.Running on state change: live filtering
<br />
4.Running on state change: trigger animation on new array value
<br />
5.Running on props change: update paragraph list on fetched API data update
<br />
6.Running on props change: updating fetched API data to get BTC updated price
              </p>
            </div>
           
    

        </div>
        </div>
        </div>
    );
};

export default Blog;
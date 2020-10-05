import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import'../Regi/Regi.css'
const Regi = () => {
    const handelRegistration = (data) => {
        const newRegistration ={...logedInUser , ...registrationNow };
        fetch('http://localhost:5000/addRegistration' , {
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    const [logedInUser , setLogedInUser] = useContext(UserContext);
    const [registrationNow , setRegistrationNow ] = useState({
        
    })
    
    return (
        <div>

            <div>
                <form className="form" action="" value={registrationNow} >
                    <input type="text" name="" id="" placeholder="Full Name" /><br/>
                    <input type="text" name="" id="" placeholder="Username or Email" /><br/>
                    <input type="date" name="" id="" placeholder="Date" /><br/>
                    <input type="text" name="" id="" placeholder="Desicription" /><br/>
                    <input  type="text" name="" id="" placeholder="Organize books at the library" /><br/>
                    <button onClick={handelRegistration}>Registration</button>
                </form>
                
            </div>
        </div>
    );
};

export default Regi;
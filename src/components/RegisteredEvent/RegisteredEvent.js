import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { userContext } from '../../App';

const RegisteredEvent = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [registeredEvents,setRegisteredEvents] = useState([]);

    useEffect(() => {
        fetch(`https://nameless-inlet-35612.herokuapp.com/getRegisteredEvents?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        })
        .then(res => res.json())
        .then(events => setRegisteredEvents(events))
        .catch(err => console.log(err))
    },[])

    const handleDeleteEvent = (id) => {
        
        fetch(`https://nameless-inlet-35612.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
    }

 
    return (
        <div className ="registered-event">
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 all-registered-event">
                        {
                            registeredEvents.map( events => 
                               <div className="registered-event-content" style={{width: '47%'}}>
                                   <div className="bannerImg">
                                       <img src={events.banner} alt="banner"/>
                                   </div>
                                   <div className="event-info">
                                       <h4>{events.eventTitle}</h4>
                                       <p>{events.allInfo.date}</p>
                                       <button onClick={() => handleDeleteEvent(events._id)}>Cancel</button>
                                   </div>
                               </div> 
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );






};

export default RegisteredEvent;
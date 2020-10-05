import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({data,handleEvent}) => {

    return (
        <div className="event-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 eventImage">
                        {
                            data.map( eventItem => 
                                <div key={ eventItem._id}className="eventContainer" style={{width: '25%'}}>                                     
                                    <Link to="register"><img onClick={() => handleEvent(eventItem)} src={eventItem.banner} alt="banner"/></Link>
                                    <div className="eventText">
                                        <Link to="register" className="event-title" onClick={() => handleEvent(eventItem)}>{eventItem.eventTitle}</Link>
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

export default Event;
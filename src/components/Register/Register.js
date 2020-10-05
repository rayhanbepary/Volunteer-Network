import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from 'react-hook-form';
import Logo from '../../image/logo.png';
import { useHistory, useLocation } from 'react-router-dom';

const Register = ({eventInfo}) => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/volunteer" } };

    const onSubmit = (data) => {
        const registrationInfo = {
            ...eventInfo,
            ...loggedInUser,
            allInfo: data,
            registrationDate: new Date()
        }

        fetch('https://nameless-inlet-35612.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(registrationInfo)
        })

        history.replace(from);

    }

    return (
        <div className="register-container">
            <div className="container">
                <div className="row">
                    <div className="register-logo">
                        <img src={Logo} style={{width: "150px",height: '50px'}} alt="logo"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 register-content">
                        <h4>Register as a Volunteer</h4>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {errors.name && <span className="error">Name is required</span>}
                            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />

                            {errors.email && <span className="error">Username or Email is required</span>}
                            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email"/>

                            {errors.date && <span className="error">Date is required</span>}
                            <input name="date" ref={register({ required: true })} placeholder="Date"/>

                            {errors.description && <span className="error">Description is required</span>}
                            <input name="description" ref={register({ required: true })} placeholder="Description"/>

                            <input name="books" ref={register({ required: true })} placeholder="Organize books at the library"/>

                            <input type="submit" value="Registration" />
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
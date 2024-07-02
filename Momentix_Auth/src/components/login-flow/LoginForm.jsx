import React, { useState } from 'react'
import "./LoginForm.scss"
import { Button, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../redux/LoginReducer';
import SignupForm from '../signup-flow/SignupForm';
import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '../../graphql/queries';

function LoginForm() {
    const {loading,error, data} = useQuery(GET_USER_DATA)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const usersState = useSelector(state => state.usersState);
    const [needToSignup, setNeedToSignup] = useState(false);
    const [form, setForm] = useState({
        userId: "",
        password: ""
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const proceedToLogin = (e) => {
        e.preventDefault()
        const { userId, password } = form;
        if (!!userId && !!password) {
            dispatch(loginAction.login())
            navigate("/", { state: { userName: userId} })
        }
        else {
            alert("Fill your credentials to login")
        }
    }
    const checkIsUser = () => {
        setNeedToSignup(true)
    }
    return (
        <div className='login-wrapper'>
                {needToSignup
                    ?
                    <SignupForm setNeedToSignup={setNeedToSignup}/>
                    :
                <div className='login-form'>
                    <Typography className='mb-5 head-txt' variant='h4' color="secondary" >Welcome to Momentix</Typography>
                    <TextField value={form.userId} name="userId" onChange={handleChange} label="User name" placeholder='Enter your user name' className="input-field" />
                    <TextField value={form.password} type='password' name="password" onChange={handleChange} label="Password" placeholder='Enter your user password' className="input-field my-3" />
                    <div className='login-action-wrapper mt-3'>
                        <Button type='submit' className='login-btn mb-3' endIcon={<LoginIcon className='login-icon' />} onClick={proceedToLogin}>
                            Proceed to login
                        </Button>
                        <p className='no-account-txt m-0'>Don't have account yet?? <span className='signup-entry' onClick={checkIsUser}>Click here!!</span></p>
                    </div>
                </div>}
            </div>
    )
}

export default LoginForm
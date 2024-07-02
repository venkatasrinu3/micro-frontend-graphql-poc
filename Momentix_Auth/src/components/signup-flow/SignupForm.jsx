import React, { useState } from 'react'
import "./SignupForm.scss"
import { Button, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_NEW_USER, GET_USER_DATA } from '../../graphql/queries';

function SignupForm({ setNeedToSignup }) {
    const navigate = useNavigate()
    const [addUser, { loading, error, data }] = useMutation(ADD_NEW_USER,{
        refetchQueries:[
            {
                query: GET_USER_DATA
            }
        ]
    });
    const {loading: user,error: getError,data: newUserList} = useQuery(GET_USER_DATA);
    const usersState = useSelector(state => state.usersState);
    console.log("thuis is the users State ====>", usersState)
    const [form, setForm] = useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = async (name, age, gender, email) => {
        try {
            await addUser({ variables: { name: name, age: parseInt(age), gender: gender, email: email } })
        }
        catch (err) {
            console.error(err);
        }
    }
    const proceedToLogin = (e) => {
        e.preventDefault()
        const { name, age, gender, email, password } = form;
        if (!!name && !!age && !!gender && !!email && !!password) {
            console.log("total users List",newUserList.users);
            if(!newUserList.users.map(ele=>ele.name).includes(name)){
                handleSubmit(name, age, gender, email)
                alert("User created successfully!!!")
                setTimeout(() => {
                    setNeedToSignup(false)
                }, 800);
            }else{
                alert("User already exists !!!")
            }
        }
        else {
            alert("Enter all the details")
        }
    }
    const checkIsUser = () => {
        setNeedToSignup(false)
    }
    return (
        <div className='signup-form'>
            <Typography className='head-txt' variant='h4' color="secondary" >Welcome to Momentix</Typography>
            <TextField value={form.name} name="name" onChange={handleChange} label="Name" required placeholder='Enter your name' className="input-field" />
            <TextField value={form.age} type='number' name="age" onChange={handleChange} label="Age" placeholder='Enter your age' className="input-field" />
            <TextField value={form.gender} type='text' name="gender" onChange={handleChange} label="Gender" placeholder='Enter your gender' className="input-field" />
            <TextField value={form.email} type='email' name="email" onChange={handleChange} label="Email" placeholder='Enter your Email ID' className="input-field" />
            <TextField value={form.phone} type='text' name="phone" onChange={handleChange} label="Mobile number" placeholder='Enter your mobile number' className="input-field" />
            <TextField value={form.passowrd} type='password' name="password" onChange={handleChange} label="Password" placeholder='Enter your password' className="input-field" />
            <TextField value={form.confirmPassword} type='password' name="confirmPassword" onChange={handleChange} label="Confirm password" placeholder='Re-Enter your password' className="input-field" />
            <div className='login-action-wrapper'>
                <Button type='submit' className='login-btn mb-3' endIcon={<LoginIcon className='login-icon' />} onClick={proceedToLogin}>
                    Welcome to Momentix
                </Button>
                <p className='no-account-txt m-0'>Already an user <span className='signup-entry' onClick={checkIsUser}>Click here!!</span></p>
            </div>
        </div>
    )
}

export default SignupForm
import React, { useContext } from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {ProfileContext} from '../contexts/ProfileContext'
import Form from '../components/Form'
import { registerUser, loginUser } from '../services/Authservice'

export default function Menu() {
    //Access login from context
    const {login} = useContext(ProfileContext)

    //Navigate for redirecting after login
    const navi = useNavigate()

    //State for form input
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //Server reponse or error
    const [data, setData] = useState('')
    const [err, setErr] = useState(null)

    //Toggle between login or registration form
    const [isLoginMode, setIsLoginMode] = useState(true)

    //Text that changes based on login/signup mode
    const submitBtnTxt = isLoginMode ? 'Login' : 'Sign Up'
    const toggleBtnTxt = isLoginMode ? 'Sign up' : 'Login'
    const modeText = isLoginMode ? 'No accounts? =(' : 'Already have an account? Login.'

    //Form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const calledFunction = isLoginMode ? loginUser : registerUser
            const result = await calledFunction(username, password)

            setData(result)

            if(result.token) {
                login(result.token)
                navi('/dashboard')
            }
        } catch (err) {
            console.log(err)
            setErr(err.message)
        }
    }
    
    //Toggle between login and signup modes
    const handleSignUpText = () => {
        setIsLoginMode(prev => !prev)
    }

    //Handle input updates
    const handleUsernameInput = (e) => {
        setUsername(e.target.value)
    }
    //Handle pass
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            {/*Server messages*/}
            <div className={data.success ? 'status ok-status' : 'status err-status'}>
                {data.message}
            </div>

            {/*Reusable form*/}
            <Form
                handleSubmit={handleSubmit}
                handleUsernameInput={handleUsernameInput}
                handlePasswordInput={handlePasswordInput}
                username={username}
                password={password}
                isLoginMode={isLoginMode}
                submitBtnTxt={submitBtnTxt}
            />

            {/*Toggle login/signup*/}
            <div className="signup-wrapper">
                <p>{modeText}</p>
                <button onClick={handleSignUpText} className='login-btn signup-btn'>
                    {toggleBtnTxt}
                </button>
            </div>
        </>

    )
    
}

import React from 'react'
import {ProfileContext} from '../contexts/ProfileContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    //extract user info and logout function from context
    const {user, logout} = useContext(ProfileContext)
    
    //Navigate for redirecting after logout
    const navi = useNavigate()


    const handleLogout = () => {
        const confirmation = confirm('Are you sure you want to log out?')
        if(confirmation) {
            logout()
            navi('/')
        }
    }

    return (
        <div>
        <h1>You have arrived at your dashboard {user?.username} Nice. Baseball cards to come.</h1>

        <button onClick={handleLogout} className = 'login-btn logout-btn'>Logout</button>
        </div>
    )
}

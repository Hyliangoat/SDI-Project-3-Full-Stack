import { createContext, useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode'

//create context
export const ProfileContext = createContext()

//define provider component
export const ProfileProvider = ({children}) => {
    //store user info in state
    const [user, setUser] = useState('')

    //function to log in a user
    const login = (token) => {
        localStorage.setItem('token', token); //save it to localstorage
        const decoded = jwtDecode(token) //decode the token to get user info
        setUser({user: decoded.username}) //store user info in contextstate
    }

    //logout
    const logout = () => {
        localStorage.removeItem('token')
        setUser('')
    }

    //On intial load, check for token and decode it
    //Persist login across refreshes
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            const decoded = jwtDecode(token) //decode on page refresh
            setUser({user: decoded.username}) //restore user context state
        }
    }, [])

        //Provide context value to children
    const value = {user, login, logout}

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    ) //render all children inside this provider

    }






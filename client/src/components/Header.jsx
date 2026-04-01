import React from 'react'
import { useContext } from 'react'
import {ProfileContext} from '../contexts/ProfileContext'
import { useNavigate } from 'react-router-dom'    
import './Header.css'

export default function Header({setDetailPage, setProfilePage, setSettingsPage}) {
  const {logout} = useContext(ProfileContext)
  const navi = useNavigate()


  const handleLogout = () => {
    const confirmation = confirm('Are you sure you want to log out?')
    if(confirmation) {
        logout()
        navi('/')
    }
  }

  const homePage = () => {
    setDetailPage(false)
    setProfilePage(false)
    setSettingsPage(false)
  }

  const profilePage = () => {
    setDetailPage(false)
    setProfilePage(true)
    setSettingsPage(false)
  }

  const settingsPage = () => {
    setDetailPage(false)
    setProfilePage(false)
    setSettingsPage(true)
  }

  return (
    <div className='headerBox'>
        <button onClick={() => homePage()}>Home</button>   
        <button onClick={() => profilePage()}>Profile</button>
        <h1>Baseball Cards</h1>
        <button onClick={() => settingsPage()}>Settings</button>
        <button onClick={() => handleLogout()}>Logout</button>
    </div>
  )
}

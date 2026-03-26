import React from 'react'
import MainRouter from './Router'
import { ProfileProvider } from './contexts/ProfileContext'


function App() {

  return (
    <>
    <ProfileProvider>
      <MainRouter />
    </ProfileProvider>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import {ProfileContext} from '../contexts/ProfileContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import {getCards} from '../services/Cardservice'

export default function Dashboard() {
    //extract user info and logout function from context
    const {user, logout} = useContext(ProfileContext)
    const [cards, setCards] = useState([])
    
    //Navigate for redirecting after logout
    const navi = useNavigate()


    useEffect(() => {
        async function fetchin(){
            let cardList = await getCards();
            setCards(cardList);
        }

        fetchin()
    }, [])

    const handleLogout = () => {
        const confirmation = confirm('Are you sure you want to log out?')
        if(confirmation) {
            logout()
            navi('/')
        }
    }

    if(cards.length < 1){
        return(
            <p>Loading...</p>
        )
    }

    return (
        <div>
        <h1>You have arrived at your dashboard {user?.username}</h1>
        <h2>Your cards</h2>
        {cards.map (card => {
            return(
                <div className='individual-card'>
                    <Card key={card.id} name={card.name} location={card.location_of_origin} age={card.age} workplace={card.workplace} job={card.job_title} image={card.image_url}/>
                </div>
            )
        })}

        <button onClick={handleLogout} className = 'login-btn logout-btn'>Logout</button>
        </div>
    )
}

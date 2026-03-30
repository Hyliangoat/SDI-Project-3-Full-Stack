import React, { useEffect, useState } from 'react'
import {ProfileContext} from '../contexts/ProfileContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import {getCards, createCard} from '../services/Cardservice'
import Header from '../components/Header'

export default function Dashboard() {
    //extract user info and logout function from context
    const {user, logout} = useContext(ProfileContext)
    const [cards, setCards] = useState([])
    const [image, setImage] = useState(null)
    
    //Navigate for redirecting after logout
    const navi = useNavigate()


    useEffect(() => {
        async function fetchin(){
            let cardList = await getCards();
            setCards(cardList);
        }

        fetchin()
    }, [])

    const updatePage = async () => {
        let cardList = await getCards();
        setCards(cardList);
        form.reset()
        setImage(null)
    }



    const handleLogout = () => {
        const confirmation = confirm('Are you sure you want to log out?')
        if(confirmation) {
            logout()
            navi('/')
        }
    }
    const handleChange = (e) => {
        setImage(e.target.files[0])
    }
    const handleCreateSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const age = form.age.value;
        const location = form.location.value;
        const workplace = form.workplace.value;
        const job = form.job.value;
        const image = form.image.files[0];
        await createCard({name, location, age, workplace, job, image})


        updatePage()
    }


    if(cards.length < 1){
        return(
            <div className='noCards'>
                <p>No cards to display</p>
                <p>Please create your first card.</p>
                <form onSubmit={handleCreateSubmit}>
                    <input type='text' name='name' placeholder='name' />
                    <input type='text' name='location' placeholder='location they are from' />
                    <input type='text' name='age' placeholder='age' />
                    <input type='text' name='workplace' placeholder='their workplace' />
                    <input type='text' name='job' placeholder='their full job title' />
                    <input type='file' accept='image/*' name='image' onChange={handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

    return (
        <div className='pageContainer'>
        <Header />
        <h1>You have arrived at your dashboard {user?.username}</h1>
        <h2>Your cards</h2>
        {cards.map (card => {
            return(
                <div className='individualCard' key={card.id}>
                    <Card name={card.name} location={card.location_of_origin} age={card.age} workplace={card.workplace} job={card.job_title} image={card.image_url}/>
                </div>
            )
        })}

        <h3>New card input temp form</h3>

        <form onSubmit={handleCreateSubmit}>
            <input type='text' name='name' placeholder='name' />
            <input type='text' name='location' placeholder='location they are from' />
            <input type='text' name='age' placeholder='age' />
            <input type='text' name='workplace' placeholder='their workplace' />
            <input type='text' name='job' placeholder='their full job title' />
            <input type='file' accept='image/*' name='image' onChange={handleChange} />
            <button>Submit</button>
        </form>
        <p>Image preview</p>
        {image && <img src={URL.createObjectURL(image)} alt='preview' height='100px' width='100px' />}

        <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

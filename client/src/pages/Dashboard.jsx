import React, { useRef, useEffect, useState } from 'react'
import {ProfileContext} from '../contexts/ProfileContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import {getCards, createCard, deleteCard} from '../services/Cardservice'
import Header from '../components/Header'
import DetailedCard from '../components/DetailedCard'
import UpdateCardForm from '../components/UpdateCardForm'
import SearchBox from '../components/SearchBox'
import ProfilePage from '../components/ProfilePage'
import Settings from '../components/Settings'
import './Dashboard.css'
import '../styles.css'


export default function Dashboard() {
    const {user, logout} = useContext(ProfileContext)
    const [cards, setCards] = useState([])
    const [image, setImage] = useState(null)
    const [detailPage, setDetailPage] = useState(false)
    const [profilePage, setProfilePage] = useState(false)
    const [settingsPage, setSettingsPage] = useState(false)
    const [editPage, setEditPage] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)
    const [searchVal, setSearchVal] = useState('')
    const formRef = useRef(null)
    const [showForm, setShowForm] = useState(false);
    
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
        setImage(null)

        if(selectedCard) {
            const updatedCard = cardList.find(card => card.id === selectedCard.id)
            setSelectedCard(updatedCard)
        }
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
        const details = form.details.value;
        const phone = form.phone.value;
        const email = form.email.value;
        await createCard({name, location, age, workplace, job, image, details, phone, email})

        formRef.current.reset();
        setImage(null)
        updatePage()
        setShowForm(prev => !prev)
    }


    const handleDelete = async (id) => {
        await deleteCard(id)
        updatePage()
    }

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    if(!user){
        return(
            <p>You don't belong here. Go back.</p>
        )
    }
    if(cards.length < 1){
        return(
            <div className='noCards'>
                <p>No cards to display</p>
                <p>Please create your first card.</p>
                <form ref={formRef} onSubmit={handleCreateSubmit}>
                    <input type='text' name='name' placeholder='name' />
                    <input type='text' name='location' placeholder='location they are from' />
                    <input type='text' name='age' placeholder='age' />
                    <input type='text' name='workplace' placeholder='their workplace' />
                    <input type='text' name='job' placeholder='their full job title' />
                    <input type='file' accept='image/*' name='image' onChange={handleChange} />
                    <textarea name='details' placeholder='details about them'></textarea>
                    <input type='text' name='phone' placeholder='their phone number' />
                    <input type='text' name='email' placeholder='their email' />
                    <button>Submit</button>
                </form>
                <button onClick={() => handleLogout()}>Logout</button>
            </div>
        )
    }
    
    if (!detailPage && !profilePage && !settingsPage) {
        return (
            <div className='pageContainer'>
            <div className={theme == 'dark' ? 'headerContainerDark' : 'headerContainer'}>
                <Header className='headerContainer' setDetailPage={setDetailPage} setProfilePage={setProfilePage} setSettingsPage={setSettingsPage} />
            </div>
            <div className='titleContainer'>
                <h2>{user?.username}'s Cards</h2>
                <SearchBox searchVal={setSearchVal}/>
                <p>{SearchBox.searchVal}</p>
            </div>
            <div className='cardsContainer'>
                {cards.map (card => {
                    if(card.name.toLowerCase().includes(searchVal.toLowerCase())){
                        return(
                            <div key={card.id} className={theme == 'dark' ? 'cardAndButtonsDark' : 'cardAndButtons'}>
                                <div className='individualCard' onClick = {() => {
                                    setSelectedCard(card)
                                    setDetailPage(true)
                                    console.log('clicked a pic')
                                }}>
                                    <Card 
                                        id={card.id}
                                        name={card.name} 
                                        location={card.location_of_origin} 
                                        age={card.age} 
                                        workplace={card.workplace} 
                                        job={card.job_title} 
                                        image={card.image_url} 
                                    />
                                </div>
                                <button onClick={() => {
                                    setSelectedCard(card)
                                    handleDelete(card.id)
                                }} className='deleteButton'>Delete</button>
                            </div>
                        )
                }})}
            </div>
            <div className='createCardContainer'>
                <button onClick={() => setShowForm(prev => !prev)}>
                {showForm ? "Cancel" : "Create Card"}
                </button>
            {showForm && ( <>
            <h3>Create Card</h3>
                <form ref={formRef} onSubmit={handleCreateSubmit}>
                    <input type='text' name='name' placeholder='name' />
                    <input type='text' name='location' placeholder='location they are from' />
                    <input type='text' name='age' placeholder='age' />
                    <input type='text' name='workplace' placeholder='their workplace' />
                    <input type='text' name='job' placeholder='their full job title' />
                    <input type='file' accept='image/*' name='image' onChange={handleChange} />
                    <textarea name='details' placeholder='details about them'></textarea>
                    <input type='text' name='phone' placeholder='their phone number' />
                    <input type='text' name='email' placeholder='their email' />
                    <button>Submit</button>
                </form>
                <p>Image preview</p>
                {image && <img src={URL.createObjectURL(image)} alt='preview' height='100px' width='100px' />}
                </>
            )}
            </div>

            </div>
        )
    }

    if (detailPage && !editPage) {
        return(
            <div>
                <Header setDetailPage={setDetailPage} setProfilePage={setProfilePage} setSettingsPage={setSettingsPage} />
                <div className = 'detailedContainer'>
                    <DetailedCard name={selectedCard.name} location={selectedCard.location_of_origin} age={selectedCard.age} workplace={selectedCard.workplace} job={selectedCard.job_title} image={selectedCard.image_url} details={selectedCard.description} phone={selectedCard.phone_number} email={selectedCard.email} />
                    <button onClick={() => setEditPage(true)}>Edit</button>
                </div>
            </div>
        )

    }

    if (detailPage && editPage) {
        return(
            <div>
                <Header setDetailPage={setDetailPage} setProfilePage={setProfilePage} setSettingsPage={setSettingsPage} />
                <div className = 'detailedContainer'>
                    <DetailedCard name={selectedCard.name} location={selectedCard.location_of_origin} age={selectedCard.age} workplace={selectedCard.workplace} job={selectedCard.job_title} image={selectedCard.image_url} details={selectedCard.description} phone={selectedCard.phone_number} email={selectedCard.email} />
                    <button onClick={() => setEditPage(false)}>Cancel edit</button>
                    <div className='updateContainer'>
                        <UpdateCardForm id={selectedCard.id} name={selectedCard.name} location={selectedCard.location_of_origin} age={selectedCard.age} workplace={selectedCard.workplace} job={selectedCard.job_title} image={selectedCard.image_url} details={selectedCard.description} phone={selectedCard.phone_number} email={selectedCard.email} setEditPage={setEditPage} updatePage={updatePage}/>
                    </div>
                </div>
           </div>
        )
    }
    
    if(profilePage) {
        return(
            <div>
                <Header setDetailPage={setDetailPage} setProfilePage={setProfilePage} setSettingsPage={setSettingsPage} />
                <ProfilePage />
            </div>
        )
    }

    if(settingsPage) {
        return(
            <div>
                <Header setDetailPage={setDetailPage} setProfilePage={setProfilePage} setSettingsPage={setSettingsPage} />
                <Settings />
            </div>
        )
    }
}

const url = 'http://localhost:8080/api/cards';

//Create/post a card



//Get/fetch all cards
const authFetch = (url, options = {}) => {
    const token = localStorage.getItem("token")
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`
        }
    })
}


const getCards = async () => {

    try{
        const cardList = await authFetch(url)
        let cards = await cardList.json();
        console.log(cards)
        return cards;
    } catch(err){
        console.log('Something went wrong')
    }
}

const createCard = async ({name, location, age, workplace, job, image}) => {

    try{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location_of_origin', location);
        formData.append('age', age);
        formData.append('workplace', workplace);
        formData.append('job_title', job);
        formData.append('image', image);
        
        const res = await authFetch(url, {
            method: 'POST',
            body: formData
        })
        

         if (!res.ok) {
            console.error('Failed to create card')
            return res.json(); 
        }

        return res.json(); 
    }catch(err)
    {
        console.log('Uh oh spaghettios no card')
    }
}

const deleteCard = async (id) => {
    try{
        const res = await authFetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        if (!res.ok) {
            console.error('Failed to delete card')
            return res.json(); 
        }
        return res.json(); 
    }catch(err)
    {
        console.log('Uh oh spaghettios we couldnt delete it')
    }
}

export {getCards, createCard, deleteCard}
const url = 'http://localhost:8080/api/cards';

//Create/post a card



//Get/fetch all cards
const authFetch = (url, options = {}) => {
    const token = localStorage.getItem("token")
    console.log(token)
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

    console.log(name, location, age, workplace, job, image)
    try{
        const res = await authFetch(url,{
            method: 'POST', //Post request to send data
            headers: {
                'Content-Type': 'application/json' //sending json data
            },
            body: JSON.stringify({name, location, age, workplace, job, image}) //Payload with all the card info
        })

         if (!res.ok) {
            console.error('Failed to create card')
            return res.json(); //Still return error message from server
        }

        return res.json(); //Return server response (success message or token)
    }catch(err)
    {
        console.log('Uh oh spaghettios no card')
    }
}

export {getCards, createCard}
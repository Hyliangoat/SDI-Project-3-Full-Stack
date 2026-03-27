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

export {getCards}
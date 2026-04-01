const url = 'http://localhost:8080/api/cards';


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
        return cards;
    } catch(err){
        console.log('Something went wrong')
    }
}

const createCard = async ({name, location, age, workplace, job, image, details, phone, email}) => {

    try{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location_of_origin', location);
        formData.append('age', age);
        formData.append('workplace', workplace);
        formData.append('job_title', job);
        formData.append('image', image);
        formData.append('description', details);
        formData.append('phone_number', phone);
        formData.append('email', email);
        
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

const updateCard = async (id, {name, location, age, workplace, job, image, details, phone, email}) => {

    try{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location_of_origin', location);
        formData.append('age', age);
        formData.append('workplace', workplace);
        formData.append('job_title', job);
        if (image) {
            formData.append('image', image);
        }
        formData.append('description', details);
        formData.append('phone_number', phone);
        formData.append('email', email);
        
        const res = await authFetch(`${url}/${id}`, {
            method: 'PUT',
            body: formData
        })
        if (!res.ok) {
            console.error('Failed to update card')
            return res.json();
        }
        return res.json();
    } catch (err) {
        console.log('Uh oh spaghettios we couldnt update it')
    }
}

export {getCards, createCard, deleteCard, updateCard}
//Base url of our express backend server
const url = 'http://localhost:8080/api';

//Function to handle user registration
const registerUser = async (username, password) => {
    try{
        const res = await fetch(`${url}/auth/register`, {
            method: 'POST', //Post request to send data
            headers: {
                'Content-Type': 'application/json' //sending json data
            },
            body: JSON.stringify({username, password}) //Payload with username and password
        })

        //Check successful
        if (!res.ok) {
            console.error('Failed to register user')
            return res.json(); //Still return error message from server
        }

        return res.json(); //Return server response (success message or token)
            
    } catch (err) {
        console.error('Error registering user:', err)
        throw err; //Rethrow to be handled by caller
    }
}

//Function to handle user login
const loginUser = async (username, password) => {
    try{
        const res = await fetch(`${url}/auth/login`, {
            method: 'POST', //Post request to send data
            headers: {
                'Content-Type': 'application/json' //sending json data
            },
            body: JSON.stringify({username, password}) //Payload with username and password
        })

        if(!res.ok) {
            console.error('Failed to login user')
            return res.json(); //Still return error message from server
        }

        return res.json(); //Return server response (success message or token)
        
    } catch (err) {
        console.error('Error logging in user:', err)
        throw err; //Rethrow to be handled by caller
        }
}

export {registerUser, loginUser}

//reusable form component for login and registration pages

export default function Form(props) {
    return(
        <form className='login-form' onSubmit = {props.handleSubmit}>
            <input
                onChange={props.handleUsernameInput}
                value={props.username}
                type='text'
                placeholder="Username" />
            <input
                onChange={props.handlePasswordInput}
                value={props.password}
                type='password'
                placeholder="Password" />
            <button className='login-btn'>
                {props.submitBtnTxt}
            </button>
        </form>
    )
}
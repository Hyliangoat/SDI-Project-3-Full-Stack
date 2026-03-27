//reusable form component for cards

export default function NewCardForm(props) {
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
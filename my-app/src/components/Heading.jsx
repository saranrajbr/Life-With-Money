import logo from '../assets/logo.png'
import '../App.css'

export default function Heading(){
    return (
        <>
        <header>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='title'>
                    <h1 className='main-title'>Life With Money</h1>
                    <h2 className='sub-title'>Track daily expenses. Build better financial habits.</h2>
                </div>
                <div className='buttons'>
                    <button className='login-button'>
                        login
                    </button>
                    <button className='Register-button'>
                        Register
                    </button>
                </div>
            </div>
        </header>
        </>
    )
}
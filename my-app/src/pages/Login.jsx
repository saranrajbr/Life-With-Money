import '../App.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
export default function Login(){
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
                            <Link to="/"><button className='login-button'>Home</button></Link>
                            <Link to="/Register"><button className='Register-button'>Register</button></Link>
                        </div>
                    </div>
                </header>
                <div className='loginbody'>
                    <div className='card'>
                        <h2>LOGIN</h2>
                        <form action="">
                        <div className='inputbox'>
                            <label>EMAIL :</label>
                            <input type="email" placeholder='XXXX@gmail.com'/>
                        </div>
                        <div className='inputbox'>
                            <label>PASSWORD :</label>
                            <input type="password" placeholder='12345'/>
                        </div>
                        <button className='login-bttn'>LOGIN</button>
                        </form>
                    </div>
                    <p className='or'>OR</p>
                    <button className='googlecard'>USING GOOGLE ACCOUNT</button>
                </div>
                
        </>
    );
}
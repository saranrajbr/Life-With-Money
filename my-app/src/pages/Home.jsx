import React from "react";
import {Routes,Route,Link } from "react-router-dom"
import '../App.css'
import pigmoney from '../assets/pigmoney.png';
import moneyhand from '../assets/moneyhand.png';
import logo from '../assets/logo.png'

export default function Home(){
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
        <div className="content1">
                <div className="text1">
                    <p>Track Your Money. Control Your Life.</p>
                    <p>A smart calendar-based expense manager that helps you understand where your money goes — day by day, month by month.</p>
                </div>
                <img src={moneyhand} alt="handmoney" />
            </div>
        </>
    );
}
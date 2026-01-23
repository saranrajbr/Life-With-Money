import React from "react";
import {Routes,Route,Link } from "react-router-dom"
import Heading from "../components/Heading";
import '../App.css'
import pigmoney from '../assets/pigmoney.png';
import moneyhand from '../assets/moneyhand.png';

export default function Home(){
    return (
        <>
            <Heading />


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
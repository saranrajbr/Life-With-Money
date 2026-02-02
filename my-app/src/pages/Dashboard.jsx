import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import logo from '../assets/logo.png'
import dashboard from '../assets/dashboard.png'
import budgets from '../assets/budgets.png'
import profile from '../assets/Profile.png'
import arrow from '../assets/arrow.png'


const handleDateClick = (info) => {

  };


export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className='side-navigation'>
        <div className='side-heading'>
          <img src={logo} alt="logo" />
          <h1>Life With Money</h1>
        </div>
        <div className='side-options'>
          <div className='dashboard'>
            <img src={dashboard} alt="dashboard logo" />
            <p>Dashboard</p>
          </div>
          <div className='budgets'>
            <img src={budgets} alt="budgets logo" />
            <p>Budgets</p>
          </div>
          <div className='profiles'>
            <img src={profile} alt="profile logo" />
            <p>Profiles</p>
          </div>
        </div>
        <div className='log-out'>
          <p>Logout</p>
          <img src={arrow} alt="arrow symbol" />
        </div>
      </div>
    </div>
  );
}

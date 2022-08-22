import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiUserShared2Line } from 'react-icons/ri';
import Popup from 'reactjs-popup';
import '../App.css';
import CalendarDashboard from './CalendarDashboard';
import DashboardComponents from './DashboardComponents';
import { connect } from 'react-redux';
import { logout } from '../actions';
import { useNavigate } from 'react-router';


const Dashboard = ({ dispatch }) => {
  const push = useNavigate();
  const logOut = () => {
    dispatch(logout());
    push('/');
  };

  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h2>Fitness Corp</h2>
        <div className='dash-popup'>
          <Popup
            trigger={<button className="notif-item"><IoNotificationsOutline /></button>}
            position="bottom left"
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            arrow={true}
          >
            <div className="menu">
              <div className="menu-item">Checkout your stats below!</div>
              <div className="menu-item"> Sign up for more classes</div>
            </div>
          </Popup>
          <Popup
            trigger={
              <button><RiUserShared2Line /></button>
            }
            position="bottom left"
            on={['hover', 'focus']}
            closeOnDocumentClick
          >
            <button className="logout" onClick={logOut}>LOG OUT</button>
          </Popup>
        </div>
      </div>

      <div className='dashboard-membership'>
        <h4>MEMBERSHIP:</h4>
        <p>3 MONTHS</p>
        <p>$199.99</p>
        <p>START DATE: 8/1/2022 - END DATE: 11/1/2022</p>
      </div>

      <div className='dashboard-weather'>
        {/* Weather component */}
      </div>

      <div className='dashboard-progress'>
        <DashboardComponents />
      </div>

      <div className='dashboard-calendar'>
        <CalendarDashboard />
      </div>

      <div className='dashboard-footer'>
        <h3>Fitness Corp</h3>
        <p>Copyright</p>
      </div>
    </div >
  );
};

export default connect()(Dashboard);

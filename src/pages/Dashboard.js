import React from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiUserShared2Line } from 'react-icons/ri';
import Popup from 'reactjs-popup';
import '../App.css';
import CalendarDashboard from './CalendarDashboard';
import DashboardComponents from './DashboardComponents';
import { connect } from 'react-redux';
import { logout } from '../actions';
import { useNavigate } from 'react-router';


const Dashboard = ({dispatch}) => {
  const push = useNavigate()
  const logOut = () => {
    dispatch(logout())
    push('/')
  }

  return (
    <div>
      <div className='dashboard-header'>
        <h2>Fitness Corp</h2>
        <input
          type='search'
          placeholder='Search'
        />
        <button><GiMagnifyingGlass /></button>
        <Popup
          trigger={<button className="menu-item"><IoNotificationsOutline /></button>}
          position="bottom left"
          on="hover"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          arrow={false}
        >
          <div className="menu">
            <div className="menu-item"> item 1</div>
            <div className="menu-item"> item 2</div>
            <div className="menu-item"> item 3</div>
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
          <button onClick={logOut}>Log out</button>
        </Popup>
      </div>

      <div className='dashboard-membership'>
        <h4>Membership:</h4>
        <p>3 Months</p>
        <p>$199.99</p>
        <p>Start date: 8/1/2022 -<br /> End date: 11/1/2022</p>
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
}

export default connect()(Dashboard)

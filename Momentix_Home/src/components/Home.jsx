import React from 'react'
import "./Home.scss"
import { useLocation } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import InfiniteScrollComponent from './ScrollComponent/InfiniteScrollComponent';
import { Card } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AemContent from './aem-components/ContentFragment';

function Home({ handleLogout }) {
  const location = useLocation();
  return (
    <div className='home-page-wrapper'>
      <Card className='app-header mb-5'>
        <MenuIcon style={{ marginLeft: "20px", cursor: "pointer" }} />
        <div className='profile-actions'>
          <AccountCircleIcon />
          <span>{location?.state?.userName ? location.state.userName : "Robinhood"}</span>
          <LogoutIcon className="logout-icon" onClick={() => handleLogout()} />
        </div>
      </Card>
      
        <AemContent />
      
    </div>
  )
}

export default Home
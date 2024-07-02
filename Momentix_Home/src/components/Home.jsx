import React from 'react'
import "./Home.scss"
import { useLocation } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import InfiniteScrollComponent from './ScrollComponent/InfiniteScrollComponent';
import { Card } from '@mui/material';

function Home() {
  const location = useLocation();

  return (
    <div className='home-page-wrapper'>
      <Card className='app-header mb-5'>
        <div className='profile-actions'>
          <AccountCircleIcon />
          <span>{location?.state?.userName ? location.state.userName : "Robinhood"}</span>
          <LogoutIcon className="logout-icon"/>
        </div>
      </Card>
      <InfiniteScrollComponent />
    </div>
  )
}

export default Home
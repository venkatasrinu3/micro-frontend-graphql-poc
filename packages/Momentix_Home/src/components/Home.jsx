import React, { useEffect, useState } from 'react'
import "./Home.scss"
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import InfiniteScrollComponent from './ScrollComponent/InfiniteScrollComponent';
import { Card, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navlist = [
  {
    id: 1,
    route: "dashboard",
    itemName: "Dashboard"
  },
  {
    id: 2,
    route: "/aem-content",
    itemName: "AEM content"
  }
]

function Home({ handleLogout }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [authData, setAuthData] = useState({})

  const toggleDrawer = (isOpen) => {
    setOpen(isOpen)
  }

  const handleCustomEvent = (event) => {
    console.log(event.detail.data)
  }

  useEffect(() => {
    window.addEventListener("logout", handleCustomEvent)
  }, [])

  const navRouting = (route) => {
    navigate(route)
  }
  console.log("This is the location", location)
  return (
    <div className='home-page-wrapper'>
      <Card className='app-header mb-5'>
        <MenuIcon style={{ marginLeft: "20px", cursor: "pointer" }} onClick={() => toggleDrawer(true)} />
        <div className='profile-actions'>
          <AccountCircleIcon />
          <span>{location?.state?.userName ? location.state.userName : "Robinhood"}</span>
          <LogoutIcon className="logout-icon" onClick={handleLogout} />
        </div>
      </Card>
      <Drawer anchor='left'
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            position: "relative",
            top: "72px",
            color: "white",
            minHeight: "calc(100vh - 72px)",
            background: "rgba(0,0,0,0.4)"
          },
        }}
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        <List>
          {Navlist?.map((nav) => {
            return (
              <ListItem key={nav.id}>
                <ListItemButton onClick={() => navRouting(nav.route)}>
                  <ListItemText primary={nav.itemName} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
      {location.pathname === "/" ?
        <div className='Scroll-wrapper'>
          <InfiniteScrollComponent />
        </div>
        :
        <div className='outlet-wrapper'>
          <Outlet />
        </div>

      }

    </div>
  )
}

export default Home
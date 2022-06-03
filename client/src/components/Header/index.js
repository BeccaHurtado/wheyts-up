// import React from "react";
// import { Link } from "react-router-dom";
// import { Menu, MenuItem, Button } from "@mui/material";
// // import { useQuery } from '@apollo/client'
// // import { QUERY_ROUTINES } from '../utils/queries'

// import Auth from "../../utils/auth";

// const Header = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//     logout();
//   };

//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };

//   return (
//     <header className="bg-secondary mb-4 py-2 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <Link to="/">{/* <h1>Wheyts Up</h1> */}</Link>

//         <nav className="text-center">
//           {Auth.loggedIn() ? (
//             <div>
//               {/* <Link to="/profile">My Routines</Link> */}
//               <Button
//                 id="basic-button"
//                 aria-controls={open ? "basic-menu" : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? "true" : undefined}
//                 onClick={handleClick}
//               >
//                 Dashboard
//               </Button>
//               <Menu
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 MenuListProps={{
//                   "aria-labelledby": "basic-button",
//                 }}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={logout}>Logout</MenuItem>
//                 {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
//               </Menu>
//               {/* <a href="/" onClick={logout}>
//                                 Logout
//                             </a> */}
//             </div>
//           ) : (
//             <div>
//               <Button
//                 id="basic-button"
//                 aria-controls={open ? "basic-menu" : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? "true" : undefined}
//                 onClick={handleClick}
//               >
//                 Dashboard
//               </Button>
//               <Menu
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 MenuListProps={{
//                   "aria-labelledby": "basic-button",
//                 }}
//               >
//                 <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
//                 <MenuItem onClick={handleClose}><Link to="/signup">Signup</Link></MenuItem>
//               </Menu>
//               {/* <Link to="/login">Login</Link>
//                             <Link to="/signup">Signup</Link> */}
//             </div>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom"
import { grey } from "@mui/material/colors" 
// const navGrey = grey[500]
// sx={{ bgcolor: grey[500] }}

import Auth from "../../utils/auth"


const pages = ['login', 'signup'];
const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WHEYTS UP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >
                      <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>
                      {page}
                      </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          WHEYTS UP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>
                      {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          {Auth.loggedIn() ? (
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>) : ('')}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import { Link } from "react-router-dom"
// import { grey } from "@mui/material/colors" 
// const navGrey = grey[500]
// sx={{ bgcolor: grey[500] }}
import RoutineForm from '../RoutineForm/index.jsx'
import Auth from "../../utils/auth"

// const pages = ['login', 'signup'];
// const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = ( {client} ) => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <AppBar position='static'>
      <Button href="/">
        <Typography variant="h3" color="white">
        WHEYTS UP
        </Typography>
      </Button>

       {Auth.loggedIn() ? (
         <>
       <Button href="/" onClick={logout}
        >Logout
        </Button>
        <div className="mb-3"><RoutineForm client={client}/></div>
        </>
        ) : (
        <>
        <Button href="/login">Login</Button>
        <Button href="/signup">Signup</Button>
        </>
        )}
    </AppBar>
  )
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // return (
  //   <AppBar position="static">
  //     <Container maxWidth="xl">
  //       <Toolbar disableGutters>
  //         {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
  //         <Typography
  //           variant="h6"
  //           noWrap
  //           component="a"
  //           href="/"
  //           sx={{
  //             mr: 2,
  //             display: { xs: 'none', md: 'flex' },
  //             fontFamily: 'monospace',
  //             fontWeight: 700,
  //             letterSpacing: '.3rem',
  //             color: 'inherit',
  //             textDecoration: 'none',
  //           }}
  //         >
  //           WHEYTS UP
  //         </Typography>

  //         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
  //           <IconButton
  //             size="large"
  //             aria-label="account of current user"
  //             aria-controls="menu-appbar"
  //             aria-haspopup="true"
  //             onClick={handleOpenNavMenu}
  //             color="inherit"
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Menu
  //             id="menu-appbar"
  //             anchorEl={anchorElNav}
  //             anchorOrigin={{
  //               vertical: 'bottom',
  //               horizontal: 'left',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'left',
  //             }}
  //             open={Boolean(anchorElNav)}
  //             onClose={handleCloseNavMenu}
  //             sx={{
  //               display: { xs: 'block', md: 'none' },
  //             }}
  //           >
  //             {pages.map((page) => (
  //               <MenuItem key={page} onClick={handleCloseNavMenu}>
  //                 <Typography textAlign="center" >
  //                     <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>
  //                     {page}
  //                     </Link>
  //                 </Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box>
  //         {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
  //         <Typography
  //           variant="h5"
  //           noWrap
  //           component="a"
  //           href="/"
  //           sx={{
  //             mr: 2,
  //             display: { xs: 'flex', md: 'none' },
  //             flexGrow: 1,
  //             fontFamily: 'monospace',
  //             fontWeight: 700,
  //             letterSpacing: '.3rem',
  //             color: 'inherit',
  //             textDecoration: 'none',
  //           }}
  //         >
  //         WHEYTS UP
  //         </Typography>
  //         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  //           {pages.map((page) => (
  //             <Button
  //               key={page}
  //               onClick={handleCloseNavMenu}
  //               sx={{ my: 2, color: 'white', display: 'block' }}
  //             >
  //               <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>
  //                     {page}
  //               </Link>
  //             </Button>
  //           ))}
  //         </Box>

  //         <Box sx={{ flexGrow: 0 }}>
  //         {Auth.loggedIn() ? (
  //           <Tooltip title="Open settings">
  //             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
  //               <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
  //             </IconButton>
  //           </Tooltip>) : ('')}
  //           <Menu
  //             sx={{ mt: '45px' }}
  //             id="menu-appbar"
  //             anchorEl={anchorElUser}
  //             anchorOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             open={Boolean(anchorElUser)}
  //             onClose={handleCloseUserMenu}
  //           >
  //             {settings.map((setting) => (
  //               <MenuItem key={setting} onClick={handleCloseUserMenu}>
  //                 <Typography textAlign="center">{setting}</Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box>
  //       </Toolbar>
  //     </Container>
  //   </AppBar>
};
export default ResponsiveAppBar;
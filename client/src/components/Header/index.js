import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Button } from "@mui/material";
// import { useQuery } from '@apollo/client'
// import { QUERY_ROUTINES } from '../utils/queries'

import Auth from "../../utils/auth";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    logout();
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">{/* <h1>Wheyts Up</h1> */}</Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <div>
              {/* <Link to="/profile">My Routines</Link> */}
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Dashboard
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
                {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
              </Menu>
              {/* <a href="/" onClick={logout}>
                                Logout
                            </a> */}
            </div>
          ) : (
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Dashboard
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/signup">Signup</Link></MenuItem>
              </Menu>
              {/* <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link> */}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

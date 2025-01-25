import React from 'react';
import {
    AppBar,     // Create a top-level navigation bar
    Toolbar,    // Create a container for elements within an AppBar
    Typography,
    Button, IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>

                {/* App logo - Use '/' to get image from public */}
                <img src="/logo192.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />

                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    username / project name
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
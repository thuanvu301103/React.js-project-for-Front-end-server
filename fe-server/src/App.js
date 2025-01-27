import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { DesListItem, FileStructListItem } from './components/ListItem';
import LngSwitch from './components/LngSwitch';
import { PaginatedList } from './components/List';

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';

function App() {

    /* Handle Dark mode */

    // Get savedMode from localStorage
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    // Handle Theme Change function - Save the change to localStorage
    const handleThemeChange = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    /* List sample Items */
    const listItems = [
        { name: "Magic", descrption: "This is a sample" },
        { name: "Magic 1", descrption: "This is a sample 1" }
    ];

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <LngSwitch />
            <CssBaseline />
            <div className="main-content">
                <Navbar />
                <div>
                    <DesListItem name="Script 1" description="This is a simple description" />
                </div>
                <div>
                    <PaginatedList ListItemComponents={DesListItem} items={listItems} itemsPerPage={1}/>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
  );
}

export default App;

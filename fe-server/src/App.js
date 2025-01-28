import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { DesListItem, FileStructListItem } from './components/ListItem';
import LngSwitch from './components/LngSwitch';
import { PaginatedList } from './components/List';
import {
    Tab, Tabs,
    Switch
} from '@mui/material';
// Theme
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';
// React Router DOM
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// Import Icons
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
// Translation
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

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

    // Tab value
    const [tabValue, setTabValue] = React.useState('overview');
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <LngSwitch />
            <CssBaseline />
            <div className="main-content">
                <Router>
                    <Navbar />
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        aria-label="secondary tabs example"
                        size="small"
                        sx={{
                            '& .MuiTab-root': {
                                textTransform: 'none', // Disable uppercase text
                                minHeight: '45px', // Adjust the minimum height of the tab
                            },
                        }}
                    >
                        <Tab
                            icon={<ImportContactsOutlinedIcon />} iconPosition="start"
                            value="overview"
                            component={Link} to="/"
                            label={t("tab.overview")}
                        />
                        <Tab
                            icon={<DescriptionOutlinedIcon />} iconPosition="start"
                            value="script"
                            component={Link} to="/list"
                            label={t("tab.script")}
                        />
                    </Tabs>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <DesListItem
                                    name="Script 1"
                                    description="This is a simple description"
                                />}
                        />
                        <Route
                            path="/list"
                            element={
                                <PaginatedList
                                    ListItemComponents={DesListItem}
                                    items={listItems} itemsPerPage={1}
                                />}
                        />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </ThemeProvider>
  );
}

export default App;

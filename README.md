# React.js-project-for-Front-end-server
A basic React.js project sample for Front-end-server

## Start React.js project

- Open your terminal: Navigate to the directory where you cloned the repository
```bash
cd path/to/your/directory/React.js-project-for-Front-end-server/fe-server
```
- Install dependencies: Run the following command to install all the necessary dependencies
```bash
npm install
```
- Start the development server: Once the dependencies are installed, start the development server with
```bash
npm start
```

## Kill process (server) running on specific port:
- Find PID of server running on port:
```bash
netstat -ano | findstr :<Port number>
```
- Kill that process:
```bash
taskkill /F /PID <PID>
```

## Change Server port
The port for the React development server is determined by the ```react-scripts``` package, which is part of ```Create React App```. By default, it runs on port ```3000```. However, you can change the port by creating a ```.env``` file in the root directory of your project and adding the following line:
```bash
PORT=3001
```

## Install Material-UI
- Material-UI is a popular React UI framework that implements Google's Material Design principles.
- Run the following command to install Material-UI and its dependencies:
```bash
npm install @mui/material @emotion/react @emotion/styled --save-dev
```

## Basic structure for a React.js Front-end server

```
fe-server/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── serviceWorker.js
│   └── theme.js
├── .env
├── .gitignore
├── package.json
└── README.md

```
Explanation:
- ```node_modules/```: Contains all the ```npm``` packages installed for the project.
- ```public/```: Contains static files like ```index.html```, which is the entry point of the React application.
- ```src/```: Contains the source code of the React application.
- ```assets/```: Contains assets like images and styles.
- ```components/```: Contains reusable components like Header, Footer, etc.
- ```pages/```: Contains page components like Home, About, etc.
- ```App.js```: The main component that includes all other components.
- ```index.js```: The entry point of the React application.
- ```serviceWorker.js```: Used for progressive web app features.
- ```.gitignore```: Specifies which files and directories to ignore in version control.
- ```.env```: a simple text file used to store environment variables for your project.
- ```package.json```: Contains metadata about the project and its dependencies.
- ```README.md```: A markdown file with information about the project.

## Theme Color
- Create a Theme File: Create a new file called ```theme.js``` in the ```src``` directory and define your custom themes for both light and dark modes.
- Apply the Theme: Wrap your application with the ```ThemeProvider``` component to apply the custom themes. Update your ```index.js``` file
```javascript
import React, {useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';

function App() {

    /* Handle Dark mode */

    // Get savedMode from localStorage
    const [darkMode, setDarkMode] = useState(() => {/*...*/});

    // Handle Theme Change function - Save the change to localStorage
    const handleThemeChange = () => {
        setDarkMode((prevMode) => {/*...*/});
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <CssBaseline />
        </ThemeProvider>
  );
}

export default App;
```

## Handle multiple Languages
- Handling multiple languages in a React front-end app can be achieved using a library like ```react-i18next```. This library provides powerful and flexible internationalization (```i18n```) support for React applications
- Install ```react-i18next``` and ```i18next```
```bash
npm install react-i18next i18next --save-dev
```
- Create a Translation Configuration File: Create a file called ```i18n.js``` in the ```src``` directory and configure ```i18next```.
- Create Translation Files: Create translation files for each language in the ```public/locales``` directory. For example, create ```public/locales/en/translation.json``` and ```public/locales/vi/translation.json```.
- Initialize i18next in Your App: Import and initialize ```i18next``` in your ```index.js``` file
- Use Translations in Your Components: Use the ```useTranslation``` hook to access translations in your components
```javascript
import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>{t('navbar.home')}</li>
        <li>{t('navbar.about')}</li>
        <li>{t('navbar.contact')}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
```
- Add a Language Switcher: Create a language switcher component to allow users to change the language.
```javascript
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
    </div>
  );
};

export default LanguageSwitcher;
```
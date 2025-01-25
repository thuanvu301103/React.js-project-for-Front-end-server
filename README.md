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
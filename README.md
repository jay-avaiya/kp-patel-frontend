
# Vite Production Grade Template
by [Dhiraj Suthar](https://dhirajsportfolio.in.net)
A scalable, modular, and collaborative frontend project setup using **Vite**, **React**, **Redux**, and **Tailwind CSS (v4)**.

## Table of Contents

- [Install](#install)
- [Project Structure](#file)


---

## [Installation](#install)

Clone the Repo 
 ```sh
$ git clone https://github.com/ScremingAlien/vite-frontend-template-for-production-grade-project.git
```

Install packages with [npm](https://www.npmjs.com/package/cmtu)

```sh
$ npm install 

```



---

 


## [Project Structure](#file)

* public/
    * Static files (favicon, etc.)
* src/ 
    *  assets/    -----------  Static assets like images, fonts 
    *  constants/    -----------  App-wide constants 
    *  components/    -----------  Reusable UI components  
         *  ui/    -----------  Generic UI primitives (Button, Input) 
         *  shared/   -----------  Shared components (e.g., Navbar, Footer) 
    *  hooks/    -----------  Reusable custom hooks 
    *  layouts/    -----------  Layout components (MainLayout) 
        *  _default    ----------- Layouts like (NotFound)
    *  lib/    -----------  Utility functions and API clients 
        *  apis   ------------- For manageing apis 
        *  axios.js    -----------  Axios instance 
        *  helpers.js    -----------  Shared helpers 
    *  pages/    -----------  Route components  
        * Auth   ----------- Auth related pages
             * Login --------         Login page
             * Register --------         Register page
        * Main   ----------- HomePage related pages
             * Aboutpage --------         Aboutpage page
             * Homepage --------         Homepage page
    *  stores/    -----------  Global state management (Zustand, Redux, etc.) 
    *  styles/    -----------  Tailwind CSS setup and global styles  
    *  main.jsx    -----------  App entry point * 
    *  App.jsx    -----------  App entry point * 
*  index.html   ------------- Entry Point of App
*  package.json
*  package-lock.json
*  env    -----------  Environment variables 
*  vite.config.js 
*  README.md
 
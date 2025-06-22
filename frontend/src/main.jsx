// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {Provider} from "react-redux"
// import store from "./store"
// import { BrowserRouter as Router} from "react-router-dom"

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//        <Router>
//     <Provider store = {store}>
//     <App />
//     </Provider>
//     </Router>
//   </StrictMode>,
// )



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" // You can change to "dark" if your app uses a dark theme
        />
      </Provider>
    </Router>
  </StrictMode>
);

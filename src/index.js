import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';
/*
function initializeReactGA() {
    ReactGA.initialize('G-SQH7XMMNM4'); // Put your Tracking ID here
    //ReactGA.pageview('/'); // Tracks initial pageview
    ReactGA.send('page_view');
}

initializeReactGA();*/
ReactGA.initialize("G-SQH7XMMNM4")


const root = ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// Initialize Google Analytics 4
/*
const ga4react = new ReactGA('G-SQH7XMMNM4'); // replace with your Measurement ID

(async _ => {
  await ga4react.initialize();

  ga4react.send('page_view'); // Note this line

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
*/

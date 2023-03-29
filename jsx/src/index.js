// Import the React and ReactDOM libraries

// Library/package that defines what a component is and how multiple components work together.
import React from 'react';

// library/package that knows how to get a componsent show up on the browser.
import ReactDOM from 'react-dom/client';

// import App component. import both default and named export.
import App, {message} from './App';

// Get a reference to the div with ID root.
const el = document.getElementById('root');

// Tell React to take control of the element.
const root = ReactDOM.createRoot(el);

// show the component on the screen.
root.render(<App />);
import React from 'react';
import './App.css';
import ContactForm from './components/contactform';

const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 border">
          <h1 className="text-center">Contact Form</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default App;

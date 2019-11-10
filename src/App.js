import React from 'react';
import './App.css';
import ValidatedLoginForm from './components/ValidatedLoginForm';

const App = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ValidatedLoginForm />
        </div>
      </div>
    </div>
  )
}
export default App;
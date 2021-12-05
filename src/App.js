import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Register from './components/Register';
import React, { useState } from "react";

function App() {
  const [initialBalance, setInitialBalance] = useState(0);
  const [finalBalance, setFinalBalance] = useState();

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header initialBalance={initialBalance} 
          setInitialBalance={setInitialBalance} 
          finalBalance={finalBalance} 
          setFinalBalance={setFinalBalance}
          />
          <div className="div">
          <Register finalBalance={finalBalance} setFinalBalance={setFinalBalance}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
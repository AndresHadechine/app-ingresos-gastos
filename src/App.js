import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import Register from './components/Register';

function App() {
  const [initialBalance, setInitialBalance] = useState(null);
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
            <Register initialBalance={initialBalance} finalBalance={finalBalance} setFinalBalance={setFinalBalance} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
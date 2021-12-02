import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Register from './components/Register';





function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
          <div className="div">
          <Register />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
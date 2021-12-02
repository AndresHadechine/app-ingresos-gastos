import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Register from './components/Register';
import ListMove from './components/ListMove';




function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
          <Register />
          <ListMove />
        </div>
      </div>
    </div>
  );
}

export default App;
import './App.css';
import Header from './components/Header.jsx';
import SideNavBar from './components/SideNavBar.jsx';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <div>
          <SideNavBar />
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;

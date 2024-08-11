import './App.css';
import DeletePop from './Component/DeletePop';
import Login from './Component/Login';
import Navigation from './Component/Navigation';
import ReplyComp from './Component/ReplyComp';
import DbRight from './Component/DbRight';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Navigation" element={<Navigation />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          {/* You can add more routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

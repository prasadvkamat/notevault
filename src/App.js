import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context_notes/NoteState';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="message"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

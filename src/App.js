import './App.css';
import Header from './Header';
import Home from './Home'
import SearchPage from './SearchPage';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/search' element={<SearchPage/>}/>
          <Route exact path='/' element={<Home />}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

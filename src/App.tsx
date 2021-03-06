import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
	return (
		<div className="app">
    		<Router>
    			<Header />
        
        		<Routes>
          			<Route path="/search" element={<SearchPage/>} />
					<Route path='/' element={<Home/>} />
        		</Routes>

        		<Footer />
      		</ Router>
    	</div>
	);
  }

export default App;

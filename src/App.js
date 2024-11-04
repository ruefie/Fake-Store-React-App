import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/ui/Footer';
import Home from './components/products/Home';  
import CategoryProduct from './components/products/CategoryProduct';
import Header from './components/ui/Header';
import Search from './components/ui/Search';


import Category from './components/ui/Category';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://fakestoreapi.com/products`);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

 
  return (
    <Router>
      <Header /> 
      <div className="container">
        <Search getQuery={setQuery} />
        <Category />  
      </div>

      <Routes>
        <Route path="/" element={<Home items={items} isLoading={isLoading} query={query} setQuery={setQuery} />} />
        <Route path="/category/:categoryName" element={<CategoryProduct items={items} isLoading={isLoading} />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;

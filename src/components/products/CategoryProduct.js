import React, {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryProducts = ({ items, isLoading }) => {
  const { categoryName } = useParams();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Filter products based on the category name in the URL
    const filtered = items.filter(item => item.category.toLowerCase() === categoryName.toLowerCase());
    setFilteredItems(filtered);
  }, [items, categoryName]);

  return (
    <ProductCard isLoading={isLoading} items={filteredItems} />
  );
};

export default CategoryProducts;
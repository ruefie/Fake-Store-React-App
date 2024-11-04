import React from 'react';
import ProductCardList from './ProductCardList';
import SkeletonCard from '../ui/SkeletonCard';

const ProductCard = ({items, isLoading}) => {
  return(
  <section className='cards'>
    {  isLoading ? Array(8)
    .fill()
    .map((_, index) => <SkeletonCard key={index} />) :  (
      items.map((item) => (
        <ProductCardList key={item.id} item={item}></ProductCardList> 
      ))
    )}
    </section>
  
  );
}

export default ProductCard;

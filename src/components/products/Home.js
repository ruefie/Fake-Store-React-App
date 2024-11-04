  import React, {useState, useEffect} from "react";
  import ProductCard from "./ProductCard";


  const Home = ({items, isLoading, query, setQuery}) => {

    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
      
      const filtered = items.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    }, [items, query]);
    

    return(
  <div>
  
 
  <ProductCard isLoading={isLoading} items={filteredItems} />
  </div>
    );
  };

  export default Home;
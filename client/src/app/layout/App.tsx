import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Product } from '../models/product';

function App() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(()=>{
    fetch('http://localhost:5000/api/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[])

  // function addProduct(){
  //   setProducts(prevState=>[...prevState,
  //   {name:'product'+ (prevState.length+1) , price :(prevState.length * 100)+100}])
  // }
  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map(product=>(
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      {/* <button onClick={addProduct}>add product</button> */}
    </div>
  );
}

export default App;

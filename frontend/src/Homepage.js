import { useState, useEffect } from 'react';
import ProductCard from "./components/ProductCard";
import Typed from 'typed.js';
import { Link } from "react-router-dom";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.products)) {
          const products = data.products.map(product => ({
            currency: product.currency,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
          }));
          setProducts(products);
        } else {
          console.log('Inventory is not an array', data);
        }
      })
      .catch(error => console.error('Error fetching products', error));
  }, []);

  useEffect(() => {
    const options = {
      strings: ['Current Mode: Artistic', 'Current Mode: Relaxation', 'Current Mode: Adventure', 'Current Mode: Hustle'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      startDelay: 1000,
    };
  
    const typed = new Typed('#mode-description', options);
  
    // Destroy Typed instance on unmounting to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-20">
      <div className="text-5xl mb-8 text-center">
        <h1>Welcome to Mode!</h1>
      </div>
      <div className="text-lg mb-8 text-center text-gray-600">
        <p>Life is full of different moods and modes. Whether you're in an artistic mode, ready to create and express yourself, or in a relaxation mode, we have just what you need. Mode is your ultimate destination for finding the perfect products to complement your state of mind. Let's embrace every mode together!</p>
      </div>

      <div className="text-4xl mb-8 text-center text-gray-800 p-3">
        <span id="mode-description">Current Mode: Artistic Mode</span>
      </div>

        <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {products.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-4">
          <Link to="/products" className="text-blue-500 hover:underline">View more products</Link>
        </div>
    </div>
  );
  
}



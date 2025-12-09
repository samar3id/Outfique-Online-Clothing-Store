import { useState, useEffect } from 'react';
import productsData from '../data/products.json'; 

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            try {
                if (url === 'https://fakestoreapi.com/products') {
                    setData(productsData); 
                } 
                else if (url.includes('products?limit=')) {
                    const limit = Number(url.split('limit=')[1]);
                    const limitedProducts = productsData.slice(0, limit); 
                    setData(limitedProducts);
                }
                else if (url.includes('/products/')) {
                    const id = url.split('/').pop();
                    const product = productsData.find(p => p.id === parseInt(id));
                    setData(product || {});
                }
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};

export default useFetch;
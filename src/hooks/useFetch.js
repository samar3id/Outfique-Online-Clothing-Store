import { useState, useEffect } from 'react';
import productsData from '../data/products.json'; 

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (url.includes('products')) {
                    if (url === 'https://fakestoreapi.com/products' || url.includes('products?limit=')) {
                        setData(productsData);
                    } else if (url.includes('/products/')) {
                        const id = url.split('/').pop();
                        const product = productsData.find(p => p.id === parseInt(id));
                        setData(product || {});
                    }
                } else {
                    const response = await fetch(url);
                    const result = await response.json();
                    setData(result);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
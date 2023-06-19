import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingScreen from '../../components/LoadingScreen';

const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL;

const Shopfront = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        axios
            .get(`${productsUrl}`)
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
                extractAllCategories(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const extractAllCategories = (products) => {
        const categories = products.reduce((acc, product) => {
            if (product.categories && product.categories.length > 0) {
                product.categories.forEach((category) => {
                    if (!acc.includes(category.slug)) {
                        acc.push(category.slug);
                    }
                });
            }
            return acc;
        }, []);
        setAllCategories(categories);
    };

    const filterProductsByCategory = (categorySlug) => {
        setSelectedCategory(categorySlug);
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const getFeaturedImage = (product) => {
        if (product && product.images && product.images[0]) {
            return product.images[0].src;
        } else {
            return 'https://via.placeholder.com/150';
        }
    };

    const displayedPrice = (product) => {
        if (product && product.prices && product.prices.price) {
            return product.prices.price / 100;
        } else {
            return 0;
        }
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) =>
            product.categories.some((category) => category.slug === selectedCategory)
        )
        : products;

    return (
        <div id="shop-page" className="shop-container flex justify-center">
            <div className="shop-page-container w-3/4">
                <h2 className="text-6xl text-center w-full text-purple py-8">SHOP</h2>
                <div id="category-buttons">
                    {allCategories.map((category) => (
                        <button
                            className='text-purple mx-4 px-8 py-2 border border-purple rounded-md'
                            key={category}
                            onClick={() => filterProductsByCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                    <button className='text-purple px-8 py-2 border border-purple rounded-md' onClick={() => setSelectedCategory(null)}>Show All</button>
                </div>
                <div
                    id="product-grid"
                    className="grid-container flex flex-row flex-wrap justify-around text-center"
                >
                    {loading ? (
                        <LoadingScreen />
                    ) : (
                        filteredProducts &&
                        filteredProducts
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((product, index) => (
                                <div className="product-container p-8 text-purple" key={index}>
                                    <div className="product-card">
                                        <img
                                            className="product-Image"
                                            src={getFeaturedImage(product)}
                                            alt="Product Image"
                                        />
                                        <Link className="product-link" to={`/product/${product.id}`}>
                                            <h4 className="name">{product.name}</h4>
                                            <h4 className="name">${displayedPrice(product)}</h4>
                                        </Link>
                                    </div>
                                </div>
                            ))
                    )}
                </div>
                <div className="pagination flex justify-around w-full my-4">
                    <button
                        className="border border-purple border-sm text-purple text-center px-8 py-2 rounded-md"
                        onClick={previousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        className="border border-purple border-sm  text-purple text-center px-8 py-2 rounded-md"
                        onClick={nextPage}
                        disabled={currentPage * itemsPerPage >= (filteredProducts?.length || 0)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shopfront;

import { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from '../../components/LoadingScreen';

//utilities
import AddToCart from './utilities/AddToCart';
import Notification from './utilities/notification';

//Products url
const productsUrl = import.meta.env.VITE_WC_SINGLE_PRODUCTS_URL;

const Product = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    // state variables
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [responseReceived, setResponse] = useState(false);
    const [notification, setNotification] = useState("");
    const [buttonStatus, updateButtonStatus] = useState("Add to cart");

    const endpoint = `${productsUrl}/${id}`;

    useEffect(() => {
        axios.get(endpoint)
            .then((res) => {
                setProduct(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [endpoint]);

    if (loading) {
        return <LoadingScreen />;
    }

    const price = product.prices.price / 100

    return (
        <>
            <div className="flex flex-row">
                <div className="flex flex-row">
                    <div>
                        <img className='w-96 h-auto m-8' src={product.images[0].src} alt={product.name} />
                    </div>
                    <div className="flex flex-col px-8">
                        <div>
                            <h4 className="text-3xl text-center w-full text-purple py-8">{product.name}</h4>
                            <h3 className='text-lg text-center w-full text-purple py-8'>price:${price}</h3>
                        </div>

                        <div className='text-lg text-center w-full text-purple py-8' id="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
                        <div id="tools" className='bg-purple text-white w-48 lg:w-96 lg:h-12 border-2 border-purple rounded-2xl text-center my-4 lg:my-4 self-center shadow-2xl md:hover:scale-125 md:hover:-translate-y-2 transition-all md:duration-300 md:hover:bg-purple'>
                            <button
                                id="add-to-cart-button"
                                className="regular-button py-2 px-4"
                                onClick={() => {
                                    AddToCart(
                                        product.id,
                                        setResponse,
                                        setNotification,
                                        updateButtonStatus
                                    );
                                }}
                            >
                                {buttonStatus}
                            </button>
                            {/*custom message for the user when a product is added */}
                            {responseReceived && <Notification type={notification} />}
                            {/*  back button - useNavigate*/}

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Product;

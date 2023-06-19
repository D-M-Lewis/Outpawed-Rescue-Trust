import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../components/LoadingScreen';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Ourcats = () => {
    const [loading, setLoading] = useState(true);
    const [cat, setCat] = useState(null);

    const endpoint = `${baseUrl}/our_cat?_embed`;

    useEffect(() => {
        axios
            .get(endpoint)
            .then((res) => {
                setCat(res.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className='cat-container'>
            <h2 className='text-center text-6xl text-purple pt-16 pb-8'>Our Cats</h2>
            <p className="text-2xl text-purple px-8 sm:px-32 lg:px-72 py-4">
                At the time of adoption all of our cats and kittens are:
                Desexed (speyed/neutered)<br />
                Vaccinated: at least two sets of core vaccinations<br />
                Microchipped and registered on the New Zealand Companion Animal Register (NZCAR)<br />
                Up to date with flea and worm treatments.<br />
                Adoptees - Updated 29 May 2023
            </p>
            <div id='homeCont' className='flex flex-row flex-wrap justify-around px-8 lg:px-32'>
                {loading ? <LoadingScreen /> : <CatList cat={cat} />}
            </div>
        </div>
    );
};

const CatList = ({ cat }) => {
    if (!cat) {
        return null;
    }

    const mappedCat = cat.map((kitty, index) => {
        function getFeaturedImage(cat) {
            if (
                cat &&
                cat._embedded &&
                cat._embedded['wp:featuredmedia'] &&
                cat._embedded['wp:featuredmedia']['0'].source_url
            ) {
                return cat._embedded['wp:featuredmedia'][0].source_url;
            } else {
                return 'https://via.placeholder.com/150';
            }
        }

        return (
            <div className='cats-container flex flex-col xl:w-1/2 mb-4' key={kitty.slug + '-' + index}>
                <div className='individual--card px-12 py-8 sm:flex flex-row'>
                    <img className='sm:w-1/2 self-center pb-4'
                        src={getFeaturedImage(kitty)}
                        alt='Post Featured Image'
                    />
                    <div className='sm:w-1/2'>
                        <h4 className='title pl-8 text-purple text-2xl font-bold underline underline-offset-8 pb-4'>{kitty.title.rendered}</h4>
                        <p className='pl-8 text-purple py-4' dangerouslySetInnerHTML={{ __html: `Status: ${kitty.acf.status}` }} />
                        <p className='pl-8 text-purple py-4' dangerouslySetInnerHTML={{ __html: `Date of Birth: ${kitty.acf.dob}` }} />
                        <p className='pl-8 text-purple py-4' dangerouslySetInnerHTML={{ __html: `Location: ${kitty.acf.location}` }} />
                        <p className='pl-8 text-purple py-4' dangerouslySetInnerHTML={{ __html: `Arrived with us: ${kitty.acf.arrived}` }} />
                        <p className='pl-8 text-purple py-4' dangerouslySetInnerHTML={{ __html: `Gender: ${kitty.acf.gender}` }} />

                    </div>

                </div>
                <div className="text-purple my-2 px-16 block">
                    <p dangerouslySetInnerHTML={{ __html: kitty.acf.content }}></p>
                </div>
            </div>
        );
    });

    return <>{mappedCat}</>;
};

export default Ourcats;
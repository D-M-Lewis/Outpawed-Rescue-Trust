import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../components/LoadingScreen';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Sponsorship = () => {
    const [loading, setLoading] = useState(true);
    const [sponsor, setSponsor] = useState(null);

    const endpoint = `${baseUrl}/sponsor?_embed`;

    useEffect(() => {
        axios
            .get(endpoint)
            .then((res) => {
                setSponsor(res.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className='sponsor-container'>
            <h2 className='text-center text-6xl text-purple pt-16 pb-8'>Sponsorship</h2>
            <p className="text-2xl text-purple px-8 sm:px-32 lg:px-60 py-4">
                Sponsor a cat below! Your sponsorship will go directly to vet bills, food and care.
                You can name your sponsored cat and we can give you updates on their little lives so far - as well as let you know when they find their forever homes.</p>
            <p className="text-2xl text-purple px-8 sm:px-32 lg:px-60 py-4">
                Please note: This page is for sponsorships only. For adoptions, please see Our Cats page.
            </p>
            <p className="text-2xl text-purple px-8 sm:px-32 lg:px-60 py-4">
                Thank you for our names! When we are ready for adoption, we will be listed on the Our Cats pages.
            </p>
            <div id='homeCont' className='flex flex-row flex-wrap justify-around px-8 lg:px-32'>
                {loading ? <LoadingScreen /> : <SponsorList sponsor={sponsor} />}
            </div>
        </div>
    );
};

const SponsorList = ({ sponsor }) => {
    if (!sponsor) {
        return null;
    }

    const mappedCat = sponsor.map((spons, index) => {
        function getFeaturedImage(sponsor) {
            if (
                sponsor &&
                sponsor._embedded &&
                sponsor._embedded['wp:featuredmedia'] &&
                sponsor._embedded['wp:featuredmedia']['0'].source_url
            ) {
                return sponsor._embedded['wp:featuredmedia'][0].source_url;
            } else {
                return 'https://via.placeholder.com/150';
            }
        }

        return (
            <div className='cats-container' key={spons.slug + '-' + index}>
                <div className='individual--card w-70 lg:w-96 p-12'>
                    <img className='h-auto w-full'
                        src={getFeaturedImage(spons)}
                        alt='Post Featured Image'
                    />
                    <h4 className='title text-center text-purple text-2xl'>{spons.title.rendered}</h4>
                    <div dangerouslySetInnerHTML={{ __html: spons.content.rendered }} />
                </div>
            </div>
        );
    });

    return <>{mappedCat}</>;
};

export default Sponsorship;
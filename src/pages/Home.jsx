import { useState } from 'react'
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <>
            <section className='section-hero'>

                <div className="hero__image relative w-full">
                    <img className='w-full' src="../../public/human-cat.jpg" alt="Cat and Human staring at each other" />
                    <h2 className='text-2xl lg:text-6xl w-full text-white absolute inset-y-8 lg:inset-y-1/4 text-center'>Our mission is to find stray and <br />abandoned cats forever homes</h2>
                    <div className=' absolute bottom-16 sm:bottom-24 md:bottom-40 lg:bottom-60 xl:bottom-80 w-full flex flex-col max-h-fit'>
                        <Link to='/Foster' className='text-center'> <button className='bg-purple text-white w-48 lg:w-96 lg:h-12 border-2 border-purple rounded-2xl mb-1 lg:mb-4 self-center shadow-2xl md:hover:scale-125 md:hover:-translate-y-2 transition-all md:duration-300 md:hover:bg-purple'>FOSTER</button></Link>
                        <Link to='/Information' className='text-center'><button className='bg-white text-purple w-48 lg:w-96 lg:h-12 border-2 border-purple rounded-2xl text-center my-1 lg:my-4 self-center shadow-2xl md:hover:scale-125 md:hover:-translate-y-2 transition-all md:duration-300 md:hover:bg-white'>ADOPTION</button></Link>

                    </div>
                </div>
            </section>
            <section className="section-about mb-8 relative">
                <h2 className='text-center text-purple text-2xl sm:text-4xl lg:text-6xl mb-4 lg:mb-8 absolute left-1/2 -translate-y-8 sm:-translate-y-16 lg:-translate-y-24 -translate-x-1/2'>About</h2>
                <div className="about-text">
                    <p className="text-purple px-8 sm:px-16 md:px-40 lg:px-60 text-sm mb-4">Welcome to The Outpawed Rescue Trust, a compassionate community dedicated to rescuing and rehoming stray and abandoned cats. We believe that every cat deserves a second chance, a safe haven, and a loving forever home.</p>
                    <p className="text-purple px-8 sm:px-16 md:px-40 lg:px-60 text-sm mb-4">At The Outpawed Rescue Trust, we work tirelessly to make a positive impact on the lives of these vulnerable feline friends. Our dedicated team of volunteers and foster caregivers provide a temporary home for stray and abandoned cats, giving them the love, care, and attention they deserve during their journey towards a permanent loving family.</p>
                    <p className="text-purple px-8 sm:px-16 md:px-40 lg:px-60 text-sm mb-4">Our mission is two-fold. First, we rescue cats from various challenging situations, whether they are found on the streets, abandoned, or in dire need of medical care. We ensure they receive immediate veterinary attention, vaccinations, and are spayed or neutered to promote their well-being and prevent further overpopulation.</p>
                    <p className="text-purple px-8 sm:px-16 md:px-40 lg:px-60 text-sm mb-4">Secondly, we focus on finding each and every cat the perfect forever home. Our experienced adoption team carefully screens potential adopters, ensuring they are committed to providing a nurturing and stable environment. We strive to create lasting connections by thoughtfully matching each cat's unique personality and needs with their ideal human companions.</p>
                    <p className="text-purple px-8 sm:px-16 md:px-40 lg:px-60 text-sm mb-4">We understand that fostering is a crucial stepping stone in a cat's journey to their forever home. Our foster families open their hearts and homes, providing a nurturing environment where cats can heal, regain trust, and learn to love again. Through this compassionate network, we are able to give these precious felines a chance to flourish and discover their true potential.</p>
                    <p className="text-purple px-8 sm:px-16 md:px-40 lg:px-60 text-sm mb-4">But we cannot achieve our mission alone. The Outpawed Rescue Trust thrives on the support and generosity of our community. Whether you choose to adopt, foster, volunteer, donate, or simply spread awareness, your contribution helps us save more lives and create a brighter future for these incredible cats.</p>
                    <p className="text-purple px-8 sm:px-16 md:px-40 lg:px-60 text-sm mb-4">Join us in making a difference, one purr at a time. Together, we can provide hope and transform the lives of stray and abandoned cats, ensuring they never again experience the hardships of being alone.</p>
                    <p className="text-purple px-8 sm:px-16 md:px-40 lg:px-60 text-sm mb-4">Thank you for visiting The Outpawed Rescue Trust, where love and compassion pave the way to forever homes for our feline friends.</p>
                </div>
            </section>
        </>

    )
}

export default Home
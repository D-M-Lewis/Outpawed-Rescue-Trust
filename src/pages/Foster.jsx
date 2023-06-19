import React from 'react'
import { Link } from 'react-router-dom'

const Foster = () => {
    return (
        <>
            <div className="w-screen px-8 lg:px-32 xl:px-40 h-auto min-h-[800px] mb-12">
                <div className="heading">
                    <h2 className="text-6xl text-center w-full text-purple py-8">Foster</h2>
                </div>
                <div className="body-information lg:flex">
                    <div className="leftside flex justify-center relative w-screen lg:w-1/2">
                        <img className='h-auto w-60 lg:absolute hidden lg:block left-12 xl:left-24 top-24 hover:scale-125 hover:border-purple hover:border-8 hover:z-10 transition-all' src="../../public/image-top.jpg" alt="baby with cat" />
                        <img className='h-auto w-60 lg:absolute left-24 xl:left-60 top-[240px] hover:scale-125 hover:border-purple hover:border-8 hover:z-10 transition-all' src="../../public/image-center.jpg" alt="lady patting cats on top of bed" />
                        <img className='h-auto w-60 lg:absolute left-12 xl:left-24 hidden lg:block top-[380px] hover:scale-125 hover:border-purple hover:border-8 hover:z-10 transition-all' src="../../public/image-bottom.jpg" alt="lady with cat standing on porch" />
                    </div>
                    <div className="rightside w-screen lg:w-1/2 pt-16 flex flex-col">
                        <p className="text-purple px-16 text-md mb-4">Outpawed Rescue Trust relies on foster families to care for our cats. Foster arrangements are flexible and tailored to your experience and comfort level. We provide training and support throughout.</p>
                        <p className="text-purple px-16 text-md mb-4">Join our supportive foster family network and meet like-minded volunteers in your region. We supply all necessary supplies, including food, litter, and vet care. If needed, we can provide crates, litter trays, carry cages, and food bowls.</p>
                        <p className="text-purple px-16 text-md mb-4">Foster placements vary from 3 weeks to several months, depending on the cat's needs. You're not obligated to continue if it doesn't suit your family, but we'll assist if you want to give it a try. Our Wellington and Palmerston North Foster Coordinators are available.</p>
                        <p className="text-purple px-16 text-md mb-4">For more information, please email us at wellington@outpawed.org.nz or manawatu@outpawed.org.nz or apply now through the link below</p>

                    </div>
                </div>
                <div className='my-12 w-full flex justify-around align-middle'>
                    <Link to='/Foster' className='text-center'> <button className='bg-purple text-white w-48 lg:w-96 lg:h-12 border-2 border-purple rounded-2xl mb-1 lg:mb-4 self-center shadow-2xl md:hover:scale-125 md:hover:-translate-y-2 transition-all md:duration-300 md:hover:bg-purple'>Apply to Foster</button></Link>
                    <Link to='/Adopt' className='text-center'><button className='bg-white text-purple w-48 lg:w-96 lg:h-12 border-2 border-purple rounded-2xl text-center self-center shadow-2xl md:hover:scale-125 md:hover:-translate-y-2 transition-all md:duration-300 md:hover:bg-white'>Fostering Terms and Conditions</button></Link>
                </div>
            </div>

        </>
    )
}

export default Foster
import React from 'react'
import { Link } from 'react-router-dom'
import LoadingScreen from '../components/LoadingScreen'


const Adopt = () => {

    return (
        <>
            <div className="adoption-container text-purple flex flex-col">
                <h2 className='text-6xl text-center w-full py-8'>ADOPTION</h2>
                <h4 className='px-8 md:px-48 text-purple mb-8'>We would love to help you find your newest addition to your family. At Outpawed we have a range of felines that are in need of loving homes. As we are dedicated to the well-being of the animals, we have a 3-step process for adoption to find the best fit for the cat, and you.</h4>
            </div>
            <div className="md:flex text-purple w-screen md:px-32">
                <div className="left-side px-8 md:px-16 w-full md:w-1/2">
                    <h4 className='text-xl font-bold'>Step One: Apply</h4>
                    <p className='mb-8 px-8'>Fill out the Adoption Form</p>
                    <h4 className='text-xl font-bold'>Step Two: Meet</h4>
                    <p className='mb-8 px-8'>Once we have received your Adoption Form, we'll be in contact to arrange a visit with the cat or kitten you'd like to meet.</p>
                    <h4 className='text-xl font-bold'>Step Three: Adopt</h4>
                    <p className='mb-8 px-8'>If you choose to proceed with adoption, we'll provide the necessary paperwork and adoption fee to be paid before collecting your new family member.
                        Adopters can contact us at any time if they have any concerns or require advice about their new pet.</p>
                    <h4 className='text-xl font-bold'>Trial Adoptions</h4>
                    <p className='mb-8 px-8'>For some cats, trial adoption will be available. This is often recommended for teens and adults where you want to spend extra time with them to make sure they are going to fit into your family. We also recommend trial adoption for our more timid kitties. A trial is where you take the cat into your home on a trial basis (usually for about four weeks) so you can make sure the fit is right for you and for the cat. If you are interested in trial adoption, please get in touch. Please note that trial adoption is generally not available for kittens under 6 months, however, regardless of any circumstances we will gladly take a kitten back into care no questions asked. Unfortunately, fees are non-refundable.</p>
                    <h4 className='text-xl font-bold'>Barn Cat Adoptions</h4>
                    <p className='mb-8 px-8'>A "barn cat" is an unsocialised or timid cat that is better suited to life as a farm/working cat than as a family pet. These are often stray cats that are not socialised with people that we have been asked to relocate. Although we try to socialise and adopt where we can, some cats just prefer their own company or the company of other animals. We believe that these cats still deserve to have a nice life where they can be cared for and not exp className='text-xl font-bold'ected to return the favour with affection.</p>
                    <p className='mb-8 px-8'>Our barn placement cats will be desexed and microchipped before they come to you. We will help with advice for integrating them into their new territory or may be able to loan you a crate for this purpose. There is no adoption fee. All we ask is that you provide food, water, shelter and vet care when required. A farm, lifestyle block or rural property is ideal, although in some cases a cat might suit a more urban environment. Sometimes barn cats end up so comfortable with their new people that they become social enough to pet or han className='text-xl font-bold'dle, but this is dependent on the individual cat.</p>
                    <p className='mb-8 px-8'>If you would like to offer a placement to a barn cat, we would love to hear from you!</p>

                </div>
                <div className="right-side px-8 md:px-16 w-full md:w-1/2 text-white mb-8 md:mb-0">
                    <div className=' bg-purple p-8 border rounded-lg mt-4'>
                        <h4 className='mb-4 text-xl font-bold'>Fees</h4>

                        <p className='mb-4'>Kitten | $200.00</p>

                        <p className='mb-4'>Teens (6 - 10 months) | $175.00</p>

                        <p className='mb-4'>Cats (over 10 months) | $150.00</p>

                        <p className='mb-4'>All cats and kittens are desexed, fully vaccinated, micro-chipped, registered with NZCAR, de-flead, wormed, and vet checked. All cats and kittens come with a seven-day health guarantee from Outpawed.</p>

                        <p className='mb-4'>Kittens under 20 weeks are eligible for 6 weeks of free pet insurance from Southern Cross.</p>


                        <p className='mb-4'>Adoptions contact:
                            wellington@outpawed.org.nz</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Adopt
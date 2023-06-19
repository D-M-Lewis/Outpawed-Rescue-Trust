import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Information = () => {
    return (
        <>
            <div className="flex justify-center mt-4">
                <Link to='#adopt'><button className="border border-purple rounded-md bg-white text-purple mx-12 px-12 py-2 shadow-md shadow-purple hover:scale-125 transition-all">Cost of Adoption</button></Link>
                <Link to='#stray'><button className="border border-purple rounded-md bg-white text-purple mx-12 px-12 py-2 shadow-md shadow-purple hover:scale-125 transition-all">Visiting Strays</button></Link>
                <Link to='#tnr'><button className="border border-purple rounded-md bg-white text-purple mx-12 px-12 py-2 shadow-md shadow-purple hover:scale-125 transition-all"> Why trap/neuter/return</button></Link>
            </div>
            <div className="text-center text-purple">
                <h2 className='text-5xl font-bold pt-12 pb-2'>Information / </h2>
                <h2 className='text-5xl font-bold pb-12'>Frequently Asked Questions </h2>
            </div>

            <div className="text-purple px-8 md:px-32 lg:px-60">
                <h3 className="text-xl font-bold py-4">Where is Outpawed based</h3>
                <p className='py-4'>Outpawed is not a shelter and we do not have a "base" of operations. Our cats and kittens stay in our volunteer fosterers homes. Our HQ is in Palmerston North and our collective of volunteers are across Wellington and Palmerston North.</p>

                <h3 className="text-xl font-bold py-4">Where do I go to meet the cats and kittens?</h3>
                <p className='py-4'>Our cats and kittens are all out in foster homes. Let us know which cat or kitten(s) you are interested in and we will make an appointment for you with the foster home. You will need to have submitted a pre-adoption application first.</p>

                <h3 className="text-xl font-bold py-4">What is the adoption fee and what is included?</h3>
                <p className='py-4'>Our adoption fee for kittens up to six months is $150, teens 6 – 10 months $120 and adults over 10 months $100. All cats and kittens leave our care desexed (speyed/neutered), treated for fleas/worms, microchipped and with at least two sets of vaccinations already done. Microchip registration with the NZCAR is included.</p>

                <h3 className="text-xl font-bold py-4">How do I register a microchip?</h3>
                <p className='py-4'>The microchip registration will be completed for you within 10 working days of adoption. Please contact us if you have any questions or concerns.</p>

                <h3 className="text-xl font-bold py-4">How old do kittens need to be for adoption?</h3>
                <p className='py-4'>We adopt out our kittens at 12 weeks of age. This gives them the best chance of being strong and healthy when they go to their new homes. Kittens continue to learn appropriate behaviours from their mother and littermates right up to this point. Our goal is to send you a kitten that is healthy and well-equipped for their new environment.</p>

                <h3 className="text-xl font-bold py-4">The new cat I adopted isn’t fitting in with our family. What can I do?</h3>
                <p className='py-4'>In general, it could take a few weeks for a cat to feel comfortable in their new home. However, if you feel that it really isn’t working out, we are happy to receive the cat back into care no questions asked. Please note we are unable to refund any fees paid.</p>
            </div>
            <div id='adopt' className="text-purple px-8 md:px-32 lg:px-60">
                <h2 className='text-5xl font-bold py-12 text-center'>Cost of Adoption </h2>
                <h3 className='text-2xl font-bold py4'>The cost of adopting a cat or kitten from a rescue are generally much lower than the cost you would be faced with when you get a "free" kitten. How can this be? </h3>
                <p className='py-4'>When you get a "free" kitten from someone, chances are he or she will not yet be desexed (speyed or neutered), vaccinated or microchipped. This means you will need to organise this with your own vet. A kitten can normally be de-sexed as soon as it reaches 1 kg of body weight, and this should well before six months of age to prevent unwanted litters and issues such as spraying.</p>
                <p className='py-4'>Vet fees for desexing can range from $200 to $250, depending on location, cat's gender, and included medications. In Wellington, the average neuter price is around $150, while the average spey price is approximately $190.</p>
                <p className='py-4'>Kittens require at least two sets of core vaccinations, costing around $90 per consultation, totaling approximately $180 for vaccinations alone.</p>
                <p className='py-4'>Microchipping costs vary from $30 to $80, with some areas mandating it. Even if not mandatory, microchipping is highly recommended for easy identification if pets get lost or stolen.</p>
                <p className='py-4'>When considering all these costs, the total ranges from $450 to $600, excluding flea and worm treatments, food, and additional vet care.</p>
                <p className='py-4'>IWhen considering all these costs, the total ranges from $450 to $600, excluding flea and worm treatments, food, and additional vet care.</p>
                <p className='py-4'>Adopting an Outpawed cat or kitten covers all the aforementioned procedures: desexing, microchipping, NZCAR registration, and multiple vaccinations. You only need to pay an adoption fee of $150 to $200, which helps offset the costs incurred in preparing the cat for adoption.</p>
                <p className="py-4">Please contact us for further information on cat ownership costs.</p>
            </div>
            <div className="text-purple px-8 md:px-32 lg:px-60">
                <h2 id='stray' className='text-5xl font-bold py-12 text-center'>What to do if you have a visiting stray cat</h2>
                <h3 className='text-2xl font-bold py-4'>What to do if a stray cat visits your home:</h3>

                <h5 className='text-lg font-bold py-4'>Step 1:</h5>
                <p className='py-4'>Check if the cat has a collar. Take a photo and share it on local social media pages to find the owner. Contact the New Zealand Lost Pet Register for assistance. If no owner is found, proceed to Step 2.</p>

                <h5 className='text-lg font-bold py-4'>Step 2:</h5>
                <p className='py-4'>If the cat is friendly, try using a paper collar. Write your name and phone number on it and place it around the cat's neck. If you don't hear from the owner within seven days, contact a vet for a microchip scan or reach out to a rescue for assistance.</p>

                <p className='py-4'>If the cat is unsocialized or timid:
                    Contact a local rescue if you are unable to handle the cat and don't have access to a trap.</p>

                <h3 className='text-2xl font-bold py-4'>If you have access to a trap, follow these steps:</h3>

                <h5 className='text-lg font-bold py-4'>Step 1:</h5>
                Decide on a plan for the cat:

                <p className='py-4'>Trap-Neuter-Return: Desex the cat and return it to your property. Consider discounted desexing options from rescues or organize fundraising with neighbors. Alternatively, find a barn/farm placement with the help of a rescue.</p>
                <p className='py-4'>Contact a rescue for assistance: A rescue may provide help with trapping, desexing, and caring for the cat. This option may involve a waitlist depending on their availability.</p>
                <p className='py-4'>Trap and foster the cat yourself: Seek advice from a rescue if you choose to work with the cat. Once the cat becomes friendly, the rescue may assist with desexing and finding a new home.</p>
                <h5 className='text-lg font-bold py-4'>Step 2:</h5>
                <p className='py-4'>Coordinate with the rescue if they are involved in desexing or fostering. Obtain their approval before proceeding with trapping. Communication is vital throughout the process.</p>
            </div>
            <div className="text-purple px-8 md:px-32 lg:px-60 mb-8">
                <h2 id='tnr' className='text-5xl font-bold py-12 text-center'>Why Trap-Neuter-Return? </h2>
                <h3 className='text-2xl font-bold py4'>Dealing with a stray cat colony causing issues in your neighborhood? Let's address your concerns.</h3>
                <p className='py-4'>Relocation is time-consuming. Finding alternative territories, like barn placements, for unsocialized cats is challenging. TNR (Trap-Neuter-Return) helps reduce nuisance behavior while we work on long-term solutions.</p>
                <p className='py-4'>Putting them in foster homes is limited. Few homes can handle unsocialized cats, requiring months of socialization efforts. Outpawed relies on volunteers' own homes, and some cats may not thrive in confinement.</p>
                <p className='py-4'>Trapping and killing is not humane. Studies support TNR as a more effective approach..</p>
                <p className='py-4'>Removing cats has negative consequences. New strays will enter, causing fights, spraying, and noise. TNR lowers the cat population over time and removes adoptable cats and kittens.</p>
                <p className='py-4'>Consider TNR to minimize issues. It reduces noise, fights, spraying, and wildlife predation. A desexed colony improves overall health, avoiding vulnerable kittens. Rescues provide ongoing medical support.</p>
                <p className='py-4'>Want more information? Questions or barriers to TNR? Contact us. Interested in volunteering as a trapper or foster parent? We'd love to hear from you.</p>
            </div>

        </>
    )
}

export default Information
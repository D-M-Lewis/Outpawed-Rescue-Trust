import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        suburb: '',
        city: '',
        startDate: '',
        volunteeredBefore: '',
        currentVolunteering: '',
        canHelpWithStalls: false,
        stallAvailability: '',
        canAssistWithBaking: false,
        craftingTalents: '',
        areasToHelp: [],
        interestedInPlanning: '',
        questions: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: fieldValue,
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log(formData);
    };

    return (
        <>
            <div className="text-purple px-8 md:px-32 lg:px-60">
                <h2 className="text-6xl text-center w-full text-purple py-8">Foster</h2>
                <p className="py-4">
                    Volunteering with Outpawed is an incredibly rewarding experience that allows you to make a tangible impact in the
                    lives of stray and abandoned cats. As a volunteer, you play a vital role in helping us provide much-needed care,
                    support, and resources for these feline friends on their journey to finding forever homes. One crucial aspect where
                    volunteers can contribute is fundraising.
                </p>

                <p className="py-4">
                    Fundraising volunteers with Outpawed are the driving force behind our ability to provide essential veterinary care,
                    food, shelter, and other necessary supplies for the cats in our care. By organizing and participating in fundraising
                    events, campaigns, and initiatives, you help us secure the resources needed to ensure these cats receive the best
                    possible care and increase their chances of finding loving families.
                </p>

                <p className="py-4">
                    Volunteering in fundraising is flexible and can be tailored to fit your interests, skills, and availability. Whether
                    you're a creative event planner, a persuasive communicator, or an expert in online fundraising, there are various
                    ways to get involved. As a fundraising volunteer, you might assist in organizing adoption events, setting up
                    crowdfunding campaigns, reaching out to potential sponsors, managing donation drives, or coordinating online
                    fundraising efforts through social media platforms. By leveraging your skills and passion for helping animals, you
                    become an integral part of our team, making a significant difference in the lives of these vulnerable cats.
                </p>

                <p className="py-4">
                    Join our compassionate community of volunteers at Outpawed and be a driving force behind our fundraising efforts.
                    Together, we can create lasting change, ensuring that every stray and abandoned cat receives the love, care, and
                    support they deserve. By dedicating your time and talents, you become a lifeline for these cats, helping us build a
                    brighter future, one donation at a time.
                </p>
            </div>

            <div>
                <h2 className="text-4xl text-center w-full text-purple my-8 py-8">Volunteering Form</h2>

                <form className="[&>label]:py-2 [&>label]:flex [&>label]:flex-col [&>input]:px-8 text-purple flex flex-col px-8 md:px-32 lg:px-60" onSubmit={handleSubmit}>
                    <label>
                        Your name
                        <input
                            className="border border-black rounded-md ml-4 shadow-inner"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                        />
                    </label>

                    <label>
                        Your email
                        <input
                            className="border border-black rounded-md ml-4 shadow-inner"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                        />
                    </label>

                    <label>
                        Contact Number
                        <input
                            className="border border-black rounded-md ml-4 shadow-inner"
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Your address
                        <input
                            className="border border-black rounded-md ml-4 shadow-inner"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Suburb
                        <input
                            className="border border-black rounded-md ml-4 shadow-inner"
                            type="text"
                            name="suburb"
                            value={formData.suburb}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        City
                        <input
                            className="border border-black rounded-md ml-4 shadow-inner"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        When can you start volunteering from?
                        <input
                            className="border border-black rounded-md ml-4 shadow-inner"
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <h2 className="text-2xl text-center w-full text-purple my-8 py-8">Questionnaire</h2>

                    <label>
                        Have you volunteered for a charity before? If so, which one(s)?
                        <input
                            className="border border-black rounded-md ml-4 shadow-inner"
                            type="text"
                            name="volunteeredBefore"
                            value={formData.volunteeredBefore}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Are you currently involved in any other volunteer work? Please describe.
                        <textarea
                            className="border border-black rounded-md ml-4 shadow-inner"
                            name="currentVolunteering"
                            value={formData.currentVolunteering}
                            onChange={handleChange}
                        ></textarea>
                    </label>




                    <label>
                        Are you able to help with stalls and events?
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="radio"
                                name="canHelpWithStalls"
                                value="yes"
                                checked={formData.canHelpWithStalls === 'yes'}
                                onChange={handleChange}
                            />{' '}
                            Yes
                        </label>
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="radio"
                                name="canHelpWithStalls"
                                value="no"
                                checked={formData.canHelpWithStalls === 'no'}
                                onChange={handleChange}
                            />{' '}
                            No
                        </label>
                    </label>

                    {formData.canHelpWithStalls && (
                        <label>
                            If yes, what days suit you best and how much time are you able to commit to each stall/event?
                            <textarea
                                className="border border-black rounded-md ml-4 shadow-inner"
                                name="stallAvailability"
                                value={formData.stallAvailability}
                                onChange={handleChange}
                            ></textarea>
                        </label>
                    )}

                    <label>
                        Are you able to assist with baking?
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="radio"
                                name="canAssistWithBaking"
                                value="yes"
                                checked={formData.canAssistWithBaking === 'yes'}
                                onChange={handleChange}
                            />{' '}
                            Yes
                        </label>
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="radio"
                                name="canAssistWithBaking"
                                value="no"
                                checked={formData.canAssistWithBaking === 'no'}
                                onChange={handleChange}
                            />{' '}
                            No
                        </label>
                    </label>

                    <label>
                        Do you have any crafting talents? If so, would you be willing to make craft items to sell at market stalls?
                        <textarea
                            className="border border-black rounded-md ml-4 shadow-inner"
                            name="craftingTalents"
                            value={formData.craftingTalents}
                            onChange={handleChange}
                        ></textarea>
                    </label>

                    <label>
                        What areas are you able to help in? (check any that apply)
                        <br />
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="checkbox"
                                name="areasToHelp"
                                value="Lower Hutt"
                                checked={formData.areasToHelp.includes('Lower Hutt')}
                                onChange={handleChange}
                            />{' '}
                            Lower Hutt
                        </label>
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="checkbox"
                                name="areasToHelp"
                                value="Upper Hutt"
                                checked={formData.areasToHelp.includes('Upper Hutt')}
                                onChange={handleChange}
                            />{' '}
                            Upper Hutt
                        </label>
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="checkbox"
                                name="areasToHelp"
                                value="Wellington City"
                                checked={formData.areasToHelp.includes('Wellington City')}
                                onChange={handleChange}
                            />{' '}
                            Wellington City
                        </label>
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="checkbox"
                                name="areasToHelp"
                                value="Kapiti"
                                checked={formData.areasToHelp.includes('Kapiti')}
                                onChange={handleChange}
                            />{' '}
                            Kapiti
                        </label>
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="checkbox"
                                name="areasToHelp"
                                value="Porirua"
                                checked={formData.areasToHelp.includes('Porirua')}
                                onChange={handleChange}
                            />{' '}
                            Porirua
                        </label>
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="checkbox"
                                name="areasToHelp"
                                value="Palmerston North"
                                checked={formData.areasToHelp.includes('Palmerston North')}
                                onChange={handleChange}
                            />{' '}
                            Palmerston North
                        </label>
                    </label>

                    <label>
                        Would you be interested in planning, organising, or managing fundraising events?
                        <br />
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="radio"
                                name="interestedInPlanning"
                                value="yes"
                                checked={formData.interestedInPlanning === 'yes'}
                                onChange={handleChange}
                            />{' '}
                            Yes
                        </label>
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="radio"
                                name="interestedInPlanning"
                                value="no"
                                checked={formData.interestedInPlanning === 'no'}
                                onChange={handleChange}
                            />{' '}
                            No
                        </label>
                        <label>
                            <input
                                className="border border-black rounded-md ml-4 shadow-inner"
                                type="radio"
                                name="interestedInPlanning"
                                value="maybe in the future"
                                checked={formData.interestedInPlanning === 'maybe in the future'}
                                onChange={handleChange}
                            />{' '}
                            Maybe in the future
                        </label>
                    </label>

                    <label>
                        Do you have any questions for us?
                        <input
                            className="border border-black rounded-md ml-4 shadow-inner"
                            type="text"
                            name="questions"
                            value={formData.questions}
                            onChange={handleChange}
                        />
                    </label>

                    <button className='bg-purple text-white w-48 lg:w-96 lg:h-12 border-2 border-purple rounded-2xl my-4 lg:mb-4 self-center shadow-2xl md:hover:scale-125 md:hover:-translate-y-2 transition-all md:duration-300 md:hover:bg-purple' type="submit">Submit</button>
                </form>
            </div>

        </>

    );
};

export default ContactForm;

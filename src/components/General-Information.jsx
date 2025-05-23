import { useState } from 'react'


function GeneralInformation() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        <>
            <fieldset>
                <legend>
                    Personal Information:
                </legend>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>

                <div>
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="tel" id="phone-number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                </div>

            </fieldset>
        </>
    )
}


export default GeneralInformation
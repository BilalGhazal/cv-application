import { useState } from 'react'


function GeneralInformation({personalName, email, phoneNumber, onChange }) {

    return (
        <>
            <fieldset>
                <legend>
                    Personal Information:
                </legend>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={onChange} name="personalName" value={personalName} required />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={onChange} name="email" value={email} required />
                </div>

                <div>
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="tel" id="phone-number" onChange={onChange} name="phoneNumber" value={phoneNumber} required />
                </div>

            </fieldset>
        </>
    )
}


export default GeneralInformation
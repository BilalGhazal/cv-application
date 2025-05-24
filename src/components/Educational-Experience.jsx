import { useState } from 'react'


function EducationalExperience({schoolName, studyTitle, studyDate, onChange}) {
    
    return (
        <>
            <fieldset>
                <legend>
                    Educational Experience:
                </legend>
                <div>
                    <label htmlFor="school-name">School Name:</label>
                    <input type="text" id="school-name" onChange={onChange} name="schoolName" value={schoolName} />
                </div>

                <div>
                    <label htmlFor="study-title">Title of Study:</label>
                    <input type="text" id="study-title" onChange={onChange} name="studyTitle" value={studyTitle} />
                </div>

                <div>
                    <label htmlFor="study-date">Date of Study:</label>
                    <input type="date" id="study-date" onChange={onChange} name="studyDate" value={studyDate} />
                </div>

            </fieldset>
        </>
    )
}


export default EducationalExperience
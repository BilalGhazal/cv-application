import { useState } from 'react'


function EducationalExperience({schoolName, studyTitle, startDateStudy, endDateStudy, onChange}) {
    
    return (
        <>
            <fieldset>
                <legend>
                    Educational Experience:
                </legend>
                <div>
                    <label htmlFor="school-name">School Name:</label>
                    <input type="text" id="school-name" onChange={onChange} name="schoolName" value={schoolName} required />
                </div>

                <div>
                    <label htmlFor="study-title">Title of Study:</label>
                    <input type="text" id="study-title" onChange={onChange} name="studyTitle" value={studyTitle} required />
                </div>

                <div>
                    <label htmlFor="start-date-study">Start Date:</label>
                    <input type="date" id="start-date-study" onChange={onChange} name="startDateStudy" value={startDateStudy} />
                </div>

                <div>
                    <label htmlFor="end-date-study">End Date:</label>
                    <input type="date" id="end-date-study" onChange={onChange} name="endDateStudy" value={endDateStudy} />
                </div>

            </fieldset>
        </>
    )
}


export default EducationalExperience
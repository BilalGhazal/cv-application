import { useState } from 'react'


function EducationalExperience() {
    const [schoolName, setSchoolName] = useState("")
    const [studyTitle, setStudyTitle] = useState("")
    const [studyDate, setStudyDate] = useState("")

    return (
        <>
            <fieldset>
                <legend>
                    Educational Experience:
                </legend>
                <div>
                    <label htmlFor="school-name">School Name:</label>
                    <input type="text" id="school-name" onChange={(e) => setSchoolName(e.target.value)} value={schoolName} />
                </div>

                <div>
                    <label htmlFor="study-title">Title of Study:</label>
                    <input type="text" id="study-title" onChange={(e) => setStudyTitle(e.target.value)} value={studyTitle} />
                </div>

                <div>
                    <label htmlFor="study-date">Date of Study:</label>
                    <input type="date" id="study-date" onChange={(e) => setStudyDate(e.target.value)} value={studyDate} />
                </div>

            </fieldset>
        </>
    )
}


export default EducationalExperience
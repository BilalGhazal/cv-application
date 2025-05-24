function EducationalExperience({schoolName, studyTitle, studyDateStart, studyDateEnd, onChange}) {
    
    return (
        <>
            <fieldset>
                <legend>
                    Educational Experience:
                </legend>

                <div className="inputs">
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
                        <input type="date" id="start-date-study" onChange={onChange} name="studyDateStart" value={studyDateStart} />
                    </div>

                    <div>
                        <label htmlFor="end-date-study">End Date:</label>
                        <input type="date" id="end-date-study" onChange={onChange} name="studyDateEnd" value={studyDateEnd} />
                    </div>
                </div>

            </fieldset>
        </>
    )
}


export default EducationalExperience
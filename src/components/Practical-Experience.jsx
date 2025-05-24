function PracticalExperience({companyName, positionTitle, jobDescription, startDate, endDate, onChange}) {
    return (
        <>
            <fieldset>
                <legend>
                    Practical Experience:
                </legend>

                <div className="inputs">
                    <div>
                        <label htmlFor="company-name">Company Name:</label>
                        <input type="text" id="company-name" onChange={onChange} name="companyName" value={companyName} required />
                    </div>

                    <div>
                        <label htmlFor="position-title">Poition Title:</label>
                        <input type="text" id="position-title" onChange={onChange} name="positionTitle" value={positionTitle} required />
                    </div>

                    <div>
                        <label htmlFor="job-description">Job Description:</label>
                        <textarea type="text" id="job-description" onChange={onChange} name="jobDescription" value={jobDescription} rows={5} required />
                    </div>

                    <div>
                        <label htmlFor="start-date">Start Date:</label>
                        <input type="date" id="start-date" onChange={onChange} name="startDate" value={startDate} />
                    </div>

                    <div>
                        <label htmlFor="end-date">End Date:</label>
                        <input type="date" id="end-date" onChange={onChange} name="endDate" value={endDate} />
                    </div>
                </div>

            </fieldset>
        </>
    )
}


export default PracticalExperience
import { useState } from 'react'


function PracticalExperience() {

    const [controls, setControls] = useState([0])

    function handleAddition() {
        setControls(prev => [...prev, prev.length]);
    }

    function handleDelete(idToRemove) {
        setControls(prev => prev.filter(id => id !== idToRemove))
    }

    return (
        <>
            <fieldset>
                <legend>
                    Practical Experience:
                </legend>

                {controls.map((id) => (
                    <Control key={id} onDelete={() => handleDelete(id)} />
                ))}

                <button type="button" onClick={handleAddition}>+</button>
            </fieldset>
        </>
    )
}

function Control({onDelete}) {
    const [companyName, setCompanyName] = useState("")
    const [positionTitle, setPositionTitle] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    return(
        <>
            <div>
                    <label htmlFor="company-name">Company Name:</label>
                    <input type="text" id="company-name" onChange={(e) => setCompanyName(e.target.value)} value={companyName} />
                </div>

                <div>
                    <label htmlFor="position-title">Poition Title:</label>
                    <input type="text" id="position-title" onChange={(e) => setPositionTitle(e.target.value)} value={positionTitle} />
                </div>

                <div>
                    <label htmlFor="job-description">Job Description:</label>
                    <input type="text" id="job-description" onChange={(e) => setJobDescription(e.target.value)} value={jobDescription} />
                </div>

                <div>
                    <label htmlFor="start-date">Start Date:</label>
                    <input type="date" id="start-date" onChange={(e) => setStartDate(e.target.value)} value={startDate} />
                </div>

                <div>
                    <label htmlFor="end-date">End Date:</label>
                    <input type="date" id="end-date" onChange={(e) => setEndDate(e.target.value)} value={endDate} />
                </div>

                <button type="button" onClick={onDelete}>Delete</button>

                <hr/>
        </>
    )
}

export default PracticalExperience
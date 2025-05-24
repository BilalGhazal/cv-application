import { useState } from 'react'
import './App.css'
import GeneralInformation from "./components/General-Information.jsx"
import EducationalExperience from "./components/Educational-Experience.jsx"
import PracticalExperience from './components/Practical-Experience.jsx'

function App() {

  const [data, setData] = useState({
    personalName: "",
    email: "",
    phoneNumber: "",
    schoolName: "",
    studyTitle: "",
    studyDateStart: "",
    studyDateEnd: "",
    companyName: "",
    positionTitle: "",
    jobDescription: "",
    startDate: "",
    endDate: ""
  })

function handleChange(e) {
  const { name, value } = e.target;
  setData(prevData => ({
    ...prevData,
    [name]: value,
  }));
}

function handleReset() {
  const dataReset = Object.fromEntries(
    Object.keys(data).map(key => [key, ""])
  )

  setData(dataReset)
}



  const [isSubmitted, setIsSubmitted] = useState(false)


  function handleSubmission(e) {
    e.preventDefault()
    
    setIsSubmitted(true)
  
  }

  return (
    <>
      <h1>CV Maker</h1>

      {isSubmitted ? (
        <>
          <p>Name: {data.personalName}</p>
          <p>Email: {data.email}</p>
          <p>Phone number: {data.phoneNumber}</p>
          <p>School: {data.schoolName}</p>
          <p>Study Title: {data.studyTitle}</p>
          <p>StudyDate: {data.studyDateStart}</p>
          <p>Company Name: {data.companyName}</p>
          <p>Position Title: {data.positionTitle}</p>
          <p>Job Description: {data.jobDescription}</p>
          <p>Start Date: {data.startDate || "unknown"}</p>
          <p>End Date: {data.endDate || "unknown"}</p>

          <button type="button" onClick={() => setIsSubmitted(false)}>Edit</button>

        </>
      ) : (

        <form onSubmit={handleSubmission} required>

          <GeneralInformation personalName={data.personalName} email={data.email} phoneNumber={data.phoneNumber} onChange={handleChange} />

          <EducationalExperience schoolName={data.schoolName} studyTitle={data.studyTitle} studyDateStart={data.studyDateStart} studyDateEnd={data.studyDateEnd} onChange={handleChange} />

          <PracticalExperience companyName={data.companyName} positionTitle={data.positionTitle} jobDescription={data.jobDescription} startDate={data.startDate} endDate={data.endDate} onChange={handleChange} />

          <button>Submit</button>

          <button type="button" onClick={handleReset}>Reset</button>

        </form>
      )}
      
  
    </>
  )
}

export default App

import { useState } from 'react'
import './styles/App.css'
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
    workExeriences: [{companyName: "", positionTitle: "", jobDescription: "", startDate: "", endDate: ""}]
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
      <h1 className="header">CV Maker</h1>

      {isSubmitted ? (
        <div className="main">
          <div className="information">
            <div className="personal-information">
              <p>{data.personalName}</p>
              <p>{data.email}</p>
              <p>{data.phoneNumber}</p>
            </div>
            
            <div className="education-information">
              <p>{data.schoolName}</p>
              <p>{data.studyTitle}</p>
              {(data.studyDateStart || data.studyDateEnd) ? <p>{`${data.studyDateStart || "unknown"} - ${data.studyDateEnd || "unknown"}`}</p> : null}
            </div>
            
            <div className="work-information">
              <p>{data.companyName}</p>
              <p>{data.positionTitle}</p>
              {(data.startDate || data.endDate) ? <p>{`${data.startDate || "unknown"} - ${data.endDate = "unknown"}`}</p> : null}
              <p>{data.jobDescription}</p>
            </div>
          </div>

          <button type="button" onClick={() => setIsSubmitted(false)}>Edit</button>

        </div>
      ) : (

        <form onSubmit={handleSubmission}>

          <div className="fieldsets">

            <GeneralInformation personalName={data.personalName} email={data.email} phoneNumber={data.phoneNumber} onChange={handleChange} />

            <EducationalExperience schoolName={data.schoolName} studyTitle={data.studyTitle} studyDateStart={data.studyDateStart} studyDateEnd={data.studyDateEnd} onChange={handleChange} />

            <PracticalExperience companyName={data.companyName} positionTitle={data.positionTitle} jobDescription={data.jobDescription} startDate={data.startDate} endDate={data.endDate} onChange={handleChange} />

          </div>
          
          <div className="buttons">
            <button>Submit</button>

            <button type="button" onClick={handleReset}>Reset</button>
          </div>
          

        </form>
      )}
      
  
    </>
  )
}

export default App

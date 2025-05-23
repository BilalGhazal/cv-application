import { useState } from 'react'
import './App.css'
import GeneralInformation from "./components/General-Information.jsx"
import EducationalExperience from "./components/Educational-Experience.jsx"
import PracticalExperience from './components/Practical-Experience.jsx'

function App() {

  return (
    <>
      <GeneralInformation />

      <EducationalExperience />

      <PracticalExperience />
    </>
  )
}

export default App

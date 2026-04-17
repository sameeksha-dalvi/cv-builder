import { useState } from 'react'
import './App.css'
const Input = ({ label, value, onChange }) => {
  //console.log("Input value :", { value });
  return (
    <>
      <label>{label}</label>
      <input type="text"
        value={value}
        onChange={onChange}
      />
    </>

  )
}

const SectionHeader = ({ title }) => {
  return (
    <><h3>{title}</h3></>
  )
}

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleContactNumChange = (event) => {
    setContactNum(event.target.value)
  }

  const handleGithubUrlChange = (event) => {
    setGithubUrl(event.target.value)
  }

  const handleLinkedInUrlChange = (event) => {
    setLinkedInUrl(event.target.value)
  }

  return (
    <div>
      <h1>CV Builder App</h1>
      <div className="container">
        <div className="form-section">
          <SectionHeader title="Personal Information" />
          <Input label="First Name" value={firstName} onChange={handleFirstNameChange} />
          <Input label="Last Name" value={lastName} onChange={handleLastNameChange} />
          <Input label="Contact Number" value={contactNum} onChange={handleContactNumChange} />
          <Input label="Github URL" value={githubUrl} onChange={handleGithubUrlChange} />
          <Input label="LinkedIn URL" value={linkedInUrl} onChange={handleLinkedInUrlChange} />

        </div>
        <div className="preview-section">
          <div className='preview-header'>
            <h4>{firstName}</h4>
            <h4>{lastName}</h4>
          </div>
          <div className='preview-contact'>
            <p>{contactNum}</p>
            <p>{githubUrl}</p>
            <p>{linkedInUrl}</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App

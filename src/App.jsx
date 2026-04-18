import { useState } from 'react'
import './App.css'
const Input = ({ label, name, value, onChange, type = "text" }) => {
  //console.log("Input value :", { value });
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
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

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
  });

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

  const handleEducationChange = (e) => {
    console.log("handleEducationChange ", e)
    const { name, value } = e.target;

    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          <SectionHeader title="Education" />
          <Input label="School / University Name" name="school" value={education.school} onChange={handleEducationChange} />
          <Input label="Degree" name="degree" value={education.degree} onChange={handleEducationChange} />
          <Input label="Location" name="location" value={education.location} onChange={handleEducationChange} />
          <Input label="Start Date" name="startDate" type="date" value={education.startDate} onChange={handleEducationChange} />
          <Input label="End Date" name="endDate" type="date" value={education.endDate} onChange={handleEducationChange} />
          
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

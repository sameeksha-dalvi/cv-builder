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

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    contactNum: "",
    githubUrl: "",
    linkedInUrl: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;

    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          <Input
            label="First Name"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handlePersonalInfoChange} />
          <Input
            label="Last Name"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handlePersonalInfoChange}
          />
          <Input
            label="Contact Number"
            name="contactNum"
            value={personalInfo.contactNum}
            onChange={handlePersonalInfoChange}
          />
          <Input
            label="Github URL"
            name="githubUrl"
            value={personalInfo.githubUrl}
            onChange={handlePersonalInfoChange}
          />
          <Input
            label="LinkedIn URL"
            name="linkedInUrl"
            value={personalInfo.linkedInUrl}
            onChange={handlePersonalInfoChange}
          />
          <SectionHeader title="Education" />
          <Input
            label="School / University Name"
            name="school"
            value={education.school}
            onChange={handleEducationChange}
          />
          <Input
            label="Degree"
            name="degree"
            value={education.degree}
            onChange={handleEducationChange}
          />
          <Input
            label="Location"
            name="location"
            value={education.location}
            onChange={handleEducationChange}
          />
          <Input
            label="Start Date"
            name="startDate"
            type="date"
            value={education.startDate}
            onChange={handleEducationChange} />
          <Input
            label="End Date"
            name="endDate"
            type="date"
            value={education.endDate}
            onChange={handleEducationChange} />

        </div>
        <div className="preview-section">
          <div className='preview-header'>
            <h4>{personalInfo.firstName}</h4>
            <h4>{personalInfo.lastName}</h4>
          </div>
          <div className='preview-contact'>
            <p>{personalInfo.contactNum}</p>
            <p>{personalInfo.githubUrl}</p>
            <p>{personalInfo.linkedInUrl}</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App

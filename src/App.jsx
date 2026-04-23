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

  const [experience, setExperience] = useState({
    company: "",
    role: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;

    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEducationChange = (e) => {
    //console.log("handleEducationChange ", e)
    const { name, value } = e.target;

    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;

    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatDate = (date) => {
    if (!date) return "";

    const d = new Date(date);

    const day = d.getDate();
    const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const year = d.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const formatDateRange = (start, end) => {
    if (!start) return "";

    const formattedStart = formatDate(start);
    const formattedEnd = end ? formatDate(end) : "Present";

    return `${formattedStart} - ${formattedEnd}`;
  };

  const hasEducationData = education.school || education.degree;

  const hasExperienceData = experience.company || experience.role;

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
          <SectionHeader title="Experience" />
          <Input
            label="Company"
            name="company"
            value={experience.company}
            onChange={handleExperienceChange} />
          <Input
            label="Role"
            name="role"
            value={experience.role}
            onChange={handleExperienceChange} />

          <Input
            label="Location"
            name="location"
            value={experience.location}
            onChange={handleExperienceChange} />

          <Input
            label="Start Date"
            name="startDate"
            type="date"
            value={experience.startDate}
            onChange={handleExperienceChange} />

          <Input
            label="End Date"
            name="endDate"
            type="date"
            value={experience.endDate}
            onChange={handleExperienceChange} />

          <Input
            label="Description"
            name="description"
            value={experience.description}
            onChange={handleExperienceChange} />
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
          {hasEducationData && (
            <div className='preview-education'>
              <h4 className='preview-section-header'>Education</h4>
              <div className='preview-ed-data'>
                <div className='preview-ed-left'>
                  <p className='preview-ed-school'>{education.school}</p>
                  <p className='preview-ed-degree'>{education.degree}</p>
                </div>
                <div className='preview-ed-right'>
                  <p>
                    {formatDateRange(education.startDate, education.endDate)}
                    {education.location && ` | ${education.location}`}
                  </p>
                </div>
              </div>

            </div>
          )}
          {hasExperienceData && (
            <div className='preview-experience'>
              <h4 className='preview-section-header'>Experience</h4>

              <div className='preview-exp-data'>
                <div className='preview-exp-left'>
                  <p className='preview-exp-role'>{experience.role}</p>
                  <p className='preview-exp-company'>{experience.company}</p>
                  {experience.description && (
                    <p className='preview-exp-desc'>{experience.description}</p>
                  )}
                </div>

                <div className='preview-exp-right'>
                  <p>
                    {formatDateRange(experience.startDate, experience.endDate)}
                    {experience.location && ` | ${experience.location}`}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  )
}

export default App

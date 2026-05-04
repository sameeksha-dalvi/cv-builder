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

const ClearButton = ({ onClick }) => {
  return (
    <button className="clear-btn" onClick={onClick}>
      Clear All
    </button>
  );
};

const AddButton = ({label, onClick}) =>{
  return (
    <button className="add-btn" onClick={onClick}>
            {label}
    </button>
  )
}

const RemoveButton = ({onClick}) => {
  return(
    <button className="remove-btn" onClick={onClick}>
      Remove
    </button>
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


  const [educationList, setEducationList] = useState([
    {
      school: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      company: "",
      role: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [skills, setSkills] = useState("");

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;

    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;

    const updatedList = [...educationList];
    updatedList[index][name] = value;

    setEducationList(updatedList);
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;

    const updatedList = [...experienceList];
    updatedList[index][name] = value;

    setExperienceList(updatedList);
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


  const hasEducationData = educationList.some(
    (edu) => edu.school || edu.degree
  );

  const hasExperienceData = experienceList.some(
    (exp) => exp.company || exp.role
  );

  const skillsList = skills.split(",").map(skill => skill.trim()).filter(Boolean);

  const hasSkills = skillsList.length > 0;

  return (
    <div>
      <div className="header-section">
        <h1>CV Builder App</h1>
        <button className='download-btn'>Download CV</button>
      </div>

      <div className="container">
        <div className="form-section">
          <div className="section-header">
            <SectionHeader title="Personal Information" />
            <ClearButton
              onClick={() =>
                setPersonalInfo({
                  firstName: "",
                  lastName: "",
                  contactNum: "",
                  githubUrl: "",
                  linkedInUrl: "",
                })
              }
            />
          </div>

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
          <div className="section-header">
            <SectionHeader title="Education" />
            <ClearButton
              onClick={() =>
                setEducationList([
                  {
                    school: "",
                    degree: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                  },
                ])
              }
            />
          </div>

          {educationList.map((edu, index) => (
            <div key={index} className="section-item">
              <div className="section-actions">
                {educationList.length > 1 && (
                  <RemoveButton
                  
                    onClick={() => {
                      let newList = [...educationList];

                      newList.splice(index, 1); // remove the clicked item

                      if (newList.length === 0) {
                        newList = [
                          {
                            school: "",
                            degree: "",
                            location: "",
                            startDate: "",
                            endDate: "",
                          },
                        ];
                      }

                      setEducationList(newList);
                    }}
                  />
                )}

              </div>
              <Input
                label="School / University Name"
                name="school"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, e)}
              />

              <Input
                label="Degree"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
              />

              <Input
                label="Location"
                name="location"
                value={edu.location}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <div className="date-section">
                <Input
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={edu.startDate}
                  onChange={(e) => handleEducationChange(index, e)}
                />

                <Input
                  label="End Date"
                  name="endDate"
                  type="date"
                  value={edu.endDate}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>

            </div>
          ))}
          <AddButton
            label="Add Education"
            onClick={() =>
              setEducationList([
                ...educationList,
                {
                  school: "",
                  degree: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                },
              ])
            }
          />
          <div className="section-header">
            <SectionHeader title="Experience" />
            <ClearButton
              onClick={() =>
                setExperienceList([
                  {
                    company: "",
                    role: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  },
                ])
              }
            />
          </div>

          {experienceList.map((exp, index) => (
            <div key={index} className="section-item">

              <div className="section-actions">
                {experienceList.length > 1 && (
                  <RemoveButton
                    onClick={() => {
                      let newList = [...experienceList];
                      newList.splice(index, 1);// remove the clicked item

                      if (newList.length === 0) {
                        newList = [
                          {
                            company: "",
                            role: "",
                            location: "",
                            startDate: "",
                            endDate: "",
                            description: "",
                          },
                        ];
                      }

                      setExperienceList(newList);
                    }}
                  />
                )}
              </div>

              <Input
                label="Company"
                name="company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
              />

              <Input
                label="Role"
                name="role"
                value={exp.role}
                onChange={(e) => handleExperienceChange(index, e)}
              />

              <Input
                label="Location"
                name="location"
                value={exp.location}
                onChange={(e) => handleExperienceChange(index, e)}
              />

              <div className="date-section">
                <Input
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />

                <Input
                  label="End Date"
                  name="endDate"
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              <Input
                label="Description"
                name="description"
                value={exp.description}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </div>
          ))}
          <AddButton
            label="Add Experience"
            onClick={() =>
              setExperienceList([
                ...experienceList,
                {
                  company: "",
                  role: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                },
              ])
            }
          />
          <div className="section-header">
            <SectionHeader title="Skills" />
            <ClearButton onClick={() => setSkills("")} />
          </div>

          <Input
            label="Skills (comma separated)"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
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
              {educationList.map((edu, index) => (
                (edu.school || edu.degree) && (
                  <div key={index} className="preview-ed-data">
                    <div className="preview-ed-left">
                      <p className="preview-ed-school">{edu.school}</p>
                      <p className="preview-ed-degree">{edu.degree}</p>
                    </div>

                    <div className="preview-ed-right">
                      <p>
                        {formatDateRange(edu.startDate, edu.endDate)}
                        {edu.location && ` | ${edu.location}`}
                      </p>
                    </div>
                  </div>
                )
              ))}

            </div>
          )}
          {hasExperienceData && (
            <div className='preview-experience'>
              <h4 className='preview-section-header'>Experience</h4>
              {experienceList.map((exp, index) => (
                (exp.company || exp.role) && (
                  <div key={index} className="preview-exp-data">
                    <div className="preview-exp-left">
                      <p className="preview-exp-role">{exp.role}</p>
                      <p className="preview-exp-company">{exp.company}</p>

                      {exp.description && (
                        <p className="preview-exp-desc">{exp.description}</p>
                      )}
                    </div>

                    <div className="preview-exp-right">
                      <p>
                        {formatDateRange(exp.startDate, exp.endDate)}
                        {exp.location && ` | ${exp.location}`}
                      </p>
                    </div>
                  </div>
                )
              ))}

            </div>
          )}
          {hasSkills && (
            <div className="preview-skills">
              <h4 className="preview-section-header">Skills</h4>

              <div className="preview-skills-list">
                {skillsList.map((skill, index) => (
                  <span key={index} className="preview-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}

export default App

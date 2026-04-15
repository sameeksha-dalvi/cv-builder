import { useState } from 'react'

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

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  return (
    <div>
      <h1>Cv Builder App</h1>
      <div>
        <SectionHeader title="Personal Information"/>
        <Input label="First Name" value={firstName} onChange={handleFirstNameChange} />
        <label>Last Name</label>
        <input type="text" />
        <label>Contact Number</label>
        <input type="tel" />
        <label>Github Link</label>
        <input type="text" />
        <label>LinkedIn Link</label>
        <input type="text" />

      </div>
      <div>
        <hr />
        <h3>Preview</h3>
        <p>{firstName}</p>
      </div>
    </div>
  )
}

export default App

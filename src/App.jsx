import { useState } from 'react'

const App = () => {
  const [firstName, setFirstName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  return (
    <div>
      <h1>Cv Builder App</h1>
      <div>
        <h3>Personal Information</h3>
        <label>First Name</label>
        <input type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
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

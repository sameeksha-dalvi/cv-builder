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

export default Input;
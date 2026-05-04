const AddButton = ({ label, onClick }) => {
  return (
    <button className="add-btn" onClick={onClick}>
      {label}
    </button>
  )
}

export default AddButton;
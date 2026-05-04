const SectionItem = ({ children, onRemove, showRemove }) => {
  return (
    <div className="section-item">
      <div className="section-actions">
        {showRemove && <RemoveButton onClick={onRemove} />}
      </div>
      {children}
    </div>
  )
}

export default SectionItem;
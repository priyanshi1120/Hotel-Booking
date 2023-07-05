const Checkboxes = ({ checkboxTexts }) => {
  // Render the checkbox list using the checkboxTexts prop
  return (
    <div>
      {checkboxTexts.map((text, index) => (
        <div key={index} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={text}
            id={`checkbox-${index}`}
          />
          <label className="form-check-label text-muted" htmlFor={`checkbox-${index}`}>
            {text}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Checkboxes;

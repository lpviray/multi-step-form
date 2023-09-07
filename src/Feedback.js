export default function Feedback(props) {
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
    }
  }

  function handleFeedbackChange(e) {
    props.setExtraFeedback((props.extraFeedback = e.target.value));
  }

  return (
    <>
      <form className="feedback-container">
        <label>
          <input
            className="feedback-input"
            type="text"
            onChange={handleFeedbackChange}
            onKeyDown={handleKeyPress}
          />
        </label>
      </form>
    </>
  );
}

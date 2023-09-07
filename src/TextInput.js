import { useState } from "react";

export default function TextInput(props) {
  let [attempt, setAttempt] = useState(false);
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
    }
  }

  function handleEmailChange(e) {
    props.setEmailValue((props.emailValue = e.target.value));

    emailPattern.test(props.emailValue) === true
      ? props.setEmail((props.email = true))
      : props.setEmail((props.email = false));

    emailPattern.test(props.emailValue) === true
      ? setAttempt((attempt = false))
      : setAttempt((attempt = true));
  }

  return (
    <>
      <form className="email-container">
        <label>
          <input
            className="email-input"
            type="email"
            placeholder="What's your email?"
            onChange={handleEmailChange}
            onKeyDown={handleKeyPress}
          />
        </label>
      </form>
      {emailPattern.test(props.emailValue) === false && attempt === true && (
        <p className="error-email">Please enter a valid email</p>
      )}
    </>
  );
}

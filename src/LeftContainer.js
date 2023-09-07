import { useState } from "react";
import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";
import Feedback from "./Feedback";

export default function LeftContainer(props) {
  const [email, setEmail] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [isActive, setIsActive] = useState(0);
  const [budgetChoice, setBudgetChoice] = useState("");
  let [budgetCheck, setBudgetCheck] = useState(false);
  let [extraFeedback, setExtraFeedback] = useState("");
  let leftSheetData;

  if (props.formStage === 0) {
    leftSheetData = (
      <>
        <h1 className="header">{props.prompt}</h1>
        <TextInput
          email={email}
          setEmail={setEmail}
          emailValue={emailValue}
          setEmailValue={setEmailValue}
        />
        <button
          className="button-input"
          type="submit"
          onClick={() => {
            email === true && props.setFormStage(props.formStage + 1);
          }}
        >
          Next
        </button>
      </>
    );
  }

  if (props.formStage === 1) {
    leftSheetData = (
      <>
        <h1 className="header money">{props.prompt}</h1>
        <ButtonGroup
          isActive={isActive}
          setIsActive={setIsActive}
          budgetChoice={budgetChoice}
          setBudgetChoice={setBudgetChoice}
        />
        {isActive === 0 && budgetCheck === true && (
          <p className="error-budget">Please select a budget option.</p>
        )}
        <button
          className="button-input"
          type="submit"
          onClick={() => {
            isActive > 0
              ? props.setFormStage(props.formStage + 1)
              : setBudgetCheck((budgetCheck = true));
          }}
        >
          Next
        </button>
      </>
    );
  }

  if (props.formStage === 2) {
    leftSheetData = (
      <>
        <h1 className="header addition">{props.prompt}</h1>
        <Feedback
          extraFeedback={extraFeedback}
          setExtraFeedback={setExtraFeedback}
        />
        <button
          className="button-input"
          type="submit"
          onClick={() => {
            props.setFormStage(props.formStage + 1);
            alert(JSON.stringify({ emailValue, budgetChoice, extraFeedback }));
            alert(
              `Email: ${emailValue}\nBudget Choice: ${budgetChoice}\nFeedback: ${extraFeedback}\n\nYour data has been saved in our database! We will follow up with you soon.`
            );
          }}
        >
          Next
        </button>
      </>
    );
  }

  if (props.formStage === 3) {
    leftSheetData = (
      <>
        <h1 className="header thanks">{props.prompt}</h1>
      </>
    );
  }

  return (
    <>
      <div className="content">{leftSheetData}</div>
    </>
  );
}

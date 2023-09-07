import { useState } from "react";
import "./styles.css";
import LeftContainer from "./LeftContainer";
import RightImage from "./RightImage";

export default function App() {
  const [formStage, setFormStage] = useState(0);
  const IMG_URLS = [
    "https://assets.codepen.io/6060109/form-stage-1.png",
    "https://assets.codepen.io/6060109/form-stage-2.png",
    "https://assets.codepen.io/6060109/form-stage-3.png",
    "https://assets.codepen.io/6060109/form-stage-4.png"
  ];
  const PROMPTS = [
    "Apply to work with our agency",
    "What's your budget?",
    "Anything else we should know?",
    "Thank you!"
  ];
  let sheetData;

  if (formStage === 0) {
    sheetData = (
      <>
        <LeftContainer
          formStage={formStage}
          setFormStage={setFormStage}
          prompt={PROMPTS[formStage]}
        />
        <RightImage src={IMG_URLS[formStage]} alt="Stage 1 Photo" />
      </>
    );
  }

  if (formStage === 1) {
    sheetData = (
      <>
        <LeftContainer
          formStage={formStage}
          setFormStage={setFormStage}
          prompt={PROMPTS[formStage]}
        />
        <RightImage src={IMG_URLS[formStage]} alt="Stage 2 Photo" />
      </>
    );
  }

  if (formStage === 2) {
    sheetData = (
      <>
        <LeftContainer
          formStage={formStage}
          setFormStage={setFormStage}
          prompt={PROMPTS[formStage]}
        />
        <RightImage src={IMG_URLS[formStage]} alt="Stage 3 Photo" />
      </>
    );
  }

  if (formStage === 3) {
    sheetData = (
      <>
        <LeftContainer
          formStage={formStage}
          setFormStage={setFormStage}
          prompt={PROMPTS[formStage]}
        />
        <RightImage src={IMG_URLS[formStage]} alt="Stage 4 Photo" />
      </>
    );
  }

  return <div className="App">{sheetData}</div>;
}

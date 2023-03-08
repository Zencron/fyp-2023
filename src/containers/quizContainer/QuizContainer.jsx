import styles from "./QuizContainer.module.css";
import { useState } from "react";

import FilledCard from "/src/components/filledCard/FilledCard";
import AssistChip from "/src/components/assistChip/AssistChip";

export default function QuizContainer() {
  const [question1Value, setQuestion1Value] = useState(null);
  const [question2Value, setQuestion2Value] = useState(null);

  function handleQuestion1(event) {
    setQuestion1Value(event.target.value);
  }

  function handleQuestion2(event) {
    setQuestion2Value(event.target.value);
  }

  function handleSubmitQuiz() {
    console.log(question1Value);
    console.log(question2Value);
  }

  return (
    <div>
      <FilledCard>
        <div className={styles.mainCard}>
          <form className={styles.formGrid}>
            <h2>MOSFET Quiz 1</h2>
            <div>
              <div>1) Choose your favorite Web language</div>
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="HTML"
                  checked={question1Value === "HTML"}
                  onChange={handleQuestion1}
                />
                HTML
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="CSS"
                  checked={question1Value === "CSS"}
                  onChange={handleQuestion1}
                />
                CSS
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="JavaScript"
                  checked={question1Value === "JavaScript"}
                  onChange={handleQuestion1}
                />
                JavaScript
              </label>
            </div>
            <div>
              <div>2) Explain something about MOSFETs</div>
              <label>
                <input
                  type="radio"
                  name="question2"
                  value="1"
                  checked={question2Value === "1"}
                  onChange={handleQuestion2}
                />
                This is something about MOSFETs number 1
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question2"
                  value="2"
                  checked={question2Value === "2"}
                  onChange={handleQuestion2}
                />
                This is something about MOSFETs number 2
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question2"
                  value="3"
                  checked={question2Value === "3"}
                  onChange={handleQuestion2}
                />
                This is something about MOSFETs number 3
              </label>
            </div>
            <div>
              <AssistChip onClick={handleSubmitQuiz}>Submit</AssistChip>
            </div>
          </form>
        </div>
      </FilledCard>
    </div>
  );
}

import styles from "./QuizContainer.module.css";
import { useState } from "react";

import FilledCard from "/src/components/filledCard/FilledCard";
import AssistChip from "/src/components/assistChip/AssistChip";

export default function QuizContainer() {
  const [question1Value, setQuestion1Value] = useState(null);
  const [question2Value, setQuestion2Value] = useState(null);
  const [question3Value, setQuestion3Value] = useState(null);
  const [question4Value, setQuestion4Value] = useState(null);
  const [question5Value, setQuestion5Value] = useState(null);

  function handleQuestion1(event) {
    setQuestion1Value(event.target.value);
  }

  function handleQuestion2(event) {
    setQuestion2Value(event.target.value);
  }
  function handleQuestion3(event) {
    setQuestion3Value(event.target.value);
  }
  function handleQuestion4(event) {
    setQuestion4Value(event.target.value);
  }
  function handleQuestion5(event) {
    setQuestion5Value(event.target.value);
  }

  function calculateScore() {
    let score = 0;
    if (question1Value === "CSS") {
      score += 1;
    }
    if (question2Value === "CSS") {
      score += 1;
    }
    if (question3Value === "CSS") {
      score += 1;
    }
    if (question4Value === "CSS") {
      score += 1;
    }
    if (question5Value === "CSS") {
      score += 1;
    }
    return score;
  }

  function handleSubmitQuiz() {
    if (
      question1Value &&
      question2Value &&
      question3Value &&
      question4Value &&
      question5Value
    ) {
      const score = calculateScore();
      alert(`Your final score is ${score}/5`);
    } else {
      alert("Please answer all questions before submitting!");
    }
  }

  return (
    <div>
      <FilledCard colour="primaryContainer">
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
              <div>3) Explain something about MOSFETs</div>
              <label>
                <input
                  type="radio"
                  name="question3"
                  value="1"
                  checked={question3Value === "1"}
                  onChange={handleQuestion3}
                />
                This is something about MOSFETs number 1
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question3"
                  value="2"
                  checked={question3Value === "2"}
                  onChange={handleQuestion3}
                />
                This is something about MOSFETs number 2
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question3"
                  value="3"
                  checked={question3Value === "3"}
                  onChange={handleQuestion3}
                />
                This is something about MOSFETs number 3
              </label>
            </div>

            <div>
              <div>4) Explain something about MOSFETs</div>
              <label>
                <input
                  type="radio"
                  name="question4"
                  value="1"
                  checked={question4Value === "1"}
                  onChange={handleQuestion4}
                />
                This is something about MOSFETs number 1
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question4"
                  value="2"
                  checked={question4Value === "2"}
                  onChange={handleQuestion4}
                />
                This is something about MOSFETs number 2
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question4"
                  value="3"
                  checked={question4Value === "3"}
                  onChange={handleQuestion4}
                />
                This is something about MOSFETs number 3
              </label>
            </div>

            <div>
              <div>5) Explain something about MOSFETs</div>
              <label>
                <input
                  type="radio"
                  name="question5"
                  value="1"
                  checked={question5Value === "1"}
                  onChange={handleQuestion5}
                />
                This is something about MOSFETs number 1
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question5"
                  value="2"
                  checked={question5Value === "2"}
                  onChange={handleQuestion5}
                />
                This is something about MOSFETs number 2
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question5"
                  value="3"
                  checked={question5Value === "3"}
                  onChange={handleQuestion5}
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

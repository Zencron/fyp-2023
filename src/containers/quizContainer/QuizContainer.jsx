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
    if (question1Value === "1") {
      score += 1;
    }
    if (question2Value === "4") {
      score += 1;
    }
    if (question3Value === "2") {
      score += 1;
    }
    if (question4Value === "2") {
      score += 1;
    }
    if (question5Value === "1") {
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
              <div>1) What does MOSFET stand for?</div>
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="1"
                  checked={question1Value === "1"}
                  onChange={handleQuestion1}
                />
                Metal-Oxide Semiconductor Field Effect Transistor
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="2"
                  checked={question1Value === "2"}
                  onChange={handleQuestion1}
                />
                Microscopic Organic Semiconductor Field Effect Transistor
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="3"
                  checked={question1Value === "3"}
                  onChange={handleQuestion1}
                />
                Micro-Oscillating Semiconductor Field Effect Transistor
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="4"
                  checked={question1Value === "4"}
                  onChange={handleQuestion1}
                />
                Mono-Oxide Semiconductor Field Effect Transistor
              </label>
            </div>
            <div>
              <div>
                2) Which region of a MOSFET is responsible for controlling the
                flow of current?
              </div>
              <label>
                <input
                  type="radio"
                  name="question2"
                  value="1"
                  checked={question2Value === "1"}
                  onChange={handleQuestion2}
                />
                Substrate
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
                Drain
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
                Source
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question2"
                  value="4"
                  checked={question2Value === "4"}
                  onChange={handleQuestion2}
                />
                Gate
              </label>
            </div>

            <div>
              <div>3) What is the threshold voltage of a MOSFET?</div>
              <label>
                <input
                  type="radio"
                  name="question3"
                  value="1"
                  checked={question3Value === "1"}
                  onChange={handleQuestion3}
                />
                The voltage at which the MOSFET turns off
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
                The voltage at which the MOSFET turns on
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
                The voltage at which the MOSFET operates at its maximum power
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question3"
                  value="4"
                  checked={question3Value === "4"}
                  onChange={handleQuestion3}
                />
                The voltage at which the MOSFET changes its resistance
              </label>
            </div>

            <div>
              <div>
                4) What is the main advantage of using a MOSFET in a switching
                application compared to a BJT?
              </div>
              <label>
                <input
                  type="radio"
                  name="question4"
                  value="1"
                  checked={question4Value === "1"}
                  onChange={handleQuestion4}
                />
                Higher input impedance
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
                Lower switching losses
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
                Higher current gain
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question4"
                  value="4"
                  checked={question4Value === "4"}
                  onChange={handleQuestion4}
                />
                Lower cost
              </label>
            </div>

            <div>
              <div>
                5) In which configuration can a MOSFET be used as an amplifier?
              </div>
              <label>
                <input
                  type="radio"
                  name="question5"
                  value="1"
                  checked={question5Value === "1"}
                  onChange={handleQuestion5}
                />
                Common source
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
                Common gate
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
                Common drain
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question5"
                  value="4"
                  checked={question5Value === "4"}
                  onChange={handleQuestion5}
                />
                All of the above
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

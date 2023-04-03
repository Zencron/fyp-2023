import styles from "./DIYContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";

import circuit1 from "/src/assets/circuit1.jpg";

export default function DIYContainer() {
  return (
    <div>
      <FilledCard colour="primaryContainer">
        <div className={styles.mainCard}>
          <div className={styles.title}>DIY Buck Converter</div>
          <div>
            This page will take you through a step by steo guide of how to build
            a Buck converter circuit. The Buck converter is a good example of a
            simple circuit that showcases the features of a MOSFET.
          </div>
          <div>
            A Buck converter is a DC to DC step-down voltage converter whose
            output voltage is always lower than its input while its output
            current is more than its input. Ideally, its input and output power
            is the same. It is a category of switch mode power supply or SMPS
            which converts voltage from one level to another level very
            efficiently compared to linear regulator counter parts.
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableTextBold}>No.</div>
            <div className={styles.tableTextBold}>Item</div>
            <div className={styles.tableTextBold}>Quantity</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>1</div>
            <div className={styles.tableText}> oscillator IC555 chip</div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>2</div>
            <div className={styles.tableText}>1N4148 fast switching diodes</div>
            <div className={styles.tableText}>2</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>3</div>
            <div className={styles.tableText}>470pF capacitor</div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>3</div>
            <div className={styles.tableText}>0.1uF capacitor</div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>4</div>
            <div className={styles.tableText}>
              N-channel MOSFET (IRF540 / IRFZ44N)
            </div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>5</div>
            <div className={styles.tableText}>
              1N5819 / 1N5822 Schottky diode
            </div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>6</div>
            <div className={styles.tableText}>100uH inductor</div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>7</div>
            <div className={styles.tableText}>47K potentiometer</div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>8</div>
            <div className={styles.tableText}>1K resistor</div>
            <div className={styles.tableText}>1</div>
          </div>
          <img src={circuit1} alt="circuit1" width={300} />
        </div>
      </FilledCard>
    </div>
  );
}

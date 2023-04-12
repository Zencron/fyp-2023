import styles from "./DIYContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";

import circuit1 from "/src/assets/circuit1.jpg";
import diyCircuit from "/src/assets/diycircuit.webp";

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
            <div className={styles.tableText}>4</div>
            <div className={styles.tableText}>0.1uF capacitor</div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>5</div>
            <div className={styles.tableText}>
              N-channel MOSFET (IRF540 / IRFZ44N)
            </div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>6</div>
            <div className={styles.tableText}>
              1N5819 / 1N5822 Schottky diode
            </div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>7</div>
            <div className={styles.tableText}>100uH inductor</div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>8</div>
            <div className={styles.tableText}>47K potentiometer</div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>9</div>
            <div className={styles.tableText}>1K resistor</div>
            <div className={styles.tableText}>1</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableText}>10</div>
            <div className={styles.tableText}>
              1000 uF electrolytic capacitor
            </div>
            <div className={styles.tableText}>1</div>
          </div>
          <img src={diyCircuit} alt="circuit2" />
          <img src={circuit1} alt="circuit1" width={300} />
          <div>
            To operate the buck converter correctly, follow these steps in
            order: <br />
            First, connect the load to the output and a multimeter in VDC mode
            in parallel to the load. <br />
            Second, keep the potentiometer at its minimum position initially.{" "}
            <br />
            Third, power the buck converter (with 6V to 12VDC). <br />
            Fourth, gently rotate the potentiometer to increase the voltage
            until your desired load voltage is reached. <br />
            Fifth, always connect the load at the output first before powering
            the buck converter ON. <br />
            This is because there is no feedback system in this buck converter
            design, and without any load, the 1000uF capacitor will be charged
            to the input voltage. If a load is connected at this point, it will
            be subjected to higher voltage for a few milliseconds before
            dropping to the previously set value. Lastly, this circuit is best
            suited for fixed loads where the power consumed by the load remains
            constant as long as it is powered ON.
          </div>
        </div>
      </FilledCard>
    </div>
  );
}
